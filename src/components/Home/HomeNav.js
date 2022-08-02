import React from 'react';
import './HomeNav.css';

export default function HomeNav() {
  return (
    <div id="home-nav-wrapper" className='container'>
        <div className='row'> 
            <div className='col'>
                <div className='text-center'> 
                    Column 1
                </div>
            </div>
            <div className='col'>
                <div className='text-center'> 
                    Column 2
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <div className='text-center'> 
                    Column 3
                </div>
            </div>
            <div className='col'>
                <div className='text-center'> 
                    Column 4
                </div>
            </div>
        </div>
    </div>
  )
}
