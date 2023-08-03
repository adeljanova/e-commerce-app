import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-link_div">
            <h4>About Us</h4>
            <a href="/">
              <p>Careers</p>
            </a>
            <a href="/">
              <p>Our Stores</p>
            </a>
            <a href="/">
              <p>Our Cares</p>
            </a>
            <a href="/">
              <p>Terms & Conditions</p>
            </a>
            <a href="/">
              <p>Privacy Policy</p>
            </a>
          </div>
          <div className="sb__footer-link_div">
            <h4>Customer Care</h4>
            <a href="/">
              <p>Help Center</p>
            </a>
            <a href="/">
              <p>How to Buy</p>
            </a>
            <a href="/">
              <p>Track Your Order</p>
            </a>
            <a href="/">
              <p>Returns & Refunds</p>
            </a>
          </div>
          <div className="sb__footer-link-div">
            <h4>Contact Us</h4>
            <a href="/">
              <p>70 Washington Square South, New York,</p>
              <p> NY 10012, United States</p>
            </a>
            <a href="/">
              <p>Email: uilib.help@gmail.com</p>
            </a>
            <a href="/">
              <p>Phone: +1 1123 456 780</p>
            </a>
          </div>
          <div className="sb__footer-link-div">
            <h4>For Business</h4>
            <div className="socialMedia">
              <p>
                <AiOutlineFacebook />
              </p>
              <p>
                <AiOutlineInstagram />
              </p>
              <p>
                <AiOutlineTwitter />
              </p>
              <p>
                <AiOutlineLinkedin />
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} Daralexa. All right reserved.</p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
