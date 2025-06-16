import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faCamera, faEnvelope, faCalendarAlt, faCheck, faBell } from '@fortawesome/free-solid-svg-icons';

import './Notification.css'
function Notification() {
  const [isChecked, setIsChecked] = useState(false);
  const [isvalied, setIsvalied] = useState(false);

  return (
    <div> 
      <div className='notification'>
        <div className="noti_pre">
          <h2> <FontAwesomeIcon icon={faBell} /> Notification Preferences</h2>
          <div className="noti_alert">
            <div>
              <h3>Email Notifications</h3>
              <p>Receive medication alerts via email</p>
            </div>
            <div className="toggel">
              <input type="checkbox" id='check' checked={isChecked}  onChange={() => setIsChecked(!isChecked)}/>
             <label htmlFor="check" className='button'></label>
            </div>
          </div>
          {isChecked && (
            <div className="inputs">
            <h5>Email Address</h5>
            <input type="text" value={'barathsankar8787@gmail.com'} />
          </div>
          )}
          <hr />
        </div>


        <div className="noti_post">

          <div className="noti_alert">
            <div>
              <h3>Missed Medication Alerts</h3>
              <p>Get notified when medication is not taken on time</p>
            </div>
            <div className="toggel">
              <input type="checkbox" id='checking' checked={isvalied}  onChange={() => setIsvalied(!isvalied)}/>
             <label htmlFor="checking" className='button'></label>
            </div>
          </div>
          {
            isvalied && (
              <>
              <div className="inputs">
            <h5>Alert me if medication isn't taken within</h5>
            <div className="input">
              <select
                id="role"
              // value={selectedOption}
              // onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="">Choose an time </option>
                <option value="patient">1 hours</option>
                <option value="caretaker">2 hours</option>
                <option value="doctor">3 hours</option>
                <option value="doctor">4 hours</option>
                <option value="doctor">5 hours</option>
                <option value="doctor">6 hours</option>
              </select>
            </div>
          </div>

           <div className="inputs">
            <h5>Daily reminder time</h5>
            <div className="fake-input">
              <span>8:00 PM</span>
              <FontAwesomeIcon icon={faClock} className="clock-icon" />
            </div>

            <p style={{marginTop:'20px'}}>Time to check if today's medication was taken</p>
          </div>
          </>
            )
          }
         
        </div>


      </div>
      <div className="Email_prev">
        <div > 
          <h2><FontAwesomeIcon icon={faEnvelope} className="clock-icon" style={{ color: 'green' }} />  Email Preview</h2>
        </div>
        <div className="prev_cont">
          <h5>Subject: Medication Alert - Eleanor Thompson</h5>
          <p>Hello,</p>
          <p>This is a reminder that Eleanor Thompson has not taken her medication today.</p>
          <p>Please check with her to ensure she takes her prescribed medication</p>
          <p>Current adherence rate: 85% (5-day streak)</p>
        </div>
        <div className='prev_final'>
          <button>Save notification setting</button>
        </div>
      </div>
    </div>

  )
}

export default Notification