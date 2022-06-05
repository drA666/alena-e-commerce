import { gql } from "@apollo/client";

export const ADD_TO_CART_MUTATION = gql`
  mutation AddToCartMutation($data: CartItemCreateInput!) {
    createCartItem(data: $data) {
      id
      amount
      item {
        id
        price
        name
        seoDesc
        itemImages {
          image {
            publicUrlTransformed(transformation: { width: "400", crop: "limit", quality: "auto" })
          }
        }
      }
    }
  }
`;
