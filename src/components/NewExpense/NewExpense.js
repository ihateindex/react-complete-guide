import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const editingHandler = () => {
        isEditing === false ? setIsEditing(true) : setIsEditing(false);
    };

    let formContent = (
        <button type="button" onClick={editingHandler}>
            Add New Expense
        </button>
    );

    if (isEditing === true) {
        formContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} editingHandler={editingHandler}></ExpenseForm>;
    }

    return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
