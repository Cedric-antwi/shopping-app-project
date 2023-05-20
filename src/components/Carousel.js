import Carousel from 'react-bootstrap/Carousel';
import banner1 from './photos/banner1.jpeg'
import banner2 from './photos/banner2.png'
import banner3 from './photos/banner3.jpeg'


function CarouselBar(){
    return(
        <Carousel className='caro'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
            alt="First slide"
            height="300px"
            id = 'banner2'
          />
          <Carousel.Caption>
            <h3>Intelligent. Connected. Versatile</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="Second slide"
            height="300px"
            id = 'banner1'

          />
  
          <Carousel.Caption>
            <h3>Powerful. Innovative. Sleek</h3>
            {/* <p>Immersive. Stylish. High-fidelity </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mobirise.com/extensions/commercem4/assets/images/gallery02.jpg"
            alt="Third slide"
            height="300px"
            id='banner3'

          />
  
          <Carousel.Caption>
            <h3>Immersive. Stylish. High-fidelity </h3>
            {/* <p>
            Immersive. Stylish. High-fidelity 
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselBar