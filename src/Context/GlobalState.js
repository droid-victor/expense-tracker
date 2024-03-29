import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initialState
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -290 },
    { id: 2, text: "Salary", amount: 58000 },
    { id: 3, text: "Book", amount: -750 },
    { id: 4, text: "Camera", amount: 11500 },
    { id: 4, text: "Rent", amount: -10000 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
