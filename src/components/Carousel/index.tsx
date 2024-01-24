"use client";
import { Children } from "react";
import MUICarousel from "react-material-ui-carousel";

const Carousel = ({ children = [] }) => (
  <MUICarousel>
    {Children.map(children, (child) => (
      <div className="flex justify-center max-h-120 overflow-hidden">
        {child}
      </div>
    ))}
  </MUICarousel>
);
export default Carousel;
