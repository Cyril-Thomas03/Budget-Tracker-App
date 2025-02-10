import React from 'react';
import './Balance.css';

function Balance({ transactions }) {
  const calculateBalance = () => {
    return transactions.reduce((total, transaction) => {
      return transaction.type === 'income' ? total + parseFloat(transaction.amount) : total - parseFloat(transaction.amount);
    }, 0);
  };

  return (
    <div className="balance-container">
      <h2>Balance: ${calculateBalance()}</h2>
    </div>
  );
}

export default Balance;