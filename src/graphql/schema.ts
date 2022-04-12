import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Query {
    Users {
      name
      id
      email
      phone
      cin
      licenseType
      role
      score
    }
  }
`;
