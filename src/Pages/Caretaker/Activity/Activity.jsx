import React from 'react'
import { faUser, faExclamationTriangle , faCamera , faCalendarAlt,  faCheck  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Activity.css'
function Activity() {
  return (
    <div className='Activity'>
      <h3>Recent Medication Activity</h3>
      <div className="containers">
        <div className="cont cont_1">
          <div className="left">
            <span className='tick'><FontAwesomeIcon icon={faCheck} style={{color:'green'}} /></span>
            <span >
              <h4>Monday, June 10</h4>
              <p>Taken at 8:30 AM</p>
              </span>
          </div>
          <div className="right">
            <span><FontAwesomeIcon icon={faCamera} />photo</span>
            <h6>completed</h6>
          </div>
        </div>
        <div className="cont cont_2">
           <div className="left">
            <span className='tick'><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/></span>
            <span >
              <h4>Sunday, June 9</h4>
              <p>Taken at 8:15 AM</p>
              </span>
          </div>
          <div className="right">
            <h6>completed</h6>
          </div>
        </div>
        <div className="cont cont_3">
           <div className="left">
            <span className='tick' style={{background:'#fee2e2'}}><FontAwesomeIcon icon={faExclamationTriangle}  style={{color:'red'}}/></span>
            <span >
              <h4>Saturday, June 8</h4>
              <p>Medication missed</p>
              </span>
          </div>
          <div className="right">
            <h6 style={{background:'red'}}>Missed</h6>
          </div>
        </div>
        <div className="cont cont_4">
           <div className="left">
            <span className='tick'><FontAwesomeIcon icon={faCheck} style={{color:'green'}}/></span>
            <span >
              <h4>Friday, June 7</h4>
              <p>Taken at 8:45 AM</p>
              </span>
          </div>
          <div className="right">
            <span><FontAwesomeIcon icon={faCamera} />photo</span>
            <h6>completed</h6>
          </div>
        </div>
        <div className="cont cont_5">
           <div className="left">
            <span className='tick'><FontAwesomeIcon icon={faCheck} style={{color:'green'}} /></span>
            <span >
              <h4>Thursday, June 6</h4>
              <p>Taken at 8:20 AM</p>
              </span>
          </div>
          <div className="right">
            <h6>completed</h6>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Activity