
import ACTIONS from '../actions';
import axios from "axios";

export const addToCart = (data, qty) => async (dispatch, getState) => {
//   const { data } = await axios.get(`/getSingleFood/${id}`);
//  console.log(data)
//  console.log(qty)
  dispatch({
    type: ACTIONS.ADD_TO_CART,
    payload: {
      product: data._id,//foodid
      foodName: data.foodName,
      foodImg: data.foodImg,
      foodPrice: data.foodPrice,
      foodStock: data.foodStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: ACTIONS.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};