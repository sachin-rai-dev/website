import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import Form from './components/form'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
      <Nav/>
       <div className='servises1 white-bg'>
        <h1 className='animatiin'>

          Get all the <span className="text-orange">benefits of </span> 
                     working with
                <span className="text-orange"> full-cycle studio</span>
                
        </h1>
        <div>
          <button className='submit'><Link to={"/Contactus"} className='ank'>Lets talk</Link></button>
           <span className='animatiin'>  
                    Learn more about the team of professionals who care about your product as much as you do and the fields we can help you with.
           </span>
        </div>
       </div>
       <Form titel={"drop as a line!"}/>
      <Footer/>
    </div>
  )
}

export default Services
