import React from "react";
import { ImTwitter, ImFacebook, ImLinkedin2 } from "react-icons/im";
import "../styles/footer.css"

export default function Footer() {
  return (
    <>
      <div className="footer">

        <div className="footer-container">
        <div className="footer-childs-first footer-superminds-logo">
        Minds Geeks
          <div className="footer-magical-button">
            <span className="text"> Three Magical Words</span>{" "}
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              className="magic-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.548828 2.29883L2.54883 0.298828L18.5488 16.2988L16.5488 18.2988L0.548828 2.29883ZM10.5488 2.29883L11.5488 0.298828L12.5488 2.29883L14.5488 3.29883L12.5488 4.29883L11.5488 6.29883L10.5488 4.29883L8.54883 3.29883L10.5488 2.29883ZM2.54883 12.2988L3.54883 10.2988L4.54883 12.2988L6.54883 13.2988L4.54883 14.2988L3.54883 16.2988L2.54883 14.2988L0.548828 13.2988L2.54883 12.2988ZM1.54883 6.29883L2.54883 7.29883L1.54883 8.29883L0.548828 7.29883L1.54883 6.29883ZM15.5488 7.29883L16.5488 8.29883L15.5488 9.29883L14.5488 8.29883L15.5488 7.29883Z"
              />
            </svg>
          </div>
        </div>
        <div className="footer-childs-second">
          <p className="footer-text-logo">&#169;&nbsp;Minds Geeks</p>
          <div className="footer-links-mobile">
          <span className="footer-links">
            <a href="/privacy-policy" className="footer-links-childs">
              Privacy Policy
            </a>
            <a href="/terms&conditions" className="footer-links-childs">
              Terms & Conditions
            </a>
            <p className="footer-links-childs" id="footer-links-childs-3">All Rights Rerseved</p>
          </span>
          <span className="footer-social-links">
            <ImFacebook className="footer-social-links-childs" id="footer-fb" />
            <ImLinkedin2
              className="footer-social-links-childs"
              id="footer-linkedin"
            />
            <ImTwitter
              className="footer-social-links-childs"
              id="footer-twitter"
            />
         
            <svg width="15" height="15" className="footer-social-links-childs"   id="footer-camera" viewBox="0 0 15 15"  xmlns="http://www.w3.org/2000/svg">
<path d="M13.9361 0.341797H1.65824C1.17348 0.341797 0.78125 0.73403 0.78125 1.21879V13.4966C0.78125 13.9814 1.17348 14.3736 1.65824 14.3736H13.9361C14.4208 14.3736 14.8131 13.9814 14.8131 13.4966V1.21879C14.8131 0.73403 14.4208 0.341797 13.9361 0.341797ZM6.04318 7.35771C6.04318 7.35771 6.18191 5.60373 7.79716 5.60373C9.41241 5.60373 9.55114 7.35771 9.55114 7.35771C9.55114 7.35771 9.60168 9.11168 7.79716 9.11168C5.99265 9.11168 6.04318 7.35771 6.04318 7.35771ZM13.0591 12.6196H2.53523V6.48072H4.28921H4.41335C4.34059 6.76248 4.28921 7.05282 4.28921 7.35771C4.28921 9.29498 5.85989 10.8657 7.79716 10.8657C9.73443 10.8657 11.3051 9.29495 11.3051 7.35771C11.3051 7.05282 11.2537 6.76248 11.1809 6.48072H11.3051H13.0591V12.6196ZM13.0591 4.72674H10.4281V2.09577H13.0591V4.72674Z" fill="#A5A5A5"/>
</svg>

          </span>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
