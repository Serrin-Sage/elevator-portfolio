import { Link } from "react-router-dom"
import { useState } from "react"

const Contact = () => {
  const [phoneText, setPhoneText] = useState("Mobile Number")

  const MaillButton = ({ mailto, label}) => {
    return (
      <Link to="#"
        onClick={(e) => {
          window.open(mailto);
          e.preventDefault();
        }} target="_blank">
        {label}
      </Link>
    )
  }

  return (
    <div className="contact-container">
      <div className="contact-frame">
        <div className="contact-content">
          <div id="phone-container" >
            <img src="/images/icons/mobile-phone.png" alt="Phone Icon"/> <span className="phone-text">347-907-3607</span>
          </div>
          <div className="email-container">
            <img src="/images/icons/email.png" alt="Email Icon"/> <MaillButton label="Email" mailto="mailto:serrinsage@gmail.com"/>
          </div>
          <div>
            <img src="/images/icons/In-White-128@2x.png" alt="LinkedIn Logo"/> <a href="https://www.linkedin.com/in/serrin-doscher-2a0544224/" target="_blank">LinkedIn Profile</a>
          </div>
          <div>
            <img src="/images/icons/github-mark-white.png" alt="Github Logo"/> <a href="https://github.com/Serrin-Sage" target="_blank">Github Profile</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact