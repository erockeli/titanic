import React from 'react'

const Footer = props =>{
    return(
        <div className='footer'>
            {   
            /*
            *Code for footer goes here
            */
           }

           <div className='contact'>
               <p>Titantic@gmail.com</p>
               <p>(123)456-7890</p>
               <p></p>
               <div className="social">
                   {
                       /*
                        *Social media icons (regualar anchor tags?)
                       */
                   }
               </div>
           </div>

            <div className='copyright'>
                {/*copyright statement*/}
                <small>&copy; Copyright 2019, Operation Titan</small>
            </div>
        </div>
    )
}

export default Footer