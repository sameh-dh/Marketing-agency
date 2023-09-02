import "./css/App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Blogs from "./components/blogs/Blogs";
import BlogDetail from "./components/blogs/BlogDetails";
import Advertising from "./components/services/advertising/Advertising";
import Logo from "./components/services/logo/Logo";
import SocialContent from "./components/services/socialContent/SocialContent";
import Reserve from "./components/services/Reserve/Reserve";
import Seo from "../src/components/services/SEO/Seo.jsx";
import Navbar2 from "./components/navbar/Navbar2";

import Web from "./components/services/web/Web";
import Messages from "./components/messages/Messages";


function App() {
  const [isToggle, setIsToggle] = useState(false);
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setIsToggle(!isToggle);
  };
  const modeSwitch = (state) => {
    setDark(state);
  };

  return (
    <Router>
      <div className={!dark ? "App" : "App dark"}>
   
        <Switch>
          <Route exact path="/">
          <Navbar
          isToggle={isToggle}
          toggle={toggle}
          funcMode={modeSwitch}
          dark={dark}
        />
            <Home isToggle={isToggle} dark={dark} />
          </Route>
          <Route path="/Blogs">
            <Navbar2  isToggle={isToggle}
          toggle={toggle}
          funcMode={modeSwitch}
          dark={dark} />
            <Blogs dark={dark} />
          </Route>
          <Route path="/Logo">
          <Navbar2  isToggle={isToggle}
          toggle={toggle}
          funcMode={modeSwitch}
          dark={dark} />
            <Logo dark={dark} isToggle={isToggle}/>
          </Route>

          <Route path="/Social">
          <Navbar2  isToggle={isToggle}
          toggle={toggle}
          funcMode={modeSwitch}
          dark={dark} />
            <SocialContent dark={dark} isToggle={isToggle}/>
          </Route>

          <Route path="/Ads">
          <Navbar2  isToggle={isToggle}
          toggle={toggle}
          funcMode={modeSwitch}
          dark={dark} />
            <Advertising dark={dark} isToggle={isToggle}/>
          </Route>

          <Route path="/Seo">
          <Navbar2  isToggle={isToggle}
          toggle={toggle}
          funcMode={modeSwitch}
          dark={dark} />
            <Seo dark={dark} isToggle={isToggle}/>
          </Route>

        <Route path="/blog/:id" > 
         <Navbar2  isToggle={isToggle}
          toggle={toggle}
          funcMode={modeSwitch}
          dark={dark} />
        <BlogDetail  dark={dark}/>
        </Route>


        <Route path="/Reserve/:choice" > 
         <Navbar2  isToggle={isToggle}
          toggle={toggle}
          funcMode={modeSwitch}
          dark={dark} />
        <Reserve  dark={dark} isToggle={isToggle}/>
        </Route>



        <Route path="/Web" > 
         <Navbar2  isToggle={isToggle}
          toggle={toggle}
          funcMode={modeSwitch}
          dark={dark} />
        <Web dark={dark} isToggle={isToggle}/>
        </Route>

      
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
