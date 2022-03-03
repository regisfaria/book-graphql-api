import { Injectable } from '@nestjs/common';
import books from '../data/books'
import { Book, CreateBookInput } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book>[]

  constructor() {
    this.books = books
  }

  async findMany() {
    return this.books;
  }

  async findById(id) {
    const book = this.books.find((book) => book.id === id);

    if (book) {
      return book;
    }

    return null;
  }

  async findByAuthorId(authorId) {
    const books = this.books.filter((book) => book.author === authorId);

    if (books.length) {
      return books;
    }

    return null;
  }

  async createBook(book: CreateBookInput) {
    this.books = [book, ...this.books]

    return book;
  }
}
