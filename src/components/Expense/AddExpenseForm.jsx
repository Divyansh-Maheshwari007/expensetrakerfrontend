import React, { useState } from 'react';
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../layouts/EmojiPickerPopup';

const AddExpenseForm = ({ onAddExpense }) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const [expense, setExpense] = useState({
    category: "",
    amount: "",
    date: today, // Default to today's date
    icon: "",
  });

  const handleChange = (key, value) => {
    setExpense({ ...expense, [key]: value });
  };

  return (
    <div>
      {/* Emoji Picker */}
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      {/* Category Input */}
      <Input
        value={expense.category}
        onChange={({ target }) => handleChange("category", target.value)}
        label="Category"
        placeholder="Rent, Groceries, etc"
        type="text"
      />

      {/* Amount Input */}
      <Input
        value={expense.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder="Enter amount"
        type="number"
      />

      {/* Date Input */}
      <Input
        value={expense.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        type="date"
        max={today} // Prevent future dates
      />

      {/* Submit Button */}
      <div className='flex justify-end mt-6'>
        <button
          type='button'
          className='add-btn add-btn-fill'
          onClick={() => onAddExpense(expense)}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;
