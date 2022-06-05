/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum BookingStatusType {
  Created = "Created",
}

export enum DeliveryStatusType {
  Created = "Created",
}

export enum PayingStatusType {
  Created = "Created",
}

export enum UserRoleType {
  admin = "admin",
  customer = "customer",
  worker = "worker",
}

export interface BookingCreateInput {
  user?: UserRelateToOneForCreateInput | null;
  items?: any | null;
  payment?: PayingRelateToOneForCreateInput | null;
  delivery?: DeliveryRelateToOneForCreateInput | null;
  employee?: UserRelateToOneForCreateInput | null;
  status?: BookingStatusType | null;
  createdAt?: any | null;
  lastModification?: any | null;
}

export interface BookingRelateToOneForCreateInput {
  create?: BookingCreateInput | null;
  connect?: BookingWhereUniqueInput | null;
}

export interface BookingWhereUniqueInput {
  id?: string | null;
}

export interface CartItemCreateInput {
  item?: ItemRelateToOneForCreateInput | null;
  amount?: number | null;
}

export interface DeliveryCreateInput {
  status?: DeliveryStatusType | null;
  externalId?: string | null;
  booking?: BookingRelateToOneForCreateInput | null;
  worker?: UserRelateToOneForCreateInput | null;
  createdAt?: any | null;
  lastModification?: any | null;
}

export interface DeliveryRelateToOneForCreateInput {
  create?: DeliveryCreateInput | null;
  connect?: DeliveryWhereUniqueInput | null;
}

export interface DeliveryWhereUniqueInput {
  id?: string | null;
}

export interface DiscountCreateInput {
  discount?: number | null;
  nextDelivery?: any | null;
  amountInNextDelivery?: number | null;
  createdAt?: any | null;
  lastModification?: any | null;
}

export interface DiscountRelateToOneForCreateInput {
  create?: DiscountCreateInput | null;
  connect?: DiscountWhereUniqueInput | null;
}

export interface DiscountWhereUniqueInput {
  id?: string | null;
}

export interface ItemCreateInput {
  name?: string | null;
  description?: any | null;
  seoDesc?: string | null;
  itemTypes?: ItemTypeRelateToManyForCreateInput | null;
  itemImages?: ItemImageRelateToManyForCreateInput | null;
  price?: any | null;
  stars?: number | null;
  discount?: DiscountRelateToOneForCreateInput | null;
  createdAt?: any | null;
  lastModification?: any | null;
}

export interface ItemImageCreateInput {
  alt?: string | null;
  image?: any | null;
  createdAt?: any | null;
  lastModification?: any | null;
}

export interface ItemImageRelateToManyForCreateInput {
  create?: ItemImageCreateInput[] | null;
  connect?: ItemImageWhereUniqueInput[] | null;
}

export interface ItemImageWhereUniqueInput {
  id?: string | null;
}

export interface ItemRelateToManyForCreateInput {
  create?: ItemCreateInput[] | null;
  connect?: ItemWhereUniqueInput[] | null;
}

export interface ItemRelateToOneForCreateInput {
  create?: ItemCreateInput | null;
  connect?: ItemWhereUniqueInput | null;
}

export interface ItemTypeCreateInput {
  name?: string | null;
  parent?: ItemTypeRelateToOneForCreateInput | null;
  items?: ItemRelateToManyForCreateInput | null;
  createdAt?: any | null;
  lastModification?: any | null;
}

export interface ItemTypeRelateToManyForCreateInput {
  create?: ItemTypeCreateInput[] | null;
  connect?: ItemTypeWhereUniqueInput[] | null;
}

export interface ItemTypeRelateToOneForCreateInput {
  create?: ItemTypeCreateInput | null;
  connect?: ItemTypeWhereUniqueInput | null;
}

export interface ItemTypeWhereUniqueInput {
  id?: string | null;
}

export interface ItemWhereUniqueInput {
  id?: string | null;
}

export interface PayingCreateInput {
  booking?: BookingRelateToOneForCreateInput | null;
  sumAll?: any | null;
  currency?: string | null;
  externalId?: string | null;
  status?: PayingStatusType | null;
  createdAt?: any | null;
  lastModification?: any | null;
}

export interface PayingRelateToOneForCreateInput {
  create?: PayingCreateInput | null;
  connect?: PayingWhereUniqueInput | null;
}

export interface PayingWhereUniqueInput {
  id?: string | null;
}

export interface UserAddressCreateInput {
  addressName?: string | null;
  name?: string | null;
  streetAddress?: string | null;
  streetAddress2?: string | null;
  city?: string | null;
  postCode?: string | null;
  country?: string | null;
  telNo?: string | null;
  user?: UserRelateToOneForCreateInput | null;
  createdAt?: any | null;
  lastModification?: any | null;
}

export interface UserAddressRelateToManyForCreateInput {
  create?: UserAddressCreateInput[] | null;
  connect?: UserAddressWhereUniqueInput[] | null;
}

export interface UserAddressWhereUniqueInput {
  id?: string | null;
}

export interface UserCreateInput {
  name?: string | null;
  email?: string | null;
  password?: string | null;
  role?: UserRoleType | null;
  useraddress?: UserAddressRelateToManyForCreateInput | null;
}

export interface UserRelateToOneForCreateInput {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserWhereUniqueInput {
  id?: string | null;
  email?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
