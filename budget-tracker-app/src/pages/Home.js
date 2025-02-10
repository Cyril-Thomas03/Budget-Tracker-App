import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { useBudget } from "../context/BudgetContext";

function Home() {
  const { totalBalance } = useBudget();

  return (
    <div>
      <h1>Budget Tracker</h1>
      <h2>Total Balance: ${totalBalance.toFixed(2)}</h2>
      <TransactionForm />
      <TransactionList />
    </div>
  );
}

export default Home;
