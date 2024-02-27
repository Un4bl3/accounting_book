import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Transaction } from './Transaction';

const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  const showHistory = transactions.map( (transaction) => 
    <Transaction key={transaction.id} transaction={transaction}></Transaction> );


  return (
    <>
      <h3>History</h3>
      <ul className="list"> {showHistory} </ul>
    </>
  )
}

export default TransactionList
