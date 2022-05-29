import { list } from '@keystone-6/core';
import { integer, timestamp } from '@keystone-6/core/fields';
import { UsersRoles } from '../enums/usersroles.enum'; 

export const Discount = list({
  fields: {
    discount: integer(),
    nextDelivery: timestamp(),
    amountInNextDelivery: integer(),
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