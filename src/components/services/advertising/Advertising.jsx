import React, { useState } from 'react'
import "./advertising.css"
import minus from "../../../images/minus-circle.svg"
import plus from "../../../images/plus-circle.svg"
import twitter from "../../../images/twitter.png"
import facebook from "../../../images/facebook.png"
import instagram from "../../../images/instagram.png"
import tiktok from "../../../images/tik-tok.png"
const Advertising = ({dark}) => {
    const [views , setViews] = useState([10,50])
    const [price , setPrice] = useState(50)
    const [days, setDays] = useState([1,3])

    const viewsCounter = () => {
       let res1 = views[0]
       let res2 = views[1]
       let res3 =price
        if (res1<res2) {
            res1 += 10
            res3+=20
            if (res1 ===res2) {
                res2 += 50
            }
            setViews([res1,res2])
            setPrice(res3)
        }
        else {
            res2 +=50
            res1 +=10
            res3+=20
            setViews([res1,res2])
            setPrice(res3)
        }
    }

    const daysCounter = () => {
        let res1 = days[0]
        let res2 = days[1]
        let res3 =price
         if (res1<res2) {
             res1 += 1
             res3 += 10
             res2 +=1
             if (res1 ===res2) {
                 res2 += 3
             }
             setDays([res1,res2])
             setPrice(res3)
         }
         else {
             res2 +=1
             res1 +=3
             res3+=10
             setViews([res1,res2])
             setPrice(res3)
         }
     }
  return (
    <div className='ads-container'>
        <div className={!dark ? "ads-title":"ads-title dark"}>
        Unlock the power of Ads with Paid social media Advertising
        </div>
        <div className={!dark ? "ads-card-container" : "ads-card-container dark"}>
            <div className="ads-card-title">
                custumise your offer
                <div className="ads-card-circle1"></div>
                <div className="ads-card-circle2"></div>
                <div className="ads-card-circle3"></div>
                <div className="ads-card-circle4"></div>
                <div className="ads-card-circle5"></div>
                <div className="ads-card-circle6"></div>
                <div className="ads-card-circle7"></div>
                <div className="ads-card-circle8"></div>
                <div className="ads-card-circle9"></div>
                <div className="ads-card-circle10"></div>
            </div>
            <div className="ads-card-price">{price}Dt</div>
            <div className='ads-card-option1'>{views[0]}k-{views[1]}k views
            <img src={plus} onClick={()=>viewsCounter()}></img>
            </div>
            <div className='ads-card-option1'>{days[0]}-{days[1]} Days
            <img src={plus} onClick={()=>daysCounter()}></img>
            </div>
            <div className='ads-card-option1'>Custom Audiance</div>
            <a href={`/Reserve/Ads:${views[0]}k-${views[1]}k views , ${days[0]}-${days[1]} Days`}><button className={!dark ? "ads-card-reserve":"ads-card-reserve dark"}>Reserve</button></a>

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

export default Advertising