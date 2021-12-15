import React, { useState } from "react"
import { Carousel } from "react-bootstrap"
import Image1 from "./../homeComponents/images/car1.jpeg"
import Image2 from "./../homeComponents/images/new2.jpeg"
import Image3 from "./../homeComponents/images/car2.jpeg"

const carstyle = {
  height: '30rem'
}

const CarouselImage = () => {
const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex)
        };
      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image1}
                style={carstyle} 
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image2}
                style={carstyle} 
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                style={carstyle} 
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
      
export default CarouselImage