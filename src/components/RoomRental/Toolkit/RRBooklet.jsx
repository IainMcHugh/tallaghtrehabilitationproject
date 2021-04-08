import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Page1 from '../../../images/room_rental_booklet/room_rental_booklet-1.jpg';
import Page2 from '../../../images/room_rental_booklet/room_rental_booklet-2.jpg';
import Page3 from '../../../images/room_rental_booklet/room_rental_booklet-3.jpg';
import Page4 from '../../../images/room_rental_booklet/room_rental_booklet-4.jpg';
import Page5 from '../../../images/room_rental_booklet/room_rental_booklet-5.jpg';
import Page6 from '../../../images/room_rental_booklet/room_rental_booklet-6.jpg';
import Page7 from '../../../images/room_rental_booklet/room_rental_booklet-7.jpg';
import Page8 from '../../../images/room_rental_booklet/room_rental_booklet-8.jpg';
import Page9 from '../../../images/room_rental_booklet/room_rental_booklet-9.jpg';
import Page10 from '../../../images/room_rental_booklet/room_rental_booklet-10.jpg';
import Page11 from '../../../images/room_rental_booklet/room_rental_booklet-11.jpg';
import Page12 from '../../../images/room_rental_booklet/room_rental_booklet-12.jpg';
import Page13 from '../../../images/room_rental_booklet/room_rental_booklet-13.jpg';
import Page14 from '../../../images/room_rental_booklet/room_rental_booklet-14.jpg';
import Page15 from '../../../images/room_rental_booklet/room_rental_booklet-15.jpg';
import Page16 from '../../../images/room_rental_booklet/room_rental_booklet-16.jpg';

const Icon = styled.button`
  cursor: pointer;
  border: none;
`;

function RRBooklet() {
  const [pageLeft, setPageLeft] = useState(false);
  const [pageRight, setPageRight] = useState(true);
  const [activePage, setActivePage] = useState(0);

  function renderSwitch() {
    switch (activePage) {
      case 0:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page1}
            alt="TRP Booklet"
          />
        );
      case 1:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page2}
            alt="TRP Booklet"
          />
        );
      case 2:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page3}
            alt="TRP Booklet"
          />
        );
      case 3:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page4}
            alt="TRP Booklet"
          />
        );
      case 4:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page5}
            alt="TRP Booklet"
          />
        );
      case 5:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page6}
            alt="TRP Booklet"
          />
        );
      case 6:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page7}
            alt="TRP Booklet"
          />
        );
      case 7:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page8}
            alt="TRP Booklet"
          />
        );
      case 8:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page9}
            alt="TRP Booklet"
          />
        );
      case 9:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page10}
            alt="TRP Booklet"
          />
        );
      case 10:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page11}
            alt="TRP Booklet"
          />
        );
      case 11:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page12}
            alt="TRP Booklet"
          />
        );
      case 12:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page13}
            alt="TRP Booklet"
          />
        );
      case 13:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page14}
            alt="TRP Booklet"
          />
        );
      case 14:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page15}
            alt="TRP Booklet"
          />
        );
      case 15:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page16}
            alt="TRP Booklet"
          />
        );
      default:
        return (
          <img
            className="booklet-page booklet-active"
            src={Page1}
            alt="TRP Booklet"
          />
        );
    }
  }

  const changePage = (e) => {
    if (e.target.innerText === 'keyboard_arrow_right') {
      setActivePage(activePage + 1);
    } else {
      setActivePage(activePage - 1);
    }
  };

  useEffect(() => {
    if (activePage === 0) {
      setPageLeft(false);
      setPageRight(true);
    } else if (activePage > 0 && activePage < 15) {
      setPageLeft(true);
      setPageRight(true);
    } else {
      setPageLeft(true);
      setPageRight(false);
    }
  }, [activePage]);

  return (
    <div className="aftercare-box">
      <h2>Rooms</h2>
      <div className="aftercare-who-list">
        <div className="booklet-container">
          {pageLeft && (
            <Icon>
              <i className="material-icons" onClick={changePage}>
                keyboard_arrow_left
              </i>
            </Icon>
          )}
          {renderSwitch()}
          {pageRight && (
            <Icon>
              <i className="material-icons" onClick={changePage}>
                keyboard_arrow_right
              </i>
            </Icon>
          )}
        </div>
      </div>
    </div>
  );
}

export default RRBooklet;
