import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from '../state/book.state';

/**
 * Selector to get state
 */
export const selectBookState = createFeatureSelector<Readonly<BookState>>('books');

export const selectedBook = createSelector(
    selectBookState,
    (state: BookState) => state.selectedBook
  );
