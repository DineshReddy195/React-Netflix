import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
     <div className='nav-main'>
      <div className='nav'>

<section className='logo'>
NETFLIX
</section>
<section className="lan">

 <ul>
     <li>
         <select id="dropdown">
             <option value="English">English</option>
             <option value="Hindi">Hindi</option>
             <option value="Telugu">Telugu</option>
         </select>
     </li>
     <button className='sign'>sign in</button>
 </ul>
</section>

   </div>
      <div className='form'>

   <h1 id='h1'>Unlimited movies, TV shows and more</h1>
   <h3 className='h3'>Watch anywhere. Cancel anytime.</h3>
   <h3 className='h3'>Ready to watch? Enter your email to create or restart your membership.</h3>
   <input type="text" placeholder='Enter your gmail' className='input'/>
   <button className='btn'>Get Started </button>

      </div>
   </div>
    )
  }
}