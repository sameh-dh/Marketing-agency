import React ,{useState} from 'react'
import "./navbar.css"
import logo from "../../images/logo.png"
const Navbar = () => {
 
    const [activated , setActivated]=useState(["active","","","","",""])
    const [sidebar, setSidebar] = useState(false)
  return (
    <div className={ sidebar ? "navbar-main-container active app-section" : "navbar-main-container"}>
  <div className={ sidebar ? "navbar-container active" : "navbar-container" } >
      
      <ul className={sidebar ? " navbar-items-container active" : "navbar-items-container "}>
      <img className={sidebar ?'navbar-logo active' :'navbar-logo' } src={logo}></img>
        <li className="navbar-items"><a className={activated[0]} href='home' onClick={()=>setActivated(["active","","","",""])}>
        <i className="uil  uil-question-circle nav__icon"></i>Who we are ?</a></li>
        <li className="navbar-items"><a className={activated[1]} href='#services' onClick={()=>setActivated(["","active","","","","",""])}> <i className="uil uil-file-alt nav__icon"></i> services</a></li>
        <li className="navbar-items"><a className={activated[2]} href='#work' onClick={()=>setActivated(["","","active","","","",""])}> <i className="uil uil-document-layout-left nav__icon"></i> Blogs</a></li>
        <li className="navbar-items"><a className={activated[3]} href='#work' onClick={()=>setActivated(["","","","active","","",""])}> <i className="uil uil-box nav__icon"></i>Products</a></li>
        <li className="navbar-items"><a className={activated[4]} href="#contact" onClick={()=>setActivated(["","","","","active",""])}><i className="uil uil-phone-volume nav__icon"></i> Contact</a></li>
    
      
    
       <li className='navbar-items'><button>Sponsoring</button></li>
      </ul>
      <i
            className="uil uil-times nav__close"
            onClick={() => setSidebar(!sidebar)}
          ></i> 
      </div>
      <div className={sidebar=== false ?"nav__toggle active" :"nav__toggle" } onClick={() => setSidebar(!sidebar)}>
          <i className="uil uil-apps"></i>
        </div>
    </div>
  
  )
}

export default Navbar