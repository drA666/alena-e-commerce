import { gql } from "@apollo/client";

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($bookingCreateInput: BookingCreateInput!) {
    createBooking (data: $bookingCreateInput){
      id
      user {
	    id
	  }
      items
	  payment{
	    id
	  }
      delivery{
	    id
	  }
      employee{
	     name
	  } 
      status
	}  
  }
`;
