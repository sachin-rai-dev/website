import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='m-3 white-bg'>
      <div className='footer'>

        <div className='imgfooter'>
          <img src="webgenn.png" alt="" />
        </div>

        
          <div className='footerinner'>
            <h2>Company</h2>
            <span><Link to={"/"}>home</Link></span>
            <span><Link to={"/Services"}>Services</Link></span>
            <span><Link to={"/company"}>company</Link></span>
            <span><Link to={"/Projects"}>Projects</Link></span>
          </div>

          <div className='footerinner'>
            <h1>Socials</h1>
            <span>facebook</span>
            <span>instagram</span>
            <span>LinkedIn</span>
            <span>Twitter</span>
          </div>
      

        
        <div className='footerinner'>
            <h2>Company</h2>
            <span>home</span>
            <span>Services</span>
            <span>abut us</span>
            <span>Projects</span>
          </div>
         
      </div>
      <div className='footerinner2'>
        <span>
         <h4>Email us</h4>
         <p>juyhbhfhd@gmail.com</p>
       </span>

       <span>
        <h4>Call us on</h4>
        <p>+916877386378</p>
       </span>
      </div>

    </div>
  )
}

export default Footer
