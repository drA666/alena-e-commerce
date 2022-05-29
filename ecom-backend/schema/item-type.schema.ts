import { list } from '@keystone-6/core';
import { relationship, text, timestamp } from '@keystone-6/core/fields';
import { UsersRoles } from '../enums/usersroles.enum'; 

export const ItemType = list({
  fields: {
    name: text({
      validation: { isRequired: true },
    }),
    parent: relationship({ ref: 'ItemType' }),
    items: relationship({ ref: 'Item', many: true }),
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