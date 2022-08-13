import { Book } from "../../models/book/book";

export interface BookState {
  selectedBook: Readonly<Book> | undefined;
}