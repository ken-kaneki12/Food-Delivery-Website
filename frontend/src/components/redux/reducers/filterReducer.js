
const initialState = {
 searchItem:'',
 rating:'',
 sort:''
}


const filterReducer = (state = initialState, action) => {
  switch (action.type) {
   case 'SearchFood':

      //  console.log(action.payload)
     return{
       ...state,
       searchItem: action.payload
     }
       
     case 'SortPrice':

        // console.log(action.payload)
     return{
       ...state,
       sort: action.payload
     }

    case 'ratingFilter':
   return{
     ...state,
     rating: action.payload
   }
       
        









    //   case 'DEC':
    //     const item3 = action.payload;
    //           // console.log(action.payload)
    //           const temp2= state.cartItems.find((x) => x.product === item3.product);
    //          const findInd2=state.cartItems.findIndex((x) => x.product === item3.product);
    //           // console.log(findInd2)
    //           if(temp2.qty>1){
    //           temp2.qty-=1;
    //           // console.log(temp2.qty)
    //          // state.item2[findInd]=findfood;
    //          return{
    //           ...state,
    //           totalPrice:state.totalPrice-temp2.foodPrice,
    //           totalQuantity:temp2.qty
    //          }
    //         }
    //         else{
    //           return state
    //         }
   

    // case ACTIONS.REMOVE_FROM_CART:
    //   const temp3= state.cartItems.find((x) => x.product === action.payload);
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter((x) => x.product !== action.payload),
    //     totalPrice:state.totalPrice-temp3.foodPrice*temp3.qty
    //   };
    default:
      return state;
  }
};

export default filterReducer ;
