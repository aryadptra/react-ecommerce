import React from "react";
import LayoutWeb from "../layouts/LayoutWeb";
import CarouselImage from "../assets/images/banner.jpg";
import { Carousel } from "react-bootstrap";
import CustomCarousel from "../components/web/CustomCarousel";

function Home() {
  return (
    <>
      <LayoutWeb>
        <CustomCarousel />
      </LayoutWeb>
    </>
  );
}

export default Home;
