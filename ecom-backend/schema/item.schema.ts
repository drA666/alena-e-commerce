import { list } from '@keystone-6/core';
import {
  decimal,
  integer,
  relationship,
  text,
  timestamp,
} from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { UsersRoles } from '../enums/usersroles.enum'; 

export const Item = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: document(),
    seoDesc: text({ ui: { displayMode: 'textarea' } }),
    itemTypes: relationship({ ref: 'ItemType', many: true }),
    itemImages: relationship({ ref: 'ItemImage', many: true }),
    price: decimal(),
    stars: integer(),
    discount: relationship({ ref: 'Discount' }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
    lastModification: timestamp({
      defaultValue: { kind: 'now' },
      db: {
        updatedAt: true,
      },
    }),
  },
  access: {
    operation: {
      create: ({ session }) =>
        !!session && session.data.role !== UsersRoles.Customer,
      update: ({ session }) =>
        !!session && session.data.role !== UsersRoles.Customer,
      delete: ({ session }) =>
        !!session && session.data.role !== UsersRoles.Customer,
    },
  },
});