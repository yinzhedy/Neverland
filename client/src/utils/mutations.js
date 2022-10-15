import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $startDateTime: String!, $endDateTime: String! $description: String!) {
    addEvent(title: $title, startDateTime: $startDateTime, endDateTime: $endDateTime, description: $description) {
      token
      event {
        title
        startDateTime
        endDateTime
        description
      }
    }
  }
`;