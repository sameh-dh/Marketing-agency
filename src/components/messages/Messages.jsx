import React ,{useState,useEffect}from 'react'
import "./messages.css"
import { MessagesData ,MessagesDataFr} from './data'
import logo from "../../images/logo.png"
const Messages = ({toggle}) => {
    const [data ,setData] = useState(MessagesDataFr)

    let MessageDataLang =() => {
        if (toggle ){
          setData(MessagesData)
        }
    }

  
    const [answer, setAnswer] =useState("")
  return (
    <div className='messages-container'>
        
        <div className="messages-chat">
  <div className="chat-title">
    <h1>Marketing agency</h1>
    <h2>Availble</h2>
    <figure className="avatar">
      <img src={logo} /></figure>
  </div>
  <div className="messages">
    {toggle ?MessagesData.map((message,i) =>{
                return (
                    <div>
                    <div key={i} className="message new" onClick={()=>{
                        setAnswer(message.Answer);
                    }}>{message.Question}</div>
                     </div>
                )
    }): MessagesDataFr.map((message,i) =>{
                return (
                    <div>
                    <div key={i} className="message new" onClick={()=>{
                        setAnswer(message.Answer);
                    }}>{message.Question}</div>
                     </div>
                )
    })}
 
  <div className="message message-personal">{answer}</div>
 
  </div>
  <div className="message-box">
    <textarea type="text" className="message-input" value="we hope that we did answer all of your questions"></textarea>

  </div>

</div>
<div className="messages-bg"></div>
    </div>
  )
}

export default Messages