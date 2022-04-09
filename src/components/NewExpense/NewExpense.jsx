import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isShowBox, setIsShowBox] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShowBox(false);
  };

  const showBoxHandler = () => {
    setIsShowBox(true);
  };
  const hideBoxHandler = () => {
    setIsShowBox(false);
  };

  let showContents = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={hideBoxHandler}
    />
  );

  if (!isShowBox) {
    showContents = (
      <button type='button' onClick={showBoxHandler}>
        Add New Button
      </button>
    );
  }

  return <div className='new-expense'>{showContents}</div>;
};

export default NewExpense;
