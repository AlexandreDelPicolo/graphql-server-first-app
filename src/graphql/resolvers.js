import books from '../repository/book.repository';
import { uuid } from 'uuidv4';

const resolvers = {
  Query: {
    books: () => books,
  },

  Mutation: {
    addBook: (_, args) => {
      const { title, author, year, edition } = args;

      const book = {
        id: uuid(),
        title,
        author,
        year,
        edition,
      }

      books.push(book);

      return book;
    },

    editBook: (_, args) => {
      const { id, title, author, year, edition } = args;

      const index = books.findIndex(book => book.id === id);

      if (index < 0)
        return null;

      const book = {
        id,
        title,
        author,
        year,
        edition,
      }

      books[index] = book;

      return book;
    },

    deleteBook: (_, args) => {
      const { id } = args;

      const index = books.findIndex(book => book.id === id);

      if (index < 0) {
        return;
      }

      const bookDeleted = books[index];

      books.splice(index, 1);

      return bookDeleted;
    },
  }
};

export default resolvers;