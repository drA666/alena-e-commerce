import { list } from '@keystone-6/core';
import { text, password, select, relationship } from '@keystone-6/core/fields';
import { UsersRolesValues } from '../consts/usersroles.const';
import { UsersRoles } from '../enums/usersroles.enum';
import { filterCustomerAccess, filterCustomerAccessCreate } from '../shared'; 

export const User = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
      isFilterable: true,
    }),
    password: password({ validation: { isRequired: true } }),
    role: select({
      type: 'enum',
      options: UsersRolesValues,
      defaultValue: UsersRoles.Customer,
    }),
    useraddress: relationship({ ref: 'UserAddress', many: true }),
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
    item: {
      update: ({ session, inputData }) =>
        filterCustomerAccessCreate(session, inputData),
    },
  },
  hooks: {
    afterOperation: async ({ operation, item, context }) => {
      if (operation !== 'create') {
        return;
      }
      const userId = item?.id;
      await context.prisma.ItemsCart.create({
        data: {
          user: { connect: { id: userId } },
        },
      });
    },
  },   
});