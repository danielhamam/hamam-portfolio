import React, { useState } from "react";
import "./Project.css";
import "./ProjectContainer.css"; // to have access to modal id class

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import ImageSkeleton from "components/ImageSkeleton";

export const Project = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="proj-item-wrapper">
      {/* Project */}
      {isLoading && <ImageSkeleton height={350} width={500}/>}
      <img
        className="proj-image"
        src={props.image}
        alt="Project"
        style={{ display: isLoading ? 'none' : 'block' }}
        onLoad={() => setIsLoading(false)}
      />
      <div className="proj-selection"></div>
      <FontAwesomeIcon
        data-bs-toggle="modal"
        data-bs-target="#project-modal"
        className="proj-icon1"
        icon={solid("eye")}
        onClick={() =>
          props.setModalContents(
            props.image,
            props.modalContent[0],
            props.modalContent[1],
            props.skills
          )
        }
      />
      <FontAwesomeIcon
        className="proj-icon2"
        icon={solid("arrow-up-right-from-square")}
        onClick={() => window.open(props.link)}
      />
    </div>
  );
};
