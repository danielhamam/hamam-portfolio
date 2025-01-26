import React, { useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import codingGif from "../../assets/homepage/coding-gif.gif";
import ImageSkeleton from "components/ImageSkeleton";

export default function Introduction() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div
      id="intro-container"
      className="container ps-5 pe-5 d-flex justify-content-center align-items-center"
    >
      <div className="row">
        <div className="col-8 container d-flex justify-content-center align-items-center">
          <div className="mt-5 float-end">
            <span id="intro-name">
              Hi, <span className="custom-br-name"></span>
              I'm Hamam 👋🏻
            </span>
            <span className="custom-br-position"></span>
            <div id="intro-position">
              <ReactTypingEffect
                text={[
                  "software engineer",
                  "web designer",
                  "creator/innovator",
                ]}
                speed={200}
                typingDelay={300}
                eraseDelay={1000}
                eraseSpeed={80}
              />
              <br />
              &nbsp;&nbsp;
            </div>
          </div>
        </div>
        <div className="col-4">
          {!imageLoaded && <ImageSkeleton width={310} height={300} />}
          <img
            src={codingGif}
            className="intro-image"
            style={{ display: imageLoaded ? "block" : "none" }}
            title="Coding Gif"
            alt="hamam-coding"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
