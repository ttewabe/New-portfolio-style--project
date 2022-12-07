import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { sliderData} from '../shared/sliderData';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Slider = () =>  {
    const [ currentSlide, setCurrentSlide] = useState(0);
    const [show,setShow] = useState(false);
    const [show1,setShow1] = useState(false);
    const [show2,setShow2] = useState(false);
    const [date,setDate] = useState(new Date());

    const slideLength =sliderData.length;
    const autoScroll = true;
    let slideInterval;
    let intervalTime =10000;
    const nextSlide =() => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0: currentSlide + 1)
    };

    function auto() {
        slideInterval =setInterval(nextSlide, intervalTime )
    }
    useEffect(() => {
        setCurrentSlide(0)
    },[])

    useEffect(() => {
        if (autoScroll){
            auto();
        }
        return ()=> clearInterval(slideInterval)
    },[currentSlide])

    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return (
        <section className="slider" id="slider" >
            <Container className="project2">
                <h1 className="project1">PROJECTS</h1>
                <Row>
                    <div className="slider1">
                        {sliderData.map((slide, index) =>{
                        return(
                            <div className={index === currentSlide ? "slide current": "slide"} key = {index}>
                                {index === currentSlide && (
                                    <>
                                        <img className="content1" src={slide.image} alt="slide"/>
                                        <div className="content">
                                            <h3>{slide.heading}</h3>
                                            <p>{slide.desc}</p> <hr/>
                                            <button className="readmore" onClick={()=> setShow(!show)}>WEBSITES <ArrowRightCircle size={25} className="arrow" /></button>
                                            <button size="lg" className="--btn btn-primary" onClick={()=> setShow(!show)}><a href="https://tour.ttadege.com" target="_blank">Tour Guid</a></button>
                                            <button size="lg" className="--btn btn-primary" onClick={()=> setShow(!show)}><a href="https://www.mb.ttadege.com" target="_blank">Time Tax</a></button>
                                            <button size="lg" className="--btn btn-primary" onClick={()=> setShow(!show)}><a href="https://teff.ttadege.com" target="_blank">Coffee Affection</a></button>
                                            {/*<button size="lg" className="--btn btn-primary" onClick={()=> setShow1(!show1)}>Date & Time</button>*/}
                                        </div>  
                                    </>
                                )}
                            </div>
                        )
                    })}
                    </div>
                </Row>
            </Container>
        </section>
    )
}
