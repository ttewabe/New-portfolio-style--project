import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import tour from "../assets/img/tour1.png";
import taxFilling from "../assets/img/timetax2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

const projects = [
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
},
{
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
},
];

return (
<section className="project" id="project">
    <Container>
    <Row>
        
        
                        <div className='col-md-5  image-container-t'>
                            <img src={tour} style={{maxWidth: '1000px', width: '100%', height:'100%'}}  alt="logo"/>
                        </div>
                        <div className='col-md-5 card-content-t'>
                            <div className='card-title-tt'>
                                <h2>Ethio Tour</h2>
                            </div>
                            <div className='card-title-t'>
                                <h4>This is a published Tour Guid Website. If you want to travel to Ethiopia and needed my website to help you navigate the best place. The tool I used for this project, HTML, CSS ,JAVA, Bootstrap.</h4>
                            </div>
                        </div>
                        <div className='col-md-2 btn-t'>
                            <button>
                                <a href="https://tour.ttadege.com" target="_blank">
                                Website
                                </a>
                            </button>
                        </div>
                    
                        <div className='col-md-5 image-container-t'>
                                <img src={taxFilling}  alt=""/>
                        </div>
                        <div className='col-md-5 card-content-t'>
                            <div className='card-title-tt'>
                                <h2>Time Tax</h2>
                            </div>
                            <div className='card-title-t'>
                                <h4>In this digital era, having an online presence is not just an advantage it’s an absolute necessity.My website as the mirror of my service such as Tax filing, Auditing and other accounting service. The tool I used for this project, HTML, CSS ,JAVA SCRIPT, REACT, and REDUX.</h4>
                            </div>
                        </div>
                        <div className='btn-t col-md-2'>
                            <button>
                                <a href="https://www.mb.ttadege.com" target="_blank">
                                Website
                                </a>
                            </button>
                        </div>
                    </Row>
            <Row>
        <Col size={12}>
        <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <h2>OUR SERVICE</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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