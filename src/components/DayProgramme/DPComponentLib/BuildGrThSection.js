import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function BuildGrThSection() {
  gsap.registerPlugin(ScrollTrigger);

  let gtpRef1 = useRef(null);
  let gtpRef2 = useRef(null);
  
  useEffect(() => {
    gsap.from(gtpRef1.current, {
      x: -2000,
      duration: 1,
      ease: "power3",
      scrollTrigger: {
        trigger: gtpRef1.current,
        start: "top center",
      },
    });
    gsap.from(gtpRef2.current, {
        x: -2000,
        duration: 1,
        ease: "power3",
        scrollTrigger: {
            trigger: gtpRef2.current,
            start: "top center"
        }
    });
  }, []);

  return (
    <div className="gtp-container">
      <div className="gtp-heading-container" ref={gtpRef1}>
        <h2>Monday</h2>
        <h2>Wednesday</h2>
        <h2>Friday</h2>
      </div>
      <div className="gtp-body-container" ref={gtpRef2}>
        <h4>11:00am - 12:30pm</h4>
        <h4>12:45am - 2:00pm</h4>
      </div>
    </div>
  );
}

export default BuildGrThSection;
