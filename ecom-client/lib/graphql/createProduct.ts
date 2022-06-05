import { gql } from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql`
  mutation CreateProductMutation(
    $name: String!
    $description: String!
    $price: Decimal!
    $image: Upload
  ) {
    createItem(
      data: {
        name: $name
        seoDesc: $description
        price: $price
        itemImages: { create: { image: $image, alt: $name } }
      }
    ) {
      id
      price
      seoDesc
      name
    }
  }
`;
