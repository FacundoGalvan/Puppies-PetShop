import { Carousel } from 'react-bootstrap';
import ofertaguau  from '../img/carousel1.png'
import oldprince  from '../img/carousel2.png'
import sieger  from '../img/carousel3.png'

export const MainCarousel = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ ofertaguau }
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ oldprince }
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={ sieger }
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    )
}