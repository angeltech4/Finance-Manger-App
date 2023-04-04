import React from 'react';

function TransactionHistory({ transactions, onDeleteTransaction }) {
    return (
        <div className='history card'>
            <h2>Transaction History</h2>
            <ul className='transactions'>
                {
                    transactions.map((data) => 
                        <li className='card' key={data.id}>
                            <div>{data.name}</div>
                            <div>
                                <span>₹{data.amount}</span>
                                <button className='btn-x' onClick={() => onDeleteTransaction(data.id)}>X</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TransactionHistory;