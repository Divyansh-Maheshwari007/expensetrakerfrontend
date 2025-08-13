import React, { useState } from 'react'
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../layouts/EmojiPickerPopup';

const AddIncomeForm = ({ onAddIncome }) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: today, // ✅ default to today
    icon: "",
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  return (
    <div>
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        Placeholder="Freelance, Salary, etc"
        type="text"
      />

      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        Placeholder=""
        type="number"
      />

      <Input
        value={income.date} //  will default to today
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        Placeholder=""
        type="date"
         max={today}
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="add-btn add-btn-fill"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;