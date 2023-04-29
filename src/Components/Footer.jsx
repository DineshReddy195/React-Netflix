import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <h6>Questions? Call 000-800-919-1694</h6>
        <input type="text" placeholder='Enter your gmail'  className='text'/>
   <button className='btn1'>Get Started</button>
      </div>
    )
  }
}