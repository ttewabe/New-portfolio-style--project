import meter1 from "../assets/img/front-end.png";
import meter2 from "../assets/img/HTML.png";
import meter3 from "../assets/img/CSS.png";
import meter4 from "../assets/img/JS.png";
import meter5 from "../assets/img/jQUARY.png";
import meter6 from "../assets/img/BOOTSTRAP.png";
import meter7 from "../assets/img/JAVA.png";
import meter8 from "../assets/img/PYTHON.png";
import meter9 from "../assets/img/REACT.png";
import meter10 from "../assets/img/REDUX.png";
import meter11 from "../assets/img/ANGULAR.png";
import meter12 from "../assets/img/NODE.png";
import meter13 from "../assets/img/EXPRESS.png";
import meter14 from "../assets/img/MONGO.png";
import meter15 from "../assets/img/SASS.png";
import meter16 from "../assets/img/back-end.jpeg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
const responsive = {
superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
},
desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
},
tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
},
mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
}
};

return (
    <section className="skill" id="skills">
        <div className="container skill-1">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My toolbox for Full Stack Development magic employs a full compliment of technologies!.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>JQUERY</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>PYTHON</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>REDUX</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>ANGULAR</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>NODE JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>EXPRESS</h5>
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Image" />
                                <h5>MONGO DB</h5>
                            </div>
                            <div className="item">
                                <img src={meter15} alt="Image" />
                                <h5>SASS</h5>
                            </div>
                            <div className="item">
                                <img src={meter16} alt="Image" />
                                <h5>Back-End</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
    )
}