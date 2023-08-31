import React from 'react'

const HomeSection = ({ isToggle }) => {
  return (
    <div className='HomeSection-container'>
        <div className='HomeSection-main'>
       <h1 className='HomeSection-title'>{isToggle? 'Providing The best social media services' : 'Fournir les meilleurs services de médias sociaux'}</h1>
       <div className='HomeSection-description'>{isToggle? '#Social media marketing agency' : '#Agence de marketing des médias sociaux'} </div>
       <div className='HomeSection-buttons'>
        <button> {isToggle? 'Logo Design' : 'Sesign de Logo'}</button>
        <button> {isToggle? 'Social media managment' : 'Gestion des médias sociaux'}</button>
        <button> {isToggle? 'SEO' : 'SEO'}</button>
        <button> {isToggle? 'Paid social advertising' : 'Publicité sociale payante'}</button>
        <button> {isToggle? 'Content Production' : 'Production de contenu'}</button>
        <button> {isToggle? 'Website Creation' : 'Création de site web'}</button>
       </div>
       </div>
        </div>
  )
}

export default HomeSection