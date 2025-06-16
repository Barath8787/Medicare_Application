// CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // default styling

const CalendarComponent = ({ date, setDate }) => {
  

  return (
    <div>
      <Calendar  onChange={setDate} value={date}  />
      {/* <p>Selected date: {props.date.toDateString()}</p> */}
    </div>
  );
};



export default CalendarComponent;
