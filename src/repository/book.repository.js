import { uuid } from 'uuidv4';

const books = [
  {
    id: uuid(),
    title: 'The Awakening',
    author: 'Kate Chopin',
    year: 2005,
    edition: 2
  },
  {
    id: uuid(),
    title: 'City of Glass',
    author: 'Paul Auster',
    year: 2007,
    edition: 1
  },
];

export default books;