/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductQuery
// ====================================================

export interface ProductQuery_item_itemImages_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface ProductQuery_item_itemImages {
  __typename: "ItemImage";
  id: string;
  alt: string | null;
  image: ProductQuery_item_itemImages_image | null;
}

export interface ProductQuery_item {
  __typename: "Item";
  id: string;
  name: string | null;
  price: any | null;
  seoDesc: string | null;
  stars: number | null;
  itemImages: ProductQuery_item_itemImages[] | null;
}

export interface ProductQuery {
  item: ProductQuery_item | null;
}

export interface ProductQueryVariables {
  id: string;
}
