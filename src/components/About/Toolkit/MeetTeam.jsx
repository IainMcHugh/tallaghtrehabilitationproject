// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const MeetTeam = ({ pImg, pName, pPosition, pDescription }) => {
//   gsap.registerPlugin(ScrollTrigger);

//   let tmRef = useRef(null);
//   useEffect(() => {
//     gsap.from(tmRef.current, {
//       x: -1000,
//       duration: 0.4,
//       opacity: 0,
//       ease: "power3",
//       scrollTrigger: {
//         trigger: tmRef.current,
//         start: "top center",
//       },
//     });
//   }, [tmRef.current]);
//   return (
//     <div className="team-member-container" ref={tmRef}>
//       <div className="team_image_container">
//         <img className="team-member-image" src={pImg} alt="Profile" />
//       </div>
//       <div className="team-member-text">
//         <h2>{pName}</h2>
//         <h4>{pPosition}</h4>
//         <h5>{pDescription}</h5>
//       </div>
//     </div>
//   );
// };

// export default MeetTeam;
