import React, { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

export const useBudget = () => useContext(BudgetContext);

export const BudgetProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { id: Date.now(), ...transaction }]);
  };

  const totalBalance = transactions.reduce(
    (acc, transaction) => (transaction.type === "income" ? acc + transaction.amount : acc - transaction.amount),
    0
  );

  return (
    <BudgetContext.Provider value={{ transactions, addTransaction, totalBalance }}>
      {children}
    </BudgetContext.Provider>
  );
};
