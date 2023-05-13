import { Link } from "react-router-dom"

const Contact = () => {

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
          <div id="phone-container">
            <img src="src\images\mobile-phone.png" alt="Phone Icon"/> 347 - 907 - 3607
          </div>
          <div className="email-container">
            <img src="src\images\email.png" alt="Email Icon"/> <MaillButton label="Email" mailto="mailto:serrinsage@gmail.com"/>
          </div>
          <div>
            <img src="src\images\In-White-128@2x.png" alt="LinkedIn Logo"/> <a href="https://www.linkedin.com/in/serrin-doscher-2a0544224/" target="_blank">LinkedIn Profile</a>
          </div>
          <div>
            <img src="src\images\github-mark-white.png" alt="Github Logo"/> <a href="https://github.com/Serrin-Sage" target="_blank">Github Profile</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact