import { gql } from "@apollo/client";

export const ALL_ORDERS_QUERY = gql`
  query AllOrdersQuery {
    bookings {
      id
      user {
        id
      }
      items 
      delivery {
         id
      }
      payment {
         id
      }
      delivery {
	     id
	  }
      employee {
	      id
	  }
      status 
    }
  }
`;
