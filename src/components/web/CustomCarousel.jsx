import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../../assets/images/banner.jpg";

function CustomCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="store-carousel">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-in">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CarouselImage}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CarouselImage}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={CarouselImage}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomCarousel;
