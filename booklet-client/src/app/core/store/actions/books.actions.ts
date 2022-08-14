import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book/book';

/**
 * Action when user select a book to work on
 */
export const selectBook = createAction(
  '[Book] Select Book',
  props<{ book: Book }>()
);