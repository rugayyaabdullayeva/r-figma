import React from "react";
import "../../../components/client/Footer/style.css";
import Icon from '../../../assets/icon/Group 19.svg'


const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-getStarted">
        <div className="wrapper">
          <h5>Boost your links today</h5>
          <button className="btn">Get Started</button>
        </div>
      </div>
      <div className='footer'>
        <div className="container">
          <div className='d-flex justify-content-between'>
            <h3>Shortly</h3>

            <ul className='footer-ul'>
              <h5>Features</h5>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>

            <ul className='footer-ul'>
              <h5>Resources</h5>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>

            <ul className='footer-ul'>
              <h5>Company</h5>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
            <div>
              <img src={Icon} />
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}


export default Footer;
