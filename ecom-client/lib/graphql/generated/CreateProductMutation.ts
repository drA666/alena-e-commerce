/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProductMutation
// ====================================================

export interface CreateProductMutation_createItem {
  __typename: "Item";
  id: string;
  price: any | null;
  seoDesc: string | null;
  name: string | null;
}

export interface CreateProductMutation {
  createItem: CreateProductMutation_createItem | null;
}

export interface CreateProductMutationVariables {
  name: string;
  description: string;
  price: any;
  image?: any | null;
}
