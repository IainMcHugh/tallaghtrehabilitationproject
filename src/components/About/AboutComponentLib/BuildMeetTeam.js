import React, {useEffect, useRef} from "react";
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function BuildMeetTeam(props) {
  gsap.registerPlugin(ScrollTrigger);
  
  let tmRef = useRef(null);
  let dir;
  props.isEven ? dir = 1000 : dir = -1000;
  useEffect(() => {
    gsap.from(tmRef.current, {
      x: dir,
      duration: 0.8,
      opacity: 0,
      ease: "power3",
      scrollTrigger: {
        trigger: tmRef.current,
        start: "top center",
      }
    })
  }, [])
  return (
    <div className="team-member-container" ref={tmRef}>
      <div className="team_image_container">
        <img
          className="team-member-image"
          src={props.pImg}
          alt="Profile"
        />
      </div>
      <div className="team-member-text">
        <h2>{props.pName}</h2>
        <h4>{props.pPosition}</h4>
        <h5>{props.pDescription}</h5>
      </div>
    </div>
  );
}

export default BuildMeetTeam;
