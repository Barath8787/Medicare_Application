import React from 'react'
import './overview.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faCamera, faEnvelope, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Overview() {
  const navigate = useNavigate();
  return (
    <div className='overview'>
      <div className='overview_top'>
        <div className="Overview_left">
          <h1 className='left_title'><FontAwesomeIcon icon={faCalendarAlt} className=" calendar-icon" />Todays Status</h1>
          <div className="content">
            <span className='cont-left'>
              <h3>Daily Medication Set</h3>
              <p>8:00 AM</p>
            </span>
            <span className='cont-right'>pending</span>
          </div>
        </div>
        <div className="overview_right">
          <div><h1>Quick Actions</h1></div>
          <div className="action">
            <span className=" email-icon" onClick={() =>{alert('Reminder email sent to Barathkumar')}}><FontAwesomeIcon icon={faEnvelope} /> <p>Send Reminder Email</p></span>
            <span className=" bell-icon" onClick={() => navigate('/caretaker/Notification')}><FontAwesomeIcon icon={faBell} /> <p>Configure Notification</p></span>
            <span className=" calendars-icon" onClick={() => navigate('/caretaker/Calender')}><FontAwesomeIcon icon={faCalendarAlt} /><p>View Full Calender</p></span>
          </div>
        </div>

      </div>

      <div className="overview_bottom">
        <h1>Monthly Adherence Progress</h1>
        <span className='indicator'>
          <p>Overall Progress</p>
          <p>85%</p>
        </span>
        <span className='line'>
          <hr />
        </span>
        <div className="strek">
          <span>
            <h6 style={{ color: "green" }}>22days</h6>
            <p>taken</p>
          </span>
          <span>
            <h6 style={{ color: "red" }}>3days</h6>
            <p>Missed</p>
          </span>
          <span >
            <h6 style={{ color: "blue" }}>5days</h6>
            <p>Remaing</p>
          </span>
        </div>
      </div>
    </div >

  )
}

export default Overview