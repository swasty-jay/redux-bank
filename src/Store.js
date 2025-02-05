import { combineReducers, createStore } from "redux";
import AccountReducer from "./Features/Accounts/AccountSlice";
import CustomerReducer from "./Features/Customers/CustomerSlice";
const rootReducer = combineReducers({
  account: AccountReducer,
  Customer: CustomerReducer,
});

const store = createStore(rootReducer);

export default store;
