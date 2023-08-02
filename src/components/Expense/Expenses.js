import { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = (selectedYear) => {
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
            {/* * 내가 사용한 방법 
            {props.items.map((expense, index) => {
                const year = expense.date.getFullYear().toString();
                return year === filteredYear ? <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem> : '';
            })} */}

            {/* * 첫번째 개선
            {filteredExpense.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                filteredExpense.map((expense, index) => {
                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>;
                })
            )} */}
            <ExpenseChart expense={filteredExpense}></ExpenseChart>
            <ExpensesList items={filteredExpense}></ExpensesList>
        </Card>
    );
}

export default Expenses;
