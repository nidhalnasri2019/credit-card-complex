import React from 'react';
import vista from './vista3.jpg';
import master from './master.jpg'
import './carte.css'
const Card=({changenumber, changename, changevalid})=>{
    
        return (
            <div className='carte'>
              
                <img src={vista} className="puce" alt="logo" />
                <div className="rip">
                    <h3>{changenumber}</h3>
                </div>

                <div className="flex">
                                       
                    <h3>{changename}</h3>
                    <h2>{changevalid}</h2>
                    <img src={master} className="master" alt="logo" />
                    
                </div>

            </div> 

         );
    }

 
export default Card;