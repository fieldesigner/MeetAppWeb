import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import { parseISO } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';

export default function DateInput() {
  const [startDate, setDate] = useState(new Date());

  function handleChange(date) {
    setDate(date);
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="MMMM d, yyyy h:mm aa"
      timeCaption="time"
    />
  );
}
