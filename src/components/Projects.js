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
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
      </section>  
    )
}