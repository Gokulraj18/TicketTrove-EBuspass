import React from 'react';
import Applyvid from './images/bus.mp4';
import busren from './images/bus2.png';
import easyimg from './images/icons8-easy-100.png';
import careimg from './images/icons8-headset-100.png';
import secureimg from './images/icons8-secure-100.png';
import timeimg from './images/icons8-time-100.png';
import logo from './images/logo2.png';
import {Link, NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFax } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

import './style.css';



export default function Home() {
  return (
    <>

  {/* Header */}
  <div className="header" id="Home">
    <div className="logo">
      <a href="/"><img src={logo} alt="bus logo" width={30} height={30} /></a>
    </div>
    <div className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#Apply">Apply</a>
        </li>
        <li>
          <a href="#Renewal">Renewal</a>
        </li>
        <li>
          <a href="#feature">Features</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  {/* header */}
  {/* Image slide */}
  <div className="image-container">
    <div className="overlay" />
    <h2>
      Get Your Pass Online
      <br />
      Easy and Safely
    </h2>
  </div>
  {/* Image slide */}
  {/* Apply Section */}
  <div className="main" id="Apply">
    <div className="ApplyContainer">
      <div className="head">
        <h1>Apply</h1>
        <p>
          Apply your bus pass effortlessly! Our streamlined online application
          simplifies the process. Just complete the form with your information,
          upload a photo, and submit. Experience ongoing convenience and savings
          with your renewed pass. Don't wait – ensure uninterrupted access to
          seamless transportation.
          <br />
          <br />
          {/* <link rel="stylesheet" href="" /> */}
          <NavLink to='/form'>Apply Now</NavLink>
        </p>
        <br />
      </div>
      <div className="videoContainer">
        <div className="applyvideo">
          <video id="myVideo" width={440} height={440} autoPlay="true" loop="true">
            <source src={Applyvid} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
  {/* Apply Section */}
  {/*  Renewal Section*/}
  <div className="main" id="Renewal">
    <div className="RenewalContainer">
      <div className="head">
        <h1>Renewal</h1>
        <p>
        Are you ready to continue your journey hassle-free? It's time to renew your bus pass and keep the convenience of commuting at your fingertips. Whether you rely on public transportation for your daily commute or occasional trips around town, renewing your bus pass ensures uninterrupted access to essential services and destinations.
          <br />
          <br />
          <Link to='/renewal'>Renewal Now</Link>
        </p>
        <br />
      </div>
      <div className="RenewalImageContainer">
        <div className="RenewalImage">
          <img src={busren} alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*  Renewal Section*/}
  {/* Features */}
  <div className="main" id="feature">
    <div className="head">
      <h1>Features</h1>
      <div className="content">
        <p>
          Our website offers a range of useful features for an improved
          experience. From applying for and renewing your bus pass to tracking
          its status and managing your account, we've got you covered. Enjoy
          benefits like real-time schedules, secure payments, and helpful
          customer support, making your travel hassle-free.
        </p>
      </div>
    </div>
    <div className="container">
      <div className="feature">
        <div className="image">
          <img src={easyimg} alt="Easy-Avail" />
        </div>
        <h3>Easy-Avail</h3>
        <p>Apply for bus passes easily with a user-friendly system.</p>
      </div>
      <div className="feature">
        <div className="image">
          <img src={timeimg} alt="Time-delivey" />
        </div>
        <h3>Time-delivey</h3>
        <p>Get your bus pass delivered on time for convenience.</p>
      </div>
      <div className="feature">
        <div className="image">
          <img src={secureimg} alt="Secure" />
        </div>
        <h3>Secure</h3>
        <p>Keep your information safe with secure transactions.</p>
      </div>
      <div className="feature">
        <div className="image">
          <img src={careimg} alt="Customer-care" />
        </div>
        <h3>Customer-care</h3>
        <p>Get friendly support when needed.</p>
      </div>
    </div>
  </div>
  {/* Features */}
  {/* Contact */}
  <div className="main" id="contact">
    <div className="head">
      <h1>Contact Us</h1>
    </div>
  <div className="ContactContainer">
    <div className="contact">
      <h3>Location</h3>
      <p>
        <FontAwesomeIcon icon={faLocationDot} className="red-icon"/> IBIBO Group Pvt Ltd. #No 23,
        5th Floor, Indiqube, Leela{" "}
        <span>Galleria Hotel Leela, HAL 2nd Stage, Kodihalli, Bengaluru,</span>{" "}
        <span>Karnataka 560008</span>
      </p>
      <h3>Telephone</h3>
       <p>
      <FontAwesomeIcon icon={faPhone} className="red-icon" /> 099456 00000
      </p>
      <h3>Fax</h3>
      <p>
      <FontAwesomeIcon icon={faFax} className="red-icon"/> (65) 6474 7885
      </p>
      <h3>Email</h3>
      <p>
        <a href="mailto:deepeshkumar.p2004@example.com?subject=Your%20Subject&body=Your%20Message">
        <FontAwesomeIcon icon={faEnvelope} className="red-icon"/> TravelTrove@gmail.com
        </a>
      </p>
    </div>
    <div className="query">
      <div className="text">
        <h1>Reach Out to Us</h1>
      </div>
      <div className="query1">
        <div className="input">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone no" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" defaultValue={""} />
        </div>
      </div>
      <div className="submit-btn">
        <button type="submit">Send</button>
      </div>
    </div>
  </div>
  </div>
  {/* Contact */}
  {/* footer */}
  <footer>
    <div className="foot-block">
      <div className="logo-content">
        <img src={logo} alt="bus logo" width={70} height={70} />
        <p>
          TicketTrove is the world's largest online
          <br /> ticket booking service trusted by
          <br />
          over 25 million happy customers
          <br />
          globally. TicketTrove offers bus ticket
          <br />
          booking through its website, iOS and
          <br /> Android mobile apps for all
          <br />
          major routes.
        </p>
      </div>
      <div className="list-content info">
        <h3>Info</h3>
        <ul>
          <li>T&amp;C</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li>User agreement</li>
        </ul>
      </div>
      <div className="list-content Global-sites">
        <h3>Global Sites</h3>
        <ul>
          <li>India</li>
          <li>Dubai</li>
          <li>Singapore</li>
          <li>Malaysia</li>
          <li>Thailand</li>
        </ul>
      </div>
      <div className="list-content Partners">
        <h3>Our Partners</h3>
        <ul>
          <li>Stu</li>
          <li>Alan</li>
          <li>Phil</li>
          <li>Billa</li>
        </ul>
      </div>
    </div>
    <div className="last-foot">
      <div className="copyright">
        <p>Ⓒ 2024 TicketTrove India Pvt Ltd. All rights reserved</p>
      </div>
      <div className="social">
      <ul>
        <li>
          <FontAwesomeIcon icon={faFacebookF} />
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
        </li>
        <li>
          <FontAwesomeIcon icon={faXTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
      </ul>
    </div>
    </div>
  </footer>
</>

  );
}
