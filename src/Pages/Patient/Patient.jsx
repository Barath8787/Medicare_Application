import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faCamera, faImage, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import './patient.css'
import CalendarComponent from './calender';
import { Link } from 'react-router-dom';
function Patient() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='patient-main'>
      <div className="header">
        <div className="header_left">
          <span><h1>M</h1></span>
          <div>
            <h2>MediCare Companion</h2>
            <p>Patient View</p>
          </div>
        </div>
        <div className="header_right">
          <Link to={'/caretaker'}>
          <button><FontAwesomeIcon icon={faUser} className='user-icon' />   switch to caretaker</button>
          </Link>
        </div>
      </div>

      <div className="patient_hero">
        <div className="hero_top">
          <span><FontAwesomeIcon icon={faUser} className='user-icon' /></span>
          <span>
            <h1>Good Afternoone</h1>
            <p>Ready to stay track with your medication</p>
          </span>
        </div>
        <div className="hero_bottom">
          <div className='but_start but'>
            <h1>0</h1> <br /><p>Day Streak</p>
          </div>
          <div className='but_middel but'>
            <h1>0</h1> <br /><p>Today status</p>
          </div>
          <div className='but_end but'>
            <h1>0</h1> <br /><p>Monthly Rate</p>
          </div>
        </div>

      </div>
      <div className="patient_bottom">
        <div className="bottom-left">
          <h1 className='bottom_title'><FontAwesomeIcon icon={faCalendarAlt} className=" calendar-icon" />{date.toDateString() === new Date().toDateString() ? "Today's Medication" : `Medication for  ${date.toDateString()}`}</h1>
          <div className='medi-set'>
            <div className="medi_left">
              <span className='num'>1</span>
              <span>
                <h2>Daily Medication Set</h2>
                <p>Complete set of daily tablets</p>
              </span>
            </div>
            <div className="medi_right">
              <span>
                <p><FontAwesomeIcon icon={faClock} className="clock-icon" />  8:00 AM</p>
              </span>
            </div>

          </div>
          <div className="ph_upload">
            <h1><FontAwesomeIcon icon={faImage} className="gallery-icon" /></h1>
            <h5>Add Proof Photo (Optional)</h5>
            <p>Take a photo of your medication or pill organizer as confirmation</p>
            <button className='upt_photo'><FontAwesomeIcon icon={faCamera} className=" camera-icon" />Take photo</button>
          </div>
          <button   className={`${date.toDateString() === new Date().toDateString() ? 'mark_taken ' : 'dont_taken'}`}
  disabled={date > new Date()}>{date.toDateString() === new Date().toDateString() ? "Mark as Taken" : `Can't Mark futur dates`}</button >
        </div>
        <div className="bottom-right">
          <h2 className='topic'> Select a Date</h2>
          <CalendarComponent setDate={setDate} date={date} className="my-calendar" />

          <div className="ins">
            <h6><span className='green'></span>Medication taken</h6>
            <h6><span className='red'></span>Missed medication</h6>
            <h6><span className='blue'></span>Today</h6>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Patient