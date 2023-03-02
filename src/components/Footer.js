import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/imgs/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <Col size={12} sm={6}>
                <span className="tagline">
                    <img src={logo} alt="Damian Arrieta Logo" />
                </span>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
                <div class="container-footer">
                    <div class="social-icon-footer">
                        <a class="btn btn-outline-dark btn-floating m-1" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/damian-arrieta/"><i class="bi bi-linkedin text-dark"></i></a>
                        <a class="btn btn-outline-dark btn-floating m-1" target="_blank" rel="noreferrer" href="https://github.com/damian-arrieta"><i class="bi bi-github text-dark"></i></a>
                    </div>
                    <p className="text-dark">Damián Arrieta 2023. Todos los derechos reservados</p>
                </div>  
          </Col>
        </Row>
      </Container>
    </footer>
  )
}