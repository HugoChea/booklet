import { createReducer, on } from '@ngrx/store';
import { selectBook, clearSelectedBook } from '../actions/books.actions';
import { BookState } from '../state/book.state';

export const initialState: Readonly<BookState> = {
  selectedBook: undefined
};

/**
 * Reducer when certain actions are perfomed
 */
export const booksReducer = createReducer(
  initialState,
  on(selectBook, (state, { book }) => ({ ...state, selectedBook: book })),
  on(clearSelectedBook, (state) => ({ ...state, selectedBook: undefined })),
);