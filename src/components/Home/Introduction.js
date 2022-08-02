import React from 'react'
import hamam from '../../assets/homepage/tempImage.gif'

export default function Introduction() {
  return (
    <div id="intro-container" className="container d-flex justify-content-center align-items-center">
        <div className="row">
            <div className='col-6 col-sm-7 col-md-8'>
                <div className='mt-5 float-end'> 
                    <span id='intro-name'> 
                        Hi, <span className='custom-br-name'></span>
                        I'm Hamam 👋🏻
                    </span>
                    <span className='custom-br-position'></span>
                    <div id="intro-position"> 
                        software engineer 
                        <br/>
                        &nbsp;&nbsp;
                        <button id='intro-button'> CONTACT ME </button>
                    </div>
                </div>
            </div>
            <div className='col-6 col-sm-5 col-md-4 float-start'>
                <img id="intro-image" src={hamam}></img>
            </div>
        </div>
    </div>
  )
}
