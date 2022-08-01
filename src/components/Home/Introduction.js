import React from 'react'
import hamam from '../../assets/homepage/tempImage.gif'

export default function Introduction() {
  return (
    <div id="intro-wrapper"> 
        <div id="intro-contents">
            <br/>
            <div id='intro-name'>
                Hi, 
                <br/>
                <span> I'm Hamam 👋🏻</span>
            </div>
            <div id='intro-position'> software engineer
                <div className='text-center'> 
                    <button id='intro-contact-me' className='btn'> CONTACT ME </button>
                </div>
            </div>
        </div>
        <div id="intro-image-wrapper"> 
            {/* <img src={hamam} alt="Hamam's Animated Image" /> */}
            <iframe class="intro-image giphy-embed" src="https://giphy.com/embed/ndIq5ohg1pyfqyVOII" frameBorder="0" allowFullScreen></iframe>
        </div>
    </div>
  )
}
