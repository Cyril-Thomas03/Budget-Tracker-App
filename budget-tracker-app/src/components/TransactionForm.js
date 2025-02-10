import React, { useState } from 'react';
import './TransactionForm.css';

function TransactionForm({ onAddTransaction }) {
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: 0, type: 'income' });

  const handleInputChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(newTransaction);
    setNewTransaction({ description: '', amount: 0, type: 'income' });
  };

  return (
    <div className="transaction-form-container">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" placeholder="Description" value={newTransaction.description} onChange={handleInputChange} required className="transaction-form-input" />
        <input type="number" name="amount" placeholder="Amount" value={newTransaction.amount} onChange={handleInputChange} required className="transaction-form-input" />
        <select name="type" value={newTransaction.type} onChange={handleInputChange} className="transaction-form-select">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit" className="transaction-form-button">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;