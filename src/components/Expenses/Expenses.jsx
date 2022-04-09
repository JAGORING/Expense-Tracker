import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filteredExpenses = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const newExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onFilterHandler={filteredExpenses}
          selected={filteredYear}
        />
        <ExpensesChart expenses={newExpenses} />
        <ExpensesList items={newExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
