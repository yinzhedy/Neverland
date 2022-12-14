const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Event {
    title: String
    startDateTime: String
    endDateTime: String
    description: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    events: [Event]
    event(title: String!): Event
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(title: String!, startDateTime: String!, endDateTime: String!, description: String!) : Auth
  }
`;

module.exports = typeDefs;
