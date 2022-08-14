import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from '../state/book.state';

/**
 * Selector to get state
 */
export const selectedBookId = createFeatureSelector<Readonly<BookState>>('books');
