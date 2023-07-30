import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-link_div">
            <h4>For Business</h4>
            <a href="/">
              <p>Health</p>
            </a>
            <a href="/">
              <p>Health</p>
            </a>
            <a href="/">
              <p>Health</p>
            </a>
          </div>
          <div className="sb__footer-link_div">
            <h4>For Business</h4>
            <a href="/">
              <p>Health</p>
            </a>
            <a href="/">
              <p>Health</p>
            </a>
            <a href="/">
              <p>Health</p>
            </a>
          </div>
          <div className="sb__footer-link-div">
            <h4>For Business</h4>
            <a href="/">
              <p>Health</p>
            </a>
          </div>
          <div className="sb__footer-link-div">
            <h4>For Business</h4>
            <a href="/">
              <p>Health</p>
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
                <p>
                    @{new Date().getFullYear()} CodeInn. All right reserved.
                </p>
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
                        <p>Coikie Declaration</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
