import { useState } from "react";
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Bicycle",
    amount: 1000,
    date: new Date(2019, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    //llama los nuevos expenses y los viejos
    // setExpenses([expense,...expenses]);

    //esto es lo mismo que lo de arriba pero de la forma recomendad
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpense = (id) => {
    const updatedExpenses = [...expenses].filter(
      (expense) => expense.id !== id
    );

    setExpenses(updatedExpenses);
    console.log(updatedExpenses);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} onDelete={(id) => deleteExpense(id)} />
    </>
  );
}

export default App;
