import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'
import Form from './components/form'
import { Link } from 'react-router-dom'
import { disign } from './lib'
import Showcard from './components/showcard'

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

       <div className='servises2 container'>

        <div className='servises2left'>
          <img src="https://cdn.phenomenonstudio.com/wp-content/webp-e…ads/2023/03/3d-illustrations-30-rotation.png.webp" alt="" />
        </div>
        
        <div className='servises2right'>
          <h1 className='heding-black textani'>
            Is it possible to
            blend technology,
            professionalism,
            and aesthetics?
          </h1>
        </div>

       </div>

       <div className='container '>
        <h2 className='fw-bold py-4 px-2 srvises3 textani'>
            By merging aesthetic design with
            reliable processes, we'll help you achieve
            your goals

        </h2>
       </div>

       <div className='container-md p-3 servisecardgrid'>
          {

          disign.map((val,i)=>
          
             <Showcard carddata={val} kay={i}/>

          )

          } 
       </div>


       <Form titel={"drop as a line!"}/>
      <Footer/>
    </div>
  )
}

export default Services
