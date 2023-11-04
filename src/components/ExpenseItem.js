import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from 'react-icons/bs';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><BsFillPlusCircleFill size='1.5rem' color='green' onClick={event => increaseAllocation(props.name)}></BsFillPlusCircleFill></td>
            <td><BsFillDashCircleFill size='1.5rem' color='red' onClick={event => decreaseAllocation(props.name)}></BsFillDashCircleFill></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;