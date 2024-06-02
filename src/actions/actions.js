import * as types from "./actionTypes";

export const addBookToCart = (book) => {
   return {
      type: types.ADD_BOOK_TO_CART,
      payload: book,
   };
};

export const removeBookFromCart = (id) => {
   return {
      type: types.REMOVE_BOOK_FROM_CART,
      payload: id,
   };
};
