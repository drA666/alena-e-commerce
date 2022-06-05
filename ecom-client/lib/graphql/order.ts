import { gql } from "@apollo/client";

export const ORDER_QUERY = gql`
  query OrderQuery($id: ID!) {
    booking(where: { id: $id }) {
    id
    user {
      id
    }
    payment {
      id
    }
    delivery {
      id
    }
    employee  {
      id
    }
    status
    items
 }
}
`;
