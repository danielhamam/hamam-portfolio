import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

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
                        <ReactTypingEffect
                            text={["software engineer", "web designer", "creator/innovator"]}
                            speed={200}
                            typingDelay={300}
                            eraseDelay={1000}
                            eraseSpeed={80}
                        />
                        <br/>
                        &nbsp;&nbsp;
                        <button id='intro-button'> CONTACT ME </button>
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <iframe src="https://giphy.com/embed/ndIq5ohg1pyfqyVOII" id="intro-image" title="Coding Gif" frameBorder="0" clasNames="giphy-embed" ></iframe><a href="https://giphy.com/gifs/drummachinefunk-create-develop-developing-ndIq5ohg1pyfqyVOII"></a>
            </div>
        </div>
    </div>
  )
}
