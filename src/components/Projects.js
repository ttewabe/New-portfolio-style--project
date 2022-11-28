import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

const projects = [
{
    title: "Assist form filing",
    description: " N-400, N-600 & I-130, DV forms and others",
    imgUrl: projImg1,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
},
{
    title: "We Can Develope ",
    description: "Small business website, business-card,event-card and others",
    imgUrl: projImg3,
},
{
    title: "Assist form filing",
    description: " N-400, N-600 & I-130, DV forms and others",
    imgUrl: projImg1,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
},
{
    title: "We Can Develope ",
    description: "Small business website, business-card,event-card and others",
    imgUrl: projImg3,
}
];

    return (
        <section className="project1" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>OUR SERVICE</h2>
                                <p>Support/assist from service seekers, including N-400, N-600 & I-130 forms,DV form, tax-filing and others.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                    {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            /> 
                                        )
                                        })
                                    }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="section">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
                <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}