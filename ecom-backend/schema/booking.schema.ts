import { list } from '@keystone-6/core';
import { json, relationship, select, timestamp } from '@keystone-6/core/fields';
import { BookingStatusOptions } from '../consts/booking-status-options.const';
import { filterCustomerAccess, filterCustomerAccessCreate } from '../shared'; 

export const Booking = list({
  fields: {
    user: relationship({ ref: 'User' }),
    items: json(),
    payment: relationship({ ref: 'Paying' }),
    delivery: relationship({ ref: 'Delivery' }),
    employee: relationship({ ref: 'User' }),
    status: select({ type: 'enum', options: BookingStatusOptions }),
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