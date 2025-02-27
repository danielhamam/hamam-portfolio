import React, { useState } from "react";
import portrait from "../../assets/about-me/about-header.png";
import "./AboutMe.css";

export default function AboutMe() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div
        style={{
          width: "750px",
          height: "400px",
        }}
      >
        {/* Actual Image */}
        <img
          src={portrait}
          alt="About Portrait"
          style={{
            width: "750px",
            display: imageLoaded ? "block" : "none",
            opacity: imageLoaded ? 1 : 0,
          }}
          className="ml-5"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="mb-5">
        <div id="about-header">Hello, World!</div>
      </div>
      <div className="about-text-container about-spacing">
        <div className="about-text">
          {/* Set 1 */}
          <p> Most people call me Danny, or just "Hamam". </p>
          <p>
            {" "}
            I was raised 50 minutes north of Manhattan in a city named{" "}
            <i>Yonkers</i>.{" "}
          </p>
          <p>
            {" "}
            In many ways I consider myself a “90s” kid: the typical day-to-day
            grind of blowing into my Nintendo 64 when a game stopped working and
            gossiping on AOL messenger using my dad’s old big computer. But what
            really attracted me was when I secured my first computer. Granted,
            it was my mother’s old laptop from somewhere in the attic...but I
            finally owned a personal connection to the internet without anyone
            disrupting me.{" "}
          </p>
          {/* Set 2 */}
          <p> There were two things I was obsessed with on my computer. </p>
          <p>
            {" "}
            The first was preserving a clean desktop. If there’s anything I
            despise it’s the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Compulsive_hoarding"
              target="_blank"
              rel="noopener noreferrer"
            >
              compulsive hoarding
            </a>{" "}
            done by 90% of internet users. At least use some folders...or better
            yet, delete (and backup) unused files! I swore an oath to never fall
            victim to this delusion, even learning simple shell commands as a
            young teen to optimize my directory storage (and fine, to look cool
            in front of my friends).{" "}
          </p>
          {/* Set 3 */}
          <p> The second was the notion of security. </p>
          <p>
            {" "}
            Growing up, the threats of being doxed and having passwords stolen
            was the most daunting form of cyberbullying - one that I would get
            each time I won a PvP duel in{" "}
            <a
              href="https://runescape.fandom.com/wiki/PvP_world"
              target="_blank"
              rel="noopener noreferrer"
            >
              Runescape
            </a>
            . In my early teens, I set out to learn all the big, scary terms to
            use the next time I engaged in a dispute with a so-called doxxer.{" "}
          </p>
          <p>
            {" "}
            While shifting through the basics - phishing, encryption, HTTP - I
            came across a term that would change my life forever: Python!{" "}
          </p>
          {/* Set 4 */}
          <p>
            {" "}
            I was always a curious kid. Stumbling upon Python at a time when I
            never knew what I wanted to do exposed me to the concept of creating
            something from nothing. The idea of owning a piece of software, a
            revenue-driven piece of art put together through creative minds, was
            an ideology that was far too attractive not to pursue. Code, to me,
            exemplifies self-expression. We shouldn't be afraid to fail. To
            challenge one's logic, creativity and patience all in one-sitting
            not only expands intelligence, but also substantially grows
            confidence.{" "}
          </p>
          {/* Set 5 */}
          <p> Then the decision to choose my career path suddenly came. </p>
          <p>
            {" "}
            I was torn between medicine and computer science. Everyone - my
            teachers included - expected me to become a doctor. I always
            participated in my advanced Biology classes and consistently ended
            up with top grades on the final exams.{" "}
          </p>
          <p>
            {" "}
            With all achievements aside, the tradeoff between making others
            happy and being my authentic self was clear to me. That's when my
            journey started.{" "}
          </p>
          {/* Set 6 */}
          <p>
            {" "}
            A dream of mine is to collaborate with this generation's pioneers in
            pursuit of chasing after a greater purpose. Leaving an impact and
            revolutionizing the industry has always pushed me to achieve
            perfection. My objective is to work with a team to build an exciting
            project that has groundbreaking potential. I take pride in building
            team-based relationships with other developers and discussing how to
            maximize our work's potential.{" "}
          </p>
          <p className="fw-bolder">
            {" "}
            I want to work with a team I love to build a brand I love.
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="mb-0 about-text"> Curious about me? </p>
          <p className="fw-bolder mb-0">
            <a
              href="hamam-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg custom-gradient"
              style={{
                border: "none",
                padding: "0.3rem 0.65rem",
                borderRadius: "50px",
              }}
            >
              Resume
            </a>
          </p>
        </div>
        <p className="mb-5"></p>
      </div>
    </div>
  );
}
