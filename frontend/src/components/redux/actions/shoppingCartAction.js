import ACTIONS from './index';
import axios from 'axios';

export const addToCart = (itemID) => {
    return {
      type: ACTIONS.ADD_TO_CART,
      payload: {
        id: itemID,
      },
    };
  };
  
  export const removeFromCart = (itemID) => {
    return {
      type: ACTIONS.REMOVE_FROM_CART,
      payload: {
        id: itemID,
      },
    };
  };
  
  export const adjustItemQty = (itemID, qty) => {
    return {
      type: ACTIONS.ADJUST_ITEM_QTY,
      payload: {
        id: itemID,
        qty,
      },
    };
  };
  
  export const loadCurrentItem = (item) => {
    return {
      type: ACTIONS.LOAD_CURRENT_ITEM,
      payload: item,
    };
  };