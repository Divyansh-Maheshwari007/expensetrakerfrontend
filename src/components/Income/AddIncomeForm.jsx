import React, { useState } from 'react'
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../layouts/EmojiPickerPopup';

const AddIncomeForm = ({onAddIncome}) => {
    const [income,setIncome] = useState({
        source: "",
        amount: "",
        date: "",
        icon: "",
    });

    const handleChange = (key,value) => setIncome({...income,[key]: value}); 
  return (
     <div>
        
         <EmojiPickerPopup 
         icon={income.icon}
         onSelect={(selectedIcon)=> handleChange("icon", selectedIcon)} />

        <Input 
        value= {income.source}
        onChange={({target})=> handleChange("source" ,target.value)}
        label="Income Source"
        Placeholder="Freelance, Salary, etc"
        type="text"/>

        <Input 
        value={income.amount}
        onChange={({target})=> handleChange("amount", target.value)}
        label="Amount"
        Placeholder=""
        type="number"
        />

         <Input 
        value={income.amount}
        onChange={({target})=> handleChange("date", target.value)}
        label="Date"
        Placeholder=""
        type="date"
        />
        
         <div className='flex justify-end mt-6'>
            <button
            type='button'
            className='add-btn add-btn-fill'
            onClick={()=>onAddIncome(income)}
            >
                    Add Income 
            </button>
   
         </div>
           

     </div>
  )
}

export default AddIncomeForm