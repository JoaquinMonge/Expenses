import { useState } from "react";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = ({
  id,
  date,
  title,
  amount,

  onDelete,
}) => {
  const [titulo, setTitulo] = useState(title);

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titulo}</h2>
        <div className="expense-item__price">${amount}</div>
        <button className="delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
