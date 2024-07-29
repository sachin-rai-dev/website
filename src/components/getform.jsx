import React from 'react'

function Getform() {
  return (
    <div className='getmain1'>
        <div className='getmain'>

            <div className='leftget'>
                <div className='leftgeth'>Do you need help bringing an idea into fruition?</div>
                <div className='leftgetm'>@gmail.com</div>
            </div>

            <div className='rightget'>
                 <form className='formget'>
                  
                <input type="text"  placeholder='Your Name' className='name plas' required/>
                <input type="email" placeholder='Your Email' className='email plas' required/>
                <textarea placeholder='Tell us about your project'className='textarea plas' minLength={50}maxLength={1000} required></textarea>
                                <p className='formp'>By clicking Submit, I consent to the cookies policy governing my service usage and provided personal data, respectively.</p>
                 
                 <i><input type="submit" className='submit'/></i>
                
                </form>


            </div>
        </div>
    </div>
  )
}

export default Getform
