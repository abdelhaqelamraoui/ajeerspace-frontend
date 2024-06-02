import * as types from "./../actions/actionTypes";
import { produce } from "immer";

const initState = {
   cart: [],
};

export const reducer = (state = initState, action) => {
   switch (action.type) {
      case types.ADD_BOOK_TO_CART:
         return produce(state, (draftState) => {
            draftState.cart.push(action.payload);
         });

      case types.REMOVE_BOOK_FROM_CART:
         return produce(state, (draftState) => {
            draftState.cart = state.cart.filter(
               (book) => book.id !== action.payload
            );
         });

      default:
         return state;
   }
};
