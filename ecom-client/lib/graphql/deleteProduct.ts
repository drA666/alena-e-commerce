import { gql } from "@apollo/client";

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: ID!) {
    deleteItem(where: {id: $id}) {
      id
      name
    }
  }
`;
