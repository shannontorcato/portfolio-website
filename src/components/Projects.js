import { Container, Row, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

//import Sonnet from '../../components/Sonnet';

export const Projects = () =>{
    
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg1",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg2",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg3",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg4",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: "projImg5",
        }
    ]; 
    return (
      <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, molestias sint odio accusamus fugit quia minima ullam nihil maxime mollitia fuga harum. Sequi perferendis expedita consequatur magni provident! Hic, vitae.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) =>{
                                        return (
                                            <p>{project.title}</p>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
      </section>  
    )
}