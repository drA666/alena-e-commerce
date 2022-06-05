/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CartItemCreateInput } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddToCartMutation
// ====================================================

export interface AddToCartMutation_createCartItem_item_itemImages_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface AddToCartMutation_createCartItem_item_itemImages {
  __typename: "ItemImage";
  image: AddToCartMutation_createCartItem_item_itemImages_image | null;
}

export interface AddToCartMutation_createCartItem_item {
  __typename: "Item";
  id: string;
  price: any | null;
  name: string | null;
  seoDesc: string | null;
  itemImages: AddToCartMutation_createCartItem_item_itemImages[] | null;
}

export interface AddToCartMutation_createCartItem {
  __typename: "CartItem";
  id: string;
  amount: number | null;
  item: AddToCartMutation_createCartItem_item | null;
}

export interface AddToCartMutation {
  createCartItem: AddToCartMutation_createCartItem | null;
}

export interface AddToCartMutationVariables {
  data: CartItemCreateInput;
}
