import React from 'react'

function Gridlayout({data}) {
  return (
    <div className='w-100'>
        
        <div className='grid'>

        {data.map((val,i)=>{
            
            return(
            
                  <div className=' gridcomponent' key={i} >
                     <div className='gridcomponent1'>
                        <h1>{val.heding}</h1>
                        <span>0{i+1}</span>
                     </div>
                     <div className='gridcomponent2'>
                        <p>{val.para}</p>
                     </div>
                  </div>

                 )

        })}
        
        </div>

    </div>
  )
}

export default Gridlayout