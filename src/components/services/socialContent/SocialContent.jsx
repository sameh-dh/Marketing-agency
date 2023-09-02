import React,{useState}from 'react'
import minus from "../../../images/minus-circle.svg"
import plus from "../../../images/plus-circle.svg"
import twitter from "../../../images/twitter.png"
import facebook from "../../../images/facebook.png"
import instagram from "../../../images/instagram.png"
import tiktok from "../../../images/tik-tok.png"
const SocialContent = ({dark}) => {

    const [views , setViews] = useState([6,50])
    const [price , setPrice] = useState(80)
    const [days, setDays] = useState([2,3])

    const viewsCounter = () => {
       let res1 = views[0]
       let res2 = days[0]
       let res3 =price
     
            res1 +=3
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
   
             res1 += 1
             res3 += 50
             res2 +=1
            
             setDays([res1,res2])
             setPrice(res3)
    
      
           
        
     }
  return (
    <div className='ads-container'>
        <div className={!dark ? "ads-title":"ads-title dark"}>
        Blow your social media content we will Post for you as much as you want .
        </div>
        <div className={!dark ? "ads-card-container logo" : "ads-card-container logo dark"}>
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
            <div className='ads-card-option1 logo'>{views[0]} Posts
            <img src={plus} onClick={()=>viewsCounter()}></img>
            </div>
            <div className='ads-card-option1 logo'>{days[0]} Weeks
            <img src={plus} onClick={()=>daysCounter()}></img>
            </div>
            <div className='ads-card-option1 logo'>Content creation</div>
            <a href={`/Reserve/Content creation: ${views[0]} Posts,${days[0]} Weeks`}>  <button className={!dark ? "ads-card-reserve logo ":"ads-card-reserve dark"} >Reserve</button> </a>

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

export default SocialContent