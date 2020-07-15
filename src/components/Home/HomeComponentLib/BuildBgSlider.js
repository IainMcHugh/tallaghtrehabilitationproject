import React from 'react';
import Slider from "react-slick";

import '../Home.css';

function buildBgSlider() {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
        arrows: false,
      };

    return (
        // <div className="homepage-image-container">
        <div>
          <div className="background-slider">
            <Slider {...settings}>
              <div className="background-text">
                <div className="mission-statement-heading">
                  MISSION STATEMENT
                </div>
                <h4 className="mission-statement-body">
                  We believe in the advantage of rehabilitation within our
                  community, as addiction can happen in social & emotional
                  isolation, we are here to provide a supportive and nurturing
                  environment where participants are encouraged to work in an
                  open & therapeutic setting on their previous drug/alcohol use.
                </h4>
              </div>
              <div className="background-text">
                <h2 className="mission-statement-heading">VALUES</h2>
                <h4 className="mission-statement-body">
                  Tallaght Rehabilitation Project values and respects the rights
                  of all our participants to engage in a recovery process that
                  is positive, honest, and compassionate, dignified and also
                  meets the needs of our clients through progressive pathways
                  and emotional growth.
                </h4>
              </div>
              <div className="background-text">
                <h2 className="mission-statement-heading">
                  COMMITMENT AND GROWTH
                </h2>
                <h4 className="mission-statement-body">
                  The Tallaght Rehabilitation Project Organisation is committed
                  to providing quality services for people who are in recovery
                  from drug and alcohol addiction. Our organisation and
                  programmes strive to provide quality based services which are
                  evidence based and promote good corporate governance in order
                  to be a leader in local community based therapeutic
                  rehabilitation.
                </h4>
              </div>
            </Slider>
          </div>
        </div>
    )
}

export default buildBgSlider
