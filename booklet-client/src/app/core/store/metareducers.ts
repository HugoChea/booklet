import { ActionReducer, INIT, MetaReducer, UPDATE } from "@ngrx/store";

/**
 * Meta reducer to save into local storage in case user refresh app
 * @param reducer 
 * @returns 
 */
export const hydrationMetaReducer = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
      if (action.type === INIT || action.type === UPDATE) {
        const storageValue = localStorage.getItem("state");
        if (storageValue) {
          try {
            return JSON.parse(storageValue);
          } catch {
            localStorage.removeItem("state");
          }
        }
      }
      const nextState = reducer(state, action);
      localStorage.setItem("state", JSON.stringify(nextState));
      return nextState;
    };
  };

export const metaReducers: Array<MetaReducer<any, any>> = [hydrationMetaReducer];