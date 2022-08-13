import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book/book';

export const selectBook = createAction(
  '[Book] Select Book',
  props<{ book: Book }>()
);