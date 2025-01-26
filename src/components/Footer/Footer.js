import React from "react";
import "./Footer.css";
import github from "../../assets/footer/github-logo.png";
import linkedin from "../../assets/footer/linkedin-logo.png";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <div id="footer-wrapper">
      <div className="d-flex flex-row justify-content-between align-items-center w-100 px-5 py-4">
        <div className="footer-text-content">All Rights Reserved To Hamam</div>
        <div className="d-flex align-items-center gap-4">
          <button
            className="btn border border-dark d-flex align-items-center gap-2"
            onClick={() => (window.location = "mailto:danielhamam@outlook.com")}
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </button>
          <a
            href="https://github.com/danielhamam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github" className="footer-icon-image" />
          </a>
          <a
            className="footer-social-link"
            href="https://www.linkedin.com/in/danielhamam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="footer-icon-image" />
          </a>
        </div>
      </div>
    </div>

    // <div id="footer-wrapper">
    //   <div className="container-fluid">
    //     <div className="row py-4 d-flix align-items-center">
    //       <div className="col">
    //         <div className="footer-text-content">
    //           All Rights Reserved To Hamam
    //         </div>
    //       </div>
    //       <div className="footer-social-links d-flex flex-row">
    //         <button
    //           className="btn btn-primary d-flex align-items-center gap-2"
    //           onClick={() =>
    //             (window.location = "mailto:danielhamam@outlook.com")
    //           }
    //         >
    //           <Mail size={18} />
    //           <span>Contact Me</span>
    //         </button>
    //         &nbsp; &nbsp; &nbsp; &nbsp;
    //         <a
    //           href="https://github.com/danielhamam"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <img src={github} alt="Github" className="footer-icon-image" />
    //         </a>
    //         &nbsp; &nbsp; &nbsp; &nbsp;
    //         <a
    //           className="footer-social-link"
    //           href="https://www.linkedin.com/in/danielhamam/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <img
    //             src={linkedin}
    //             alt="LinkedIn"
    //             className="footer-icon-image"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
