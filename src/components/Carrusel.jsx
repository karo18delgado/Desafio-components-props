import Carousel from 'react-bootstrap/Carousel';
import './carrusel.css';

export default function Carrusel() {
    return (
        <div>

            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 foto"
                        src="https://media.vandal.net/i/1706x960/2-2021/202121713362472_1.jpg.webp"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 foto"
                        src="https://prod-arc.lavoz.com.ar/resizer/45Eq23y4crpoW3hDO9cCbfS9ZH8=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/TIISKFRUNFAXTC2K6NUXE5UVGY.png"

                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 foto"
                        src="https://locosxlosjuegos.com/wp-content/uploads/2021/04/Little-Things-lede-1.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    )
}
