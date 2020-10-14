import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// type Mutation {
//   addBook(author: String!, title: String!, year: Number!, version: Number!): Book!
//   addBook(id: ID!, author: String!, title: String!, year: Number!, version: Number!): Book!
//   deleteBook(id: ID!): Book!
// }

export default typeDefs;