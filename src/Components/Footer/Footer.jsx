import "./Footer.css";
import mamlaka from "../../assets/mamlaka.png"
import logo from "../../assets/mobadara-logo.png"
import asg from "../../assets/asg.png"

const Footer=()=>{
    return (
      <div className="footer">
        <p>@ 2025 EDUSITY . All rights reserved.</p>
        <ul>
          <li>Terms of services</li>
          <li>Privacy Policy</li>
        </ul>

        <img src={mamlaka} alt=""  style={{ background: "#F5F5F5" }}/>
        <img src={logo} alt=""  style={{ background: "#F5F5F5" }}/>
        <img src={asg} alt="" style={{ background: "#F5F5F5" }} />
      </div>
    );
}


export default Footer;