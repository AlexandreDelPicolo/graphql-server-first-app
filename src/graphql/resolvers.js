import books from '../repository/book.repository';

const resolvers = {
  Query: {
    books: () => books,
  },
};

export default resolvers;