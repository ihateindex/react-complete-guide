import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    } else {
        return (
            <ul className="expenses-list">
                {props.items.map((expense, index) => {
                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>;
                })}
            </ul>
        );
    }
};

export default ExpensesList;
