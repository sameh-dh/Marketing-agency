import React, {useState} from 'react'

import "./web.css"
const Web = ({dark, isToggle}) => {

 
 
    
         
      
   
  return (
   
       	<div class={!dark? "web-container group": "web-container group dark"}>
		<div class="grid-1-5">
			<h2>{isToggle? 'Landing page' : 'Page de destination'}</h2>
			<h3><sup>Dt</sup>500</h3>
			<p>{isToggle? 'Static website':'Site web statique'}</p>
			<ul>
				<li>{isToggle? 'Responsive Design':'Design Responsive'}</li>
				<li>{isToggle?'UI/UX Design':'UI/UX Design'}</li>
				<li>{isToggle?'3 to 4 pages':'3 à 4 pages'}</li>
			</ul>

      <a href={`/Reserve/${"Landing page"}`} ><div className="web-button">{isToggle? 'Reserve':'Réserve'}</div></a>		

		</div>

		<div class="grid-1-5">
			<h2>{isToggle ?'Advanced landing page':'Page de destination avancée'}</h2>
			<h3><sup>Dt</sup>800</h3>
			<p>{isToggle? 'Dynamic Website':'Site Web Dynamique'}</p>
			<ul>
      		<li>{isToggle? 'Responsive Design':'Design Responsive'}</li>
				<li>{isToggle?'UI/UX Design':'UI/UX Design'}</li>
				<li>{isToggle?'6 to 8 pages':'6 à 8 pages'}</li>
        <li>{isToggle?'Advanced features':'Fonctionnalités avancées'}</li>
			</ul>		

      <a href={`/Reserve/${"Advanced landing page"}`} ><div className="web-button">{isToggle? 'Reserve':'Réserve'}</div></a>		

		</div>
    
		<div class="grid-1-5">
    <h2>{isToggle?'E-Commerce website':'E-Commerce website'}</h2>
			<h3><sup>Dt</sup>1500</h3>
			<p>{isToggle? 'Dynamic Website':'Site Web Dynamique'}</p>
			<ul>
      <li>{isToggle? 'Responsive Design':'Design Responsive'}</li>
				<li>{isToggle?'UI/UX Design':'UI/UX Design'}</li>
				<li>{isToggle?'Signin /signup':'Signin /signup'}</li>
        <li>{isToggle?'Admin Dashboard':'Tableau de bord administrateur'}</li>
        <li>{isToggle?'Advanced features':'Fonctionnalités avancées'}</li>
			</ul>		

			<a href={`/Reserve/${"E-Commerce website"}`} ><div className="web-button">{isToggle? 'Reserve':'Réserve'}</div></a>		

		</div>
		
		
		</div>		

  
  )
}

export default Web