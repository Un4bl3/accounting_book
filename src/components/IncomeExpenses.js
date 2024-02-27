import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);
  
  const numbers = transactions.map( transaction => transaction.amount);
  const income = numbers.filter( transaction => transaction > 0 ).reduce( (sum, current) => sum + current,0);
  const expense = numbers.filter( transaction => transaction < 0).reduce( (sum, current) => sum + current, 0);
  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus"> {income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus"> {expense} </p>
        </div>
    </div>
  )
}

export default IncomeExpenses
