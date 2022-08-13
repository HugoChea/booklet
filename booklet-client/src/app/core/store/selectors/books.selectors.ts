import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookState } from '../state/book.state';

export const selectedBookId = createFeatureSelector<Readonly<BookState>>('books');
