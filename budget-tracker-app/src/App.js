import React, { useState } from 'react';
import './App.css';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';
import FilterButtons from './components/FilterButtons';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filterType, setFilterType] = useState('all');

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  const filterTransactions = (type) => {
    setFilterType(type);
  };

  const filteredTransactions = filterType === 'all' ? transactions : transactions.filter(transaction => transaction.type === filterType);

  return (
    <div className="app-container">
      <h1>Budget Tracker</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <FilterButtons onFilter={filterTransactions} />
      <TransactionList transactions={filteredTransactions} onDelete={deleteTransaction} />
      <Balance transactions={filteredTransactions} />
    </div>
  );
}

export default App;