/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BookingStatusType } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: AllOrdersQuery
// ====================================================

export interface AllOrdersQuery_bookings_user {
  __typename: "User";
  id: string;
}

export interface AllOrdersQuery_bookings_delivery {
  __typename: "Delivery";
  id: string;
}

export interface AllOrdersQuery_bookings_payment {
  __typename: "Paying";
  id: string;
}

export interface AllOrdersQuery_bookings_employee {
  __typename: "User";
  id: string;
}

export interface AllOrdersQuery_bookings {
  __typename: "Booking";
  id: string;
  user: AllOrdersQuery_bookings_user | null;
  items: any | null;
  delivery: AllOrdersQuery_bookings_delivery | null;
  payment: AllOrdersQuery_bookings_payment | null;
  employee: AllOrdersQuery_bookings_employee | null;
  status: BookingStatusType | null;
}

export interface AllOrdersQuery {
  bookings: AllOrdersQuery_bookings[] | null;
}
