
import './HomeSlider.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import image1 from '../Assets/images/img55.jpg';
import image2 from '../Assets/images/img22.jpg';
import image3 from '../Assets/images/img33.jpg';
import WordRotate from "./WordRotate.js";


function HomeSlider() {
  return (
    <div id='Homeslider'>
          <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src={image1} className='d-block w-100'  id='images1' alt='...' />
        <MDBCarouselCaption>
      
          <WordRotate
      className="text-4xl font-bold text-black h-600 dark:text-white"
      words={["Setting Benchmarks in", "Healthcare Since 1985"]}
    />
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={image2} className='d-block w-100' id='images2' alt='...' />

        <MDBCarouselCaption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={image3} className='d-block w-100' id='images3' alt='...' />
        <MDBCarouselCaption>
          <h1>Third slide label</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
    
    </div>
  )
}

export default HomeSlider
