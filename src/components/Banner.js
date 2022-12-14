import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowUpCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [show,setShow] = useState(false);
  const toRotate = ["Software Developer", "Web Designer", "UI/UX Designer", "Assist in our communities"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : " "}>
                  <h1>{`Hi! I'm Tewabe`} </h1><br></br> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Web Designer", "UI/UX Designer","Assist in our communities"]'><span className="wrap">{text}</span></span>
                    <p>I'm passionate about bringing both the technical and visual aspects of digital products to life.User experience with strong organization, time management & communication skills. I'm able to develope small business website, business-card,event-card. Support/assist from service seekers, including N-400, N-600 & I-130 forms,DV form, tax-filing and others. </p>
                    {show?<p>I have a MSc Degree in Engineering, and Full Stack Website and Mobile App Developer.I'm happiest when I'm creating, learning, exploring and thinking about how to make things better.</p>:null}
                    <button className="readmore" onClick={()=> setShow(!show)}>Read More <ArrowUpCircle size={25} className="arrow" /></button>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
}