import { gql } from "@apollo/client";

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProductMutation(
    $id: ID!
    $imageId: ID!
    $name: String
    $description: String
    $price: Decimal
    $image: Upload
  ) {
    updateItem(where: {id: $id}, data: { name: $name, seoDesc: $description, price: $price }) {
      id
      name
      seoDesc
      price
    }
//    updateItemImage(where: {id: $imageId}, data: { image: $image, alt: $name }) {
//      id
//      alt
//      image {
//        publicUrlTransformed(transformation: { width: "400", crop: "limit", quality: "auto" })
//      }
//    }
  }
`;
