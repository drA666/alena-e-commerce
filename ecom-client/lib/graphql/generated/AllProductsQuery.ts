/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllProductsQuery
// ====================================================

export interface AllProductsQuery_items_itemImages_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface AllProductsQuery_items_itemImages {
  __typename: "ItemImage";
  id: string;
  alt: string | null;
  image: AllProductsQuery_items_itemImages_image | null;
}

export interface AllProductsQuery_items {
  __typename: "Item";
  id: string;
  name: string | null;
  price: any | null;
  seoDesc: string | null;
  stars: number | null;
  itemImages: AllProductsQuery_items_itemImages[] | null;
}

export interface AllProductsQuery {
  items: AllProductsQuery_items[] | null;
}
