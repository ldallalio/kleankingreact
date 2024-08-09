import React, { useEffect, useState } from "react";
import { NewContactForm } from "./NewContactForm";
import { Icon } from "@fluentui/react";


interface Props {
  images?: string[];
}

function Contact(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    if (props.images && currentIndex < props.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="contact">
      <div className="formContainer">
        <NewContactForm />
      </div>
      <div className="contactImage"
        style={{
          position: "relative",
        }}
      >
        {/* Left Button */}
        <button onClick={prevImage} disabled={currentIndex === 0}
          style={{
            position: "absolute",
            height:'100%',
            // left: 20,
            // top: 0,
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.41)',
            border: 'none',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          <Icon iconName="ChevronLeft" 
            style={{ fontSize: "2rem", 
             
            }}

          />
        </button>
        
        {props.images && (
          <img
            style={{ height: "fit-content" }}
            src={props.images[currentIndex]}
            alt="contact"
          />
        )}
        
        {/* Right Button */}
        <button
          onClick={nextImage}
          disabled={props.images && currentIndex === props.images.length - 1}
          style={{
            position: "absolute",
            height:'100%',
            right: 0,
            // top: 0,
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.41)',
            border: 'none',
            cursor: 'pointer',
            color: 'white'
          }}
        >
          <Icon iconName="ChevronRight" 
            style={{ fontSize: "2rem" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Contact;
