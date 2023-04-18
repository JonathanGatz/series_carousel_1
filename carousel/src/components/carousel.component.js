import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
      <div className="carousel-wrapper">
          <Carousel infiniteLoop useKeyboardArrows autoPlay>
              <div>
                  <img src="../image_1.jpg" />
              </div>
              <div>
                  <img src="../image_2.jpg" />
              </div>
              <div>
                  <img src="../image_3.jpg" />
              </div>
          </Carousel>
      </div>
  );
}
