
import './Caretaker.css'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faCamera, faImage, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';
function Caretaker() {
    // const[data,setData]=useState("")
    // console.log(data);
    // .classList.add('active'
    function click() {
        // document.getElementsByClassName('overview').classList.add('active')
        // console.log('hello:',);

    }
    return (
        <div className='care'>

            <div className="header">
                <div className="header_left">
                    <span><h1>M</h1></span>
                    <div>
                        <h2>MediCare Companion</h2>
                        <p>Caretaker View</p>
                    </div>
                </div>
                <div className="header_right">
                    <Link to={'/patient'}>
                        <button><FontAwesomeIcon icon={faUser} className='user-icon' />   switch to patient</button>
                    </Link>
                </div>
            </div>
            <div className="caretaker_hero">
                <div className="hero_top">
                    <span><FontAwesomeIcon icon={faUser} className='user-icon' /></span>
                    <span>
                        <h1>Good Afternoone</h1>
                        <p>Ready to stay track with your medication</p>
                    </span>
                </div>
                <div className="hero_bottom">
                    <div className='but_start '>
                        <h1>85%</h1><p>Day Streak</p>
                    </div>
                    <div className='but_middel '>
                        <h1>5</h1> <p>Today status</p>
                    </div>
                    <div className='but_end '>
                        <h1>3</h1><p>Monthly Rate</p>
                    </div>
                    <div className='but_last'>
                        <h1>4</h1> <p>taken This Week</p>
                    </div>
                </div>

            </div>

            <div className="category">

                <div className="category">
                    <NavLink to="overview" className={({ isActive }) => isActive ? 'overview active' : 'overview'} className=" link">
                        <span className='cat cat_1'>
                            <p>Overview</p>
                        </span>
                    </NavLink>

                    <NavLink to="activity" className="activity link">
                        <span className='cat cat_2'>
                            <p>Recent Activity</p>
                        </span>
                    </NavLink>

                    <NavLink to="Calender" className="Calender link">
                        <span className='cat cat_3'>
                            <p>Calendar View</p>
                        </span>
                    </NavLink>

                    <NavLink to="Notification" className="Notification link">
                        <span className='cat cat_4'>
                            <p>Notification</p>
                        </span>
                    </NavLink>
                </div>

            </div>

            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Caretaker