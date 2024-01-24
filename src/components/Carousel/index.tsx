"use client";
import { Children } from "react";
import MUICarousel from "react-material-ui-carousel";

type CarouselProps = {
  children: React.ReactElement | React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children = [] }) => (
  <MUICarousel>
    {Children.map(children, (child) => (
      <div className="flex justify-center max-h-120 overflow-hidden">
        {child}
      </div>
    ))}
  </MUICarousel>
);
export default Carousel;
