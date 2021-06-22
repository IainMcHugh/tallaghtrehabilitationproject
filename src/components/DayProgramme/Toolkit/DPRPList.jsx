import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function DPRPList() {
  gsap.registerPlugin(ScrollTrigger);
  let dprRef = useRef(null);

  useEffect(() => {
    gsap.from(dprRef.current, {
      scale: 0,
      duration: 1,
      ease: 'power3',
      scrollTrigger: {
        trigger: dprRef.current,
        start: 'top 70%',
      },
    });
  }, []);
  return (
    <div className="about-box">
      <div className="dp-list-container">
        <ul ref={dprRef}>
          <li>Tips for Slips’</li>
          <li>Healthy Relationships</li>
          <li>Managing stress </li>
          <li>Managing dangerous and stressful situations</li>
          <li>Recovery Capital</li>
          <li>Trap doors</li>
          <li>First 90 days of Recovery</li>
        </ul>
      </div>
    </div>
  );
}

export default DPRPList;
