
import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
const Navbar2 = ({ isToggle, toggle ,funcMode,dark}) => {


    const [activated, setActivated] = useState(["active", "", "", "", "", ""]);
    const [sidebar, setSidebar] = useState(false);
    return (
      <div
        className={
          sidebar
            ? "navbar-main-container active app-section"
            : "navbar-main-container"
        }
      >
        <div className={sidebar ? "navbar-container active" : "navbar-container"}>
          <ul
            className={
              sidebar
                ? " navbar-items-container  active"
                : "navbar-items-container  "
            }
          >
            <a href="/"> <img
              className={sidebar ? "navbar-logo active" : "navbar-logo"}
              src={logo}
            ></img></a>
            <li className={!dark ?"navbar-items nav2":"navbar-items  nav2 dark"}>
              <a
                className={activated[0]}
                href="/"
                onClick={() => setActivated(["active", "", "", "", ""])}
              >
                <i className="uil  uil-question-circle nav__icon"></i>
                {isToggle ? "Who we are ?" : "Qui sommes-nous?"}
              </a>
            </li>
            <li className={!dark ?"navbar-items nav2":"navbar-items  nav2 dark"}>
              <a
                className={activated[1]}
                href="/#services"
                onClick={() => setActivated(["", "active", "", "", "", "", ""])}
              >
                {" "}
                <i className="uil uil-file-alt nav__icon"></i>
                {isToggle ? "Services" : "Services"}{" "}
              </a>
            </li>
            <li className={!dark ?"navbar-items nav2":"navbar-items  nav2 dark"}>
            <a
                className={activated[2]}
                href="/Blogs"
                onClick={() => setActivated(["", "", "active", "", "", "", ""])}
              >
                {" "}
                <i className="uil uil-document-layout-left nav__icon"></i>
                {isToggle ? "Blogs" : "Blogs"}{" "}
              </a>
            </li>
            <li className={!dark ?"navbar-items nav2":"navbar-items  nav2 dark"}>
              <a
                className={activated[3]}
                href="/Ads"
                onClick={() => setActivated(["", "", "", "active", "", "", ""])}
              >
                {" "}
                <i className="uil uil-box nav__icon"></i>
                {isToggle ? "Advertising" : "Publicité"}
              </a>
            </li>
            <li className={!dark ?"navbar-items nav2":"navbar-items  nav2 dark"}>
              <a
                className={activated[4]}
                href="/#contact"
                onClick={() => setActivated(["", "", "", "", "active", ""])}
              >
                <i className="uil uil-phone-volume nav__icon"></i>
                {isToggle ? "Contact" : "Contact"}{" "}
              </a>
            </li>
  
            <li>
              <button onClick={toggle} className="switch">
                {isToggle ? "French" : "English"}
              </button>
            </li>
            <li className={!dark ?"navbar-items nav2":"navbar-items  nav2 dark"}>
            <button >  <a href="/#contact" >
              {isToggle ? "Work with us" : "collaborer avec nous"}
              </a>   </button>
            </li>
            <label for="theme" className="theme">
              <span class="theme__toggle-wrap" >
                <input
                  id="theme"
                  className="theme__toggle"
                  type="checkbox"
                  role="switch"
                  name="theme"
                  value="dark"
                />
                <span class="theme__fill"></span>
                <span class="theme__icon" onClick={()=>{
                funcMode(!dark)
              }}>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                  <span class="theme__icon-part"></span>
                </span>
              </span>
            </label>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => setSidebar(!sidebar)}
          ></i>
        </div>
        <div
          className={sidebar === false ? "nav__toggle active" : "nav__toggle"}
          onClick={() => setSidebar(!sidebar)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </div>
    );
  };

export default Navbar2