import React, { useState } from "react";

import "./Expenses.css";
import { ExpensesChart } from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";

export const Expenses = ({ expenses, onDelete }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (filteredYear === "All") {
      return expenses;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList
          expenses={filteredExpenses}
          onDelete={(id) => onDelete(id)}
        />
      </div>
    </div>
  );
};
