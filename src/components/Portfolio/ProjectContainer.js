import React, { useState } from "react";
import "./ProjectContainer.css";

// Project Component
import { Project } from "./Project";

// Projects
import ultraPainProducts from "../../assets/projects/uppi.png";
import districtPlansGenerator from "../../assets/projects/proj1.png";
import dailyToDoLists from "../../assets/projects/proj2.png";
import wireframer from "../../assets/projects/proj3.png";
import prodbyhamam from "../../assets/projects/proj4.png";
import AnimatedPage from "components/AnimatedPage";
import { Code2, X } from "lucide-react";

export default function Projects() {
  const modalContent = {
    "ULTRA PAIN PRODUCTS": `The Ultra Pain Products Healthcare Order Portal is a user-friendly platform that simplifies purchasing healthcare products, 
                            offering seamless browsing for customers and efficient management tools for administrators.`,

    "DISTRICT PLANS GENERATOR": `This collaborative web application leverages a sophisticated algorithm to generate U.S. election districting plans, processed 
                                 remotely on a high-performance supercomputer. It offers customizable options, including population deviation %, compactness 
                                 preferences, and minority group focus.`,

    "DAILY TO-DO LIST MANAGER": `This web app lets users create and manage daily to-do lists. Users can sign up with email, prioritize sub-tasks, mark tasks as completed, 
                                 and add or delete tasks. Authentication and data are handled by Firebase and Firestore.`,

    WIREFRAMER: `The project mimics the creation of a website prototype, sort of like Figma. It offers a playground for new creators to add and edit contents 
                                        of a pseudo-website. User authentication and data storage is maintained by Google's Firebase and Firestore services.`,

    "MUSIC PRODUCTION WEBSITE": `The website application features a beats catalogue formatted by BeatStars.com and purchase options for music compositions. On the 
                                        bottom, there is a contact option that redirects the message to one of my personal emails.`,
    ultraPainProductsLink: "https://ultrapainproducts.com/login",
    districtLink: "https://github.com/danielhamam/District-Plans-Generator",
    todoLink: "https://github.com/danielhamam/TodoList-React-Redux",
    wireframerLink: "https://github.com/danielhamam/Wireframer-Project",
    musicLink: "https://github.com/danielhamam/Music-Production-Website",
  };
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalDesc, setModalDesc] = useState(null);
  const [modalSkills, setModalSkills] = useState([]);

  const setModalContents = (image, title, desc, skills) => {
    setModalImage(image);
    setModalTitle(title);
    setModalDesc(desc);
    setModalSkills(skills);
  };

  return (
    <div id="projects-container" className="container">
      <AnimatedPage>
        <h1 className="text-center py-5">
          {" "}
          Here’s a taste of some personal <br /> projects I’ve built{" "}
        </h1>
        <div className="d-flex flex-wrap justify-content-center">
          {/* Ultra Pain Products Project */}
          <div className="col-12 col-lg-6 d-flex justify-content-center ">
            <Project
              setModalContents={setModalContents}
              link={modalContent["ultraPainProductsLink"]}
              skills={[
                "Next.js",
                "Supabase",
                "Tailwind",
                "Resend",
                "Vercel"
              ]}
              image={ultraPainProducts}
              modalContent={[
                "ULTRA PAIN PRODUCTS",
                modalContent["ULTRA PAIN PRODUCTS"],
              ]}
            />
          </div>
          {/* Stony Brook District Plans Project */}
          <div className="col-12 col-lg-6 d-flex justify-content-center ">
            <Project
              setModalContents={setModalContents}
              link={modalContent["districtLink"]}
              skills={[
                "React.js",
                "Bootstrap",
                "Spring Boot",
                "Python",
                "Materialize",
                "MySQL",
                "Bash",
              ]}
              image={districtPlansGenerator}
              modalContent={[
                "DISTRICT PLANS GENERATOR",
                modalContent["DISTRICT PLANS GENERATOR"],
              ]}
            />
          </div>

          {/* Stony Brook Daily To-do List Project */}
          <div className="col-12 col-lg-6 d-flex justify-content-center ">
            <Project
              setModalContents={setModalContents}
              link={modalContent["todoLink"]}
              skills={[
                "React.js",
                "Bootstrap",
                "Firebase",
              ]}
              image={dailyToDoLists}
              modalContent={[
                "DAILY TO-DO LIST MANAGER",
                modalContent["DAILY TO-DO LIST MANAGER"],
              ]}
            />
          </div>

          {/* Stony Brook Wireframer Project */}
          <div className="col-12 col-lg-6 d-flex justify-content-center ">
            <Project
              setModalContents={setModalContents}
              link={modalContent["wireframerLink"]}
              image={wireframer}
              skills={[
                "React.js",
                "Bootstrap",
                "Firebase",
              ]}
              modalContent={["WIREFRAMER", modalContent["WIREFRAMER"]]}
            />
          </div>

          {/* Prod By Hamam Music Production Website */}
          <div className="col-12 col-lg-6 d-flex justify-content-center ">
            <Project
              setModalContents={setModalContents}
              link={modalContent["musicLink"]}
              skills={[
                "React.js",
                "Bootstrap",
                "Heroku"
              ]}
              image={prodbyhamam}
              modalContent={[
                "MUSIC PRODUCTION WEBSITE",
                modalContent["MUSIC PRODUCTION WEBSITE"],
              ]}
            />
          </div>
        </div>
      </AnimatedPage>

      {/* Modal */}
      <div className="modal fade" id="project-modal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow">
            <div className="modal-header border-bottom-0 bg-light">
              <h5
                className="modal-title w-100 text-center fw-bold"
                id="exampleModalLabel"
              >
                {modalTitle}
              </h5>
              <button
                type="button"
                className="shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <X size={20} /> {/* Using Lucide X icon for close button */}
              </button>
            </div>

            <div className="modal-body p-4">
              {/* Image Container with subtle shadow and rounded corners */}
              <div className="image-container mb-4">
                <img
                  className="modal-image img-fluid rounded shadow-sm"
                  src={modalImage}
                  alt={modalTitle}
                />
              </div>

              {/* Description with better typography */}
              <div className="description-section mb-4 text-center">
                <p className="text-muted lead"> {modalDesc} </p>
              </div>

              {/* Enhanced Skills Section */}
              <div className="skills-section mt-4 pt-4 border-top">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
                  <Code2 size={24} className="text-primary" />
                  <h6 className="mb-0 fw-bold">Technologies & Skills</h6>
                </div>

                <div className="skills-list text-center">
                  {modalSkills.map((skill, index) => (
                    <>
                      <span key={index} className="skill-badge">
                        {skill}
                      </span>
                      {index < modalSkills.length - 1 && (
                        <span className="text-muted mx-1">•</span>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
