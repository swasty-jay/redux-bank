import { createStore } from "redux";

const InitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return { ...state, loan: action.payload, loanPurpose: action.purpose };

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

const store = createStore(reducer);
store.dispatch({ type: "account/deposit", payload: 100 });
