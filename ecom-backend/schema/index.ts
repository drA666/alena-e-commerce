import { Lists } from '.keystone/types';
import { User } from './user.schema';
import { UserAddress } from './useraddress.schema';
import { CartItem } from './cart-items.schema';
import { ItemsCart } from './items-cart.schema';
import { Booking } from './booking.schema';
import { Item } from './item.schema';
import { Discount } from './discount.schema';
import { ItemType } from './item-type.schema';
import { ItemImage } from './item-image.schema';
import { Paying } from './paying.schema';
import { Delivery } from './delivery.schema';

export const lists: Lists = {
  User,
  UserAddress,
  ItemsCart,
  CartItem,
  Booking,
  Item,
  Discount,
  ItemType,
  ItemImage,
  Paying,
  Delivery,
};