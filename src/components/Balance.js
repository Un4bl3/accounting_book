import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '€ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}


const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const balance = transactions.reduce ( (sum, current) => sum + current.amount, 0);
  return (
    <>
        <h4 className='color-white'> Your balance </h4>
        <h1 id="balance">{moneyFormatter(balance)}</h1>
    </>
  )
}

export default Balance
