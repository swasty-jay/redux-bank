import AccountReducer from "./Features/Accounts/AccountSlice";
import CustomerReducer from "./Features/Customers/CustomerSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: AccountReducer,
    Customer: CustomerReducer,
  },
});
export default store;
