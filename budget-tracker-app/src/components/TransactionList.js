import React from 'react';
import './TransactionList.css';

function TransactionList({ transactions, onDelete }) {
  return (
    <div className="transaction-list-container">
      <h2>Transactions</h2>
      <ul className="transaction-list-ul">
        {transactions.map((transaction, index) => (
          <li key={index} className={`transaction-list-item ${transaction.type === 'expense' ? 'transaction-list-item-expense' : 'transaction-list-item-income'}`}>
            {transaction.description} - ${transaction.amount} ({transaction.type})
            <button onClick={() => onDelete(index)} className="transaction-list-delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
