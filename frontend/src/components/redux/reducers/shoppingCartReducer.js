import ACTIONS from "../actions";

const CART_INITIAL_STATE = {
  cartItems: [],
  totalPrice:0,
  totalQuantity: 0,
};

const shoppingCartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      const item = action.payload;
      console.log(item)

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // console.log(item.qty,item.foodPrice)
         const Tprice=state.totalPrice+( item.qty* item.foodPrice)
         const Tqty=state.totalQuantity+item.qty
        // state.totalPrice+= existItem.qty*existItem.foodPrice

        return {
          ...state,
          cartItems: [...state.cartItems, item],
         totalPrice:Tprice,
         totalQuantity:Tqty
        };
      }

   case 'INC':
 const item2 = action.payload;
       console.log(action.payload)
       const temp= state.cartItems.map((x) => {
     if(x.product===item2.product){
       return {...x,x.qty}
     }
       }
       );
      // const findInd=state.cartItems.findIndex((x) => x.product === item2.product);
      // console.log(findInd)
      // // findfood.qty+=1;
      // state.item2[findInd]=findfood;
      // return{
      //  ...state,
      //  totalPrice:state.totalPrice+ findfood.foodPrice,
      // //  totalQuantity:state. totalQuantity+1
      // }

      
   

    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
