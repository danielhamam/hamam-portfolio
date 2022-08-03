import React from 'react'
import hamam from '../../assets/homepage/tempImage.gif'

export default function Introduction() {
  return (
    <div id="intro-container" className="container ps-5 pe-5 d-flex justify-content-center align-items-center">
        <div className="row">
            <div className='col-8 container d-flex justify-content-center align-items-center'>
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
            <div className='col-4'>
                <iframe id="intro-image" src="https://giphy.com/embed/ndIq5ohg1pyfqyVOII" frameBorder="0" class="giphy-embed"></iframe>
            </div>
        </div>
    </div>
  )
}
