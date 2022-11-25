import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { sliderData} from '../shared/sliderData';


export const Slider = () =>  {
    const [ currentSlide, setCurrentSlide] = useState(0);
    const [show,setShow] = useState(false);
    const [show1,setShow1] = useState(false);
    const [date,setDate] = useState(new Date());

    const slideLength =sliderData.length;
    const autoScroll = true;
    let slideInterval;
    let intervalTime =8000;
    const nextSlide =() => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0: currentSlide + 1)
    };

    function auto() {
        slideInterval =setInterval(nextSlide, intervalTime)
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
            <section >
            <Container>
            <Row>
            <h1>OUR SERVICE</h1></Row>
            <Row>
            <div className="slider">
                {sliderData.map((slide, index) =>{
                    return(
                        <div className={index === currentSlide ? "slide current": "slide"} key = {index}>
                            {index === currentSlide && (
                                <>
                                    <img className="content1" src={slide.image} alt="slide"/>
                                    <div className="content">
                                        <h3>{slide.heading}</h3>
                                        <p>{slide.desc}</p> <hr/>
                                            {show?<h3 className="btn-primary1">The IRS encourages everyone to have all the information they need in hand ... More than 160 million individual tax returns for the 2021 tax ...</h3>:null}
                                            {show1?<h3 className="btn-primary1"> Time : {date.toLocaleTimeString()} <br/> Date : {date.toLocaleDateString()}</h3>: null}
                                        <button size="lg" className="--btn btn-primary" onClick={()=> setShow(!show)}>GET MORE</button>
                                        <button size="lg" className="--btn btn-primary" onClick={()=> setShow1(!show1)}>Date & Time</button>
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
