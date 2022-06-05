/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignInMutation
// ====================================================

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess {
  __typename: "UserAuthenticationWithPasswordSuccess";
  item: SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item;
}

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure {
  __typename: "UserAuthenticationWithPasswordFailure";
  message: string;
}

export type SignInMutation_authenticateUserWithPassword = SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess | SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure;

export interface SignInMutation {
  authenticateUserWithPassword: SignInMutation_authenticateUserWithPassword | null;
}

export interface SignInMutationVariables {
  email: string;
  password: string;
}
