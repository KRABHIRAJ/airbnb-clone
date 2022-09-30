import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./DatePicker.css";

function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);

    }
  return (
    <div className='datepicker__container'>
        <div className='datepicker'>
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
            />
        <div className='guests'>
          <p>Number of Guests :</p>
          <input type="number" defaultValue={2} />
        </div>
        
        <div className='button__container'>
          <button className='button'>Search airbnb</button>
        </div>
    </div>
    </div>
    
  )
}

export default DatePicker
