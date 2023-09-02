import React, {useState} from 'react'
import "./logo.css";
import minus from "../../../images/minus-circle.svg"
import plus from "../../../images/plus-circle.svg"
import twitter from "../../../images/twitter.png"
import facebook from "../../../images/facebook.png"
import instagram from "../../../images/instagram.png"
import tiktok from "../../../images/tik-tok.png"
const Logo = ({dark}) => {
    const [views , setViews] = useState([1,50])
    const [price , setPrice] = useState(150)
    const [days, setDays] = useState([2,3])

    const viewsCounter = () => {
       let res1 = views[0]
       let res2 = days[0]
       let res3 =price
     
            res1 += 1
            res2 += 1
            res3+=80
            setDays([res2,res2])
            setViews([res1,0 ])
            setPrice(res3)
        
      
    }

    const daysCounter = () => {
        let res1 = days[0]
        let res2 = days[1]
        let res3 =price
         if (res1> 1) {
             res1 -= 1
             res3 += 50
             res2 +=1
            
             setDays([res1,res2])
             setPrice(res3)
         }
      
           
        
     }
  return (
    <div className='ads-container'>
        <div className={!dark ? "ads-title":"ads-title dark"}>
        Make your own logo 
        </div>
        <div className={!dark ? "ads-card-container":"ads-card-container dark"}>
            <div className="ads-card-title logo">
                custumise your offer
                <div className="ads-card-circle1 logo"></div>
                <div className="ads-card-circle2 logo"></div>
                <div className="ads-card-circle3 logo"></div>
                <div className="ads-card-circle4 logo"></div>
                <div className="ads-card-circle5 logo"></div>
                <div className="ads-card-circle6 logo"></div>
                <div className="ads-card-circle7 logo"></div>
                <div className="ads-card-circle8 logo"></div>
                <div className="ads-card-circle9 logo"></div>
                <div className="ads-card-circle10 logo"></div>
            </div>
            <div className="ads-card-price">{price}Dt</div>
            <div className='ads-card-option1 logo'>{views[0]} Logo
            <img src={plus} onClick={()=>viewsCounter()}></img>
            </div>
            <div className='ads-card-option1 logo'>{days[0]} Weeks
            <img src={minus} onClick={()=>daysCounter()}></img>
            </div>
            <div className='ads-card-option1 logo'>unlimited revesion</div>
            <a href={`/Reserve/Logo Design: ${views[0]}Logo,${days[0]} Weeks`}>  <button className={!dark ? "ads-card-reserve logo":"ads-card-reserve logo dark"} >Reserve</button> </a>

        <div className="social-media">
        <img src={facebook} alt='facebook' title='facebook'/>
        <img src={twitter} alt='twitter' title='twitter'/>
        <img src={instagram} alt='instagram' title='instagram'/>
        <img src={tiktok} alt='tiktok' title='tiktok'/>
        </div>
        </div>
        </div>
  )
}

export default Logo