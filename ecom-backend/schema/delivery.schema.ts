import { list } from '@keystone-6/core';
import { relationship, select, text, timestamp } from '@keystone-6/core/fields';
import { DeliveryStatusOptions } from '../consts/delivery-status-options.const';
import { filterCustomerAccess, filterCustomerAccessCreate } from '../shared'; 

export const Delivery = list({
  fields: {
    status: select({ type: 'enum', options: DeliveryStatusOptions }),
    externalId: text(),
    booking: relationship({ ref: 'Booking' }),
    worker: relationship({ ref: 'User' }),
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