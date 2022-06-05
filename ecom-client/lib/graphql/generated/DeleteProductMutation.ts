/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteProductMutation
// ====================================================

export interface DeleteProductMutation_deleteItem {
  __typename: "Item";
  id: string;
  name: string | null;
}

export interface DeleteProductMutation {
  deleteItem: DeleteProductMutation_deleteItem | null;
}

export interface DeleteProductMutationVariables {
  id: string;
}
