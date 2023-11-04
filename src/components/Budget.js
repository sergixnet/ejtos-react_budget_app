import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    console.log(totalExpenses)
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });

        if (totalExpenses > budget) {
            alert('You cannot reduce the budget value lower tha spending')
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;