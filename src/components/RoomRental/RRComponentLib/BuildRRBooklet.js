import React, { useState, useEffect } from "react";

import Page1 from "../../../images/room_rental_booklet/room_rental_booklet-1.jpg";
import Page2 from "../../../images/room_rental_booklet/room_rental_booklet-2.jpg";
import Page3 from "../../../images/room_rental_booklet/room_rental_booklet-3.jpg";
import Page4 from "../../../images/room_rental_booklet/room_rental_booklet-4.jpg";
import Page5 from "../../../images/room_rental_booklet/room_rental_booklet-5.jpg";
import Page6 from "../../../images/room_rental_booklet/room_rental_booklet-6.jpg";
import Page7 from "../../../images/room_rental_booklet/room_rental_booklet-7.jpg";
import Page8 from "../../../images/room_rental_booklet/room_rental_booklet-8.jpg";
import Page9 from "../../../images/room_rental_booklet/room_rental_booklet-9.jpg";
import Page10 from "../../../images/room_rental_booklet/room_rental_booklet-10.jpg";
import Page11 from "../../../images/room_rental_booklet/room_rental_booklet-11.jpg";
import Page12 from "../../../images/room_rental_booklet/room_rental_booklet-12.jpg";
import Page13 from "../../../images/room_rental_booklet/room_rental_booklet-13.jpg";
import Page14 from "../../../images/room_rental_booklet/room_rental_booklet-14.jpg";
import Page15 from "../../../images/room_rental_booklet/room_rental_booklet-15.jpg";
import Page16 from "../../../images/room_rental_booklet/room_rental_booklet-16.jpg";

function BuildRRBooklet() {
  const [pageLeft, setPageLeft] = useState(0);
  const [pageRight, setPageRight] = useState(1);
  const [activePage, setActivePage] = useState(0);

  function renderSwitch() {
    switch (activePage) {
      case 0:
        return <img className="booklet-page booklet-active" src={Page1} />;
      case 1:
        return <img className="booklet-page booklet-active" src={Page2} />;
      case 2:
        return <img className="booklet-page booklet-active" src={Page3} />;
      case 3:
        return <img className="booklet-page booklet-active" src={Page4} />;
      case 4:
        return <img className="booklet-page booklet-active" src={Page5} />;
      case 5:
        return <img className="booklet-page booklet-active" src={Page6} />;
      case 6:
        return <img className="booklet-page booklet-active" src={Page7} />;
      case 7:
        return <img className="booklet-page booklet-active" src={Page8} />;
      case 8:
        return <img className="booklet-page booklet-active" src={Page9} />;
      case 9:
        return <img className="booklet-page booklet-active" src={Page10} />;
      case 10:
        return <img className="booklet-page booklet-active" src={Page11} />;
      case 11:
        return <img className="booklet-page booklet-active" src={Page12} />;
      case 12:
        return <img className="booklet-page booklet-active" src={Page13} />;
      case 13:
        return <img className="booklet-page booklet-active" src={Page14} />;
      case 14:
        return <img className="booklet-page booklet-active" src={Page15} />;
      case 15:
        return <img className="booklet-page booklet-active" src={Page16} />;
    }
  }

  const changePage = (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText === "keyboard_arrow_right") {
      setActivePage(activePage + 1);
      console.log(activePage);
    } else {
      setActivePage(activePage - 1);
    }
  };

  useEffect(() => {
    if (activePage == 0) {
      console.log("activePage = 0");
      setPageLeft(0);
      setPageRight(1);
    } else if (activePage > 0 && activePage < 15) {
      console.log("activePage = 1-14");
      setPageLeft(1);
      setPageRight(1);
    } else {
      console.log("activePage = 15");
      setPageLeft(1);
      setPageRight(0);
    }
  });

  return (
    <div class="aftercare-box">
      <h2>Rooms</h2>
      <div class="aftercare-who-list">
        <div className="booklet-container">
          {pageLeft ? (
            <i class="material-icons" onClick={changePage}>
              keyboard_arrow_left
            </i>
          ) : (
            <div></div>
          )}

          {renderSwitch()}
          {pageRight ? (
            <i class="material-icons" onClick={changePage}>
              keyboard_arrow_right
            </i>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuildRRBooklet;
