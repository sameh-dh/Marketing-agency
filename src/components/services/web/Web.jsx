import React, {useState} from 'react'

import "./web.css"
const Web = ({dark}) => {

 
 
    
         
      
   
  return (
   
       	<div class={!dark? "web-container group": "web-container group dark"}>
		<div class="grid-1-5">
			<h2>Landing page</h2>
			<h3><sup>Dt</sup>500</h3>
			<p>Static website</p>
			<ul>
				<li>Responsive Design</li>
				<li>UI/UX Design</li>
				<li>3 to 4 pages</li>
			</ul>
      <a href={`/Reserve/${"Landing page"}`} ><div className="web-button">Reserve</div></a>		
		</div>

		<div class="grid-1-5">
			<h2>Advanced landing page</h2>
			<h3><sup>Dt</sup>800</h3>
			<p>Dynamic Website</p>
			<ul>
      <li>Responsive Design</li>
				<li>UI/UX Design</li>
				<li>6 to 8 pages</li>
        <li>Advanced features</li>
			</ul>		
      <a href={`/Reserve/${"Advanced landing page"}`} ><div className="web-button">reserve</div></a>		
		</div>
    
		<div class="grid-1-5">
    <h2>E-Commerce website</h2>
			<h3><sup>Dt</sup>1500</h3>
			<p>Dynamic Website</p>
			<ul>
      <li>Responsive Design</li>
				<li>UI/UX Design</li>
				<li>Signin /signup</li>
        <li>Admin Dashboard</li>
        <li>Advanced features</li>
			</ul>		
			<a href={`/Reserve/${"E-Commerce website"}`} ><div className="web-button">Reserve</div></a>		
		</div>
		
		
		</div>		

  
  )
}

export default Web