import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  const onSaveID = (id) => {
    console.log(id);
  };

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
          id={expense.id}
          onSaveID={onSaveID}
          onDelete={(id) => props.onDelete(id)}
        />
      ))}
    </ul>
  );
};
