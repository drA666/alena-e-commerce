/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BookingStatusType } from "./graphql-global-types";

// ====================================================
// GraphQL query operation: OrderQuery
// ====================================================

export interface OrderQuery_booking_user {
  __typename: "User";
  id: string;
}

export interface OrderQuery_booking_payment {
  __typename: "Paying";
  id: string;
}

export interface OrderQuery_booking_delivery {
  __typename: "Delivery";
  id: string;
}

export interface OrderQuery_booking_employee {
  __typename: "User";
  id: string;
}

export interface OrderQuery_booking {
  __typename: "Booking";
  id: string;
  user: OrderQuery_booking_user | null;
  payment: OrderQuery_booking_payment | null;
  delivery: OrderQuery_booking_delivery | null;
  employee: OrderQuery_booking_employee | null;
  status: BookingStatusType | null;
  items: any | null;
}

export interface OrderQuery {
  booking: OrderQuery_booking | null;
}

export interface OrderQueryVariables {
  id: string;
}
