//REDUX TOOLKIT VERSION////////////MODERN WAY OF REDUX

import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const AccountSlice = createSlice({
  name: "account",
  InitialState,
  reducers: {
    Deposit(state, action) {
      //FIRST WAY OF WRITING THE LOGIC///
      // state.balance = state.balance + action.payload;

      ///ALTHENATIVE WAY///
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = AccountSlice.actions;

export default AccountSlice.reducer;

export function Deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  //API CALL HERE// thunk///
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    // console.log(data);
    const Converted = data.rates.USD;
    dispatch({ type: "account/deposit", payload: Converted });
  };
}
