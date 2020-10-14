import 'dotenv/config';
import { ApolloServer } from 'apollo-server'

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/types';

const app = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === 'development'
});

export default app;
