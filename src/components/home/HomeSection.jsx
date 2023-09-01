import React ,{useState}from 'react'
import Messages from '../messages/Messages'
const HomeSection = ({ isToggle,dark }) => {
  const [show , setShow] =useState(false)
  return (
    <div className={!dark ? 'HomeSection-container': 'HomeSection-container dark' }>
        <div className={!dark ? 'HomeSection-main': 'HomeSection-main dark'}>
       <h1 className={!dark ? 'HomeSection-title' :'HomeSection-title dark'}>{isToggle? 'Providing The best social media services' : 'Fournir les meilleurs services de médias sociaux'}</h1>
       <div className='HomeSection-description'>{isToggle? '#Social media marketing agency' : '#Agence de marketing des médias sociaux'} </div>
       <div className='HomeSection-buttons'>
        <button> {isToggle? 'Logo Design' : 'Sesign de Logo'}</button>
        <button> {isToggle? 'Social media managment' : 'Gestion des médias sociaux'}</button>
        <button> {isToggle? 'SEO' : 'SEO'}</button>
        <button> {isToggle? 'Paid social advertising' : 'Publicité sociale payante'}</button>
        <button> {isToggle? 'Content Production' : 'Production de contenu'}</button>
        <button> {isToggle? 'Website Creation' : 'Création de site web'}</button>
       </div>
       </div>{
       show? <Messages toggle={isToggle} />: ""
      }
       <i class="uil uil-comment-notes" onClick={()=>{
setShow(!show)
       }}></i>
        </div>
  )
}

export default HomeSection