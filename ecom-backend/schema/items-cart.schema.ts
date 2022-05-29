import { list } from '@keystone-6/core';
import { decimal, relationship, timestamp } from '@keystone-6/core/fields';
import { filterCustomerAccess, filterCustomerAccessCreate } from '../shared';

export const ItemsCart = list({
  fields: {
    user: relationship({
      ref: 'User',
      ui: {
        hideCreate: true,
      },
    }),
    items: relationship({
      ref: 'CartItem',
      many: true,
      db: {
        foreignKey: true,
      },
    }),
    lastModified: timestamp({
      defaultValue: { kind: 'now' },
      db: {
        updatedAt: true,
      },
    }),
    sum: decimal({ validation: { isRequired: true }, defaultValue: '0' }),
  },
  access: {
    operation: {
      query: ({ session }) => !!session,
      update: ({ session }) => !!session,
      delete: ({ session }) => !!session,
    },
    filter: {
      query: ({ session }) => filterCustomerAccess(session),
      update: ({ session }) => filterCustomerAccess(session),
      delete: ({ session }) => filterCustomerAccess(session),
    },
  },
  graphql: {
    omit: ['create'],
  },
  hooks: {
    resolveInput: async ({ resolvedData, context }) => {
      if (resolvedData?.items.connect.length) {
        const items = await context.query.ItemsCartItem.findMany({
          where: {
            id: {
              in: resolvedData?.items.connect.map(
                (el: { id: string }) => el.id
              ),
            },
          },
          query: 'amount item { price }',
        });
        const sum = items.reduce((prev: number, current) => {
          const currentSum = current.item.price * current.amount;
          return prev + currentSum;
        }, 0);
        resolvedData.sum = sum;
      }
      return resolvedData;
    },
    beforeOperation: async ({ resolvedData, item, context }) => {
      if (resolvedData?.items) {
        const dbItems = await context.query.ItemsCart.findOne({
          where: { id: item ? (item.id as string) : '' },
          query: 'items { id }',
        });
        if (dbItems.items.length) {
          await context.query.ItemsCartItem.deleteMany({
            where: dbItems.items.map((el: { id: string }) => ({
              id: el.id,
            })),
          });
        }
      }
    },
  },
}); 