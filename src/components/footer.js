import React from "react";
import Newsletter from "./newsletter";
import "../sass/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <p>Created by James Q Quick, @2018</p>
          <a href="https://www.youtube.com/c/jamesqquick">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}