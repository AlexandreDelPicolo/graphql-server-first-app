import { gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    id: ID!
    title: String
    author: String
    year: Int
    edition: Int
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, year: Int!, edition: Int!): Book!
    editBook(id: ID!, title: String!, author: String!, year: Int!, edition: Int!): Book
    deleteBook(id: ID!): Book
  }
`;

export default typeDefs;