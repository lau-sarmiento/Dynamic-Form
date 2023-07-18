import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";
import imgCourse1 from "../../assets/img/youtube.jpeg";
import imgCourse2 from "../../assets/img/spotify.jpeg";
import imgCourse3 from "../../assets/img/deezer.jpeg";

import CardService from "./CardService/CardService";

export default function Services() {
    
    const servicesArray = [
        {
            title: "Video Clips Course",
            subtitle: "Se creo en Estados Unidos durante Febrero de 2005",
            image: imgCourse1,
            footer: "Go to the course ➡️",
            link: "#!",
        },
        {
            title: "Playlist Course",
            subtitle: "Se creo en Estocolmo durante abril de 2006",
            image: imgCourse2,
            footer: "Go to the course ➡️",
            link: "#!",
        },
        {
            title: "Streaming Course",
            subtitle: "Se creó en Francia durante junio de 2006",
            image: imgCourse3,
            footer: "Go to the course ➡️",
            link: "#!",
        },
    ];

    return (
        <div className="services p-4 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className="text-center">Services</h2>
                        <h4 className="pb-3 text-center">
                            Check some of my services that i did
                        </h4>
                        <Row xs={1} md={3} className="g-4 mt-4">
                            {servicesArray.map((service, index) => (
                                <CardService service={service} key={index} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
