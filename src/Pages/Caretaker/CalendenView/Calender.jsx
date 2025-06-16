import React, { useState } from 'react';
import CalendarComponent from '../../Patient/calender'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faUser, faExclamationTriangle , faCamera, faImage, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './calener.css'
function Calender() {
  const [date, setDate] = useState(new Date());
  const today = new Date();
today.setHours(0, 0, 0, 0); // removes time

const thisDate = new Date(date);
thisDate.setHours(0, 0, 0, 0); // ensure the date passed in also has no time


  return (
    <div className='calender_over'>
      <h4>Medication Calendar Overview</h4>
      <div className="cal_contain">
        <div className="calen">
          <CalendarComponent setDate={setDate} date={date} className="my-calendar" />
          <div className="ins">
            <h6><span className='green'></span>Medication taken</h6>
            <h6><span className='red'></span>Missed medication</h6>
            <h6><span className='blue'></span>Today</h6>
          </div>

        </div>
        <div className='cal-datas' >
          <h3>Details for {date.toDateString()}</h3>
          <span className={`${thisDate < today ? 'dont' : ''}`}>
  {date.toDateString() === new Date().toDateString() ? (
    <div style={{ color: 'blue', fontSize: '14px' }}>
      <h5>
        <FontAwesomeIcon icon={faClock} className='cal_icon' /> Today
      </h5>
      <p>Monitor Eleanor Thompson's medication status for today.</p>
    </div>
  ) : date < new Date() ? (
    <div style={{ color: '#e04040', fontSize: '14px' }}>
      <h5>
        <FontAwesomeIcon icon={faExclamationTriangle} className='cal_icon' /> Medication Missed
      </h5>
      <p>Eleanor Thompson did not take their medication on this day.</p>
    </div>
  ) : (
    <div style={{ color: '#121212', fontSize: '14px' }}>
      <h5>Future Date</h5>
      <p>This date is in the future.</p>
    </div>
  )}
</span>

        </div>

      </div>
    </div>
  )
}

export default Calender