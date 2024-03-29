import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function List() {
  gsap.registerPlugin(ScrollTrigger);
  let dpRef = useRef(null);

  useEffect(() => {
    gsap.from(dpRef.current, {
      scale: 0,
      duration: 1,
      ease: 'power3',
      scrollTrigger: {
        trigger: dpRef.current,
        start: 'top 70%',
      },
    });
  }, []);

  return (
    <div className="about-box">
      <div className="dp-list-container">
        <ul ref={dpRef}>
          <li>Reality therapy / Choice Therapy</li>
          <li>Cognitive Behavioural Therapy</li>
          <li>Rational Emotive Therapy</li>
          <li>Motivational Interviewing</li>
          <li>Therapeutic Group Process</li>
          <li>Relapse Prevention Module / Workshops</li>
          <li>Career guidance</li>
          <li>Individual Learner Plan</li>
          <li>Recovery Capital</li>
        </ul>
      </div>
    </div>
  );
}

export default List;
