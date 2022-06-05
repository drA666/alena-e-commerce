/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BookingCreateInput, BookingStatusType } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateOrderMutation
// ====================================================

export interface CreateOrderMutation_createBooking_user {
  __typename: "User";
  id: string;
}

export interface CreateOrderMutation_createBooking_payment {
  __typename: "Paying";
  id: string;
}

export interface CreateOrderMutation_createBooking_delivery {
  __typename: "Delivery";
  id: string;
}

export interface CreateOrderMutation_createBooking_employee {
  __typename: "User";
  name: string | null;
}

export interface CreateOrderMutation_createBooking {
  __typename: "Booking";
  id: string;
  user: CreateOrderMutation_createBooking_user | null;
  items: any | null;
  payment: CreateOrderMutation_createBooking_payment | null;
  delivery: CreateOrderMutation_createBooking_delivery | null;
  employee: CreateOrderMutation_createBooking_employee | null;
  status: BookingStatusType | null;
}

export interface CreateOrderMutation {
  createBooking: CreateOrderMutation_createBooking | null;
}

export interface CreateOrderMutationVariables {
  bookingCreateInput: BookingCreateInput;
}
