import { gql } from "@apollo/client";

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation RemoveFromCartMutation($id: ID!) {
    deleteCartItem(where:{id: $id}) {
      id
    }
  }
`;
