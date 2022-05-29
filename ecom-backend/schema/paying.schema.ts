import { list } from '@keystone-6/core';
import {
  decimal,
  relationship,
  select,
  text,
  timestamp,
} from '@keystone-6/core/fields';
import { PayingStatusOptions } from '../consts/paying-status-options.const';
import { filterCustomerAccess, filterCustomerAccessCreate } from '../shared'; 

export const Paying = list({
  fields: {
    booking: relationship({ ref: 'Booking' }),
    sumAll: decimal(),
    currency: text(),
    externalId: text(),
    status: select({ type: 'enum', options: PayingStatusOptions }),
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
      query: ({ session }) => !!session,
      create: ({ session }) => !!session,
      update: ({ session }) => !!session,
      delete: ({ session }) => !!session,
    },
    filter: {
      query: ({ session }) => filterCustomerAccess(session),
      update: ({ session }) => filterCustomerAccess(session),
      delete: ({ session }) => filterCustomerAccess(session),
    },
    item: {
      create: ({ session, inputData }) =>
        filterCustomerAccessCreate(session, inputData),
    },
  },   
});