import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer,productDetailsReducer } from './reducers/productsReducer'
import { cartReducer } from './reducers/cartReducers';
import { userLoginReducer } from './reducers/userInfoReducers';



const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer
  
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const initialState = {
   cart: {cartItems},
   userLogin:{userInfo:userInfoFromStorage}
   
};



const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;