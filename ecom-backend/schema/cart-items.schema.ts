import { list } from '@keystone-6/core';
import { integer, relationship } from '@keystone-6/core/fields';

export const CartItem = list({
  fields: {
    item: relationship({ ref: 'Item' }),
    amount: integer({ defaultValue: 0, validation: { isRequired: true } }),
  },
  hooks: {
    validateInput: async ({ resolvedData, context, addValidationError }) => {
      const id = resolvedData.item.connect.id;
      const itemDiscounts = await context.query.Item.findOne({
        where: { id },
        query: 'discount { discount amountInNextDelivery }',
      });
      if (
        resolvedData.amount >
        itemDiscounts.discount.discount + itemDiscounts.discount.amountInNextDelivery
      ) {
        addValidationError('Not enough in discount.');
      }
    },
  },
});
