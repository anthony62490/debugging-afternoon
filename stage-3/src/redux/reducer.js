import * as productsController from './productsController';

// Constants
const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART";
const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART";
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const GET_ALL_PRODUCTS_PENDING = "GET_ALL_PRODUCTS_PENDING";
const GET_ALL_PRODUCTS_FULFILLED = "GET_ALL_PRODUCTS_FULFILLED";

let initialState = {
  products: [],
  shoppingCart: []
}

// Reducer
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case GET_ALL_PRODUCTS_PENDING:
      return {
        ...state,
        loading: true};

    case GET_ALL_PRODUCTS_FULFILLED:
      return {
        ...state,
        loading: false, 
        products: action.payload};

    case ADD_TO_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload]
      };

    case REMOVE_FROM_SHOPPING_CART:
      let newArray = state.shoppingCart.slice();
      newArray.splice(action.payload, 1);
      return {
        ...state, 
        shoppingCart: newArray
      };
    default:
      return state;
  }
}

// Action Creators
export function addToShoppingCart(product) {
  console.log("product", product);
  return {
    type: ADD_TO_SHOPPING_CART,
    payload: product
  }
}

export function removeFromShoppingCart(productIndex) {
  return {
    type: REMOVE_FROM_SHOPPING_CART,
    payload: productIndex
  }
}

export function getAllProducts(products) {
  return {
    type: GET_ALL_PRODUCTS,
    payload: productsController.getAllProducts()
  }
}