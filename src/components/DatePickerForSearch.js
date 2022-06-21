import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import React,{useState} from 'react';

const DatePickerForSearch = () => {
  
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    return (
        <div>
<DateRange
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={state}
 
/>
    {state[0].startDate?state[0].startDate.toLocaleDateString():""}   {state[0].endDate?state[0].endDate.toLocaleDateString():""} 
        </div>
    );
}

export default DatePickerForSearch;
