import { applyMiddleware, combineReducers, createStore } from "redux";
import AccountReducer from "./Features/Accounts/AccountSlice";
import CustomerReducer from "./Features/Customers/CustomerSlice";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  account: AccountReducer,
  Customer: CustomerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
