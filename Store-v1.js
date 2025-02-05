import { combineReducers, createStore } from "redux";

const InitialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const InitialStateCustomer = {
  FullName: "",
  NationalID: "",
  CreatedAt: "",
};

const AccountReducer = (state = InitialStateAccount, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
};

function CustomerReducer(state = InitialStateCustomer, action) {
  switch (action.type) {
    case "customer/CreateCustomer":
      return {
        FullName: action.payload.FullName,
        NationalID: action.payload.NationalID,
        CreatedAt: action.payload.CreatedAt,
      };
    case "customer/UpdateName":
      return {
        FullName: action.payload,
      };

    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: AccountReducer,
  Customer: CustomerReducer,
});

const store = createStore(rootReducer);
// store.dispatch({ type: "account/deposit", payload: 100 });
// console.log(store.getState());

// store.dispatch({ type: "account/withdraw", payload: 30 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "buy a car" },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

function Deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}

function payLoan() {
  return { type: "account/payLoan" };
}
store.dispatch(Deposit(100));
console.log(store.getState());

store.dispatch(withdraw(50));
console.log(store.getState());

store.dispatch(requestLoan(200, "buy a car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

function CreateCustomer(FullName, NationalID) {
  return {
    type: "customer/CreateCustomer",
    payload: { FullName, NationalID, CreatedAt: new Date().toISOString() },
  };
}

function UpdateName(FullName) {
  return {
    type: "account/UpdateName",
    payload: FullName,
  };
}

store.dispatch(CreateCustomer("Daniel yawson", "1234"));
console.log(store.getState());

store.dispatch(UpdateName("dani yaw"));
console.log(store.getState());
