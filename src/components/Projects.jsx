import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ImgProj1 from '../assets/imgs/proyecto-dw.jpg'
import ImgProj2 from '../assets/imgs/proyecto-js.jpg'
import ImgProj3 from '../assets/imgs/proyecto-react.jpg'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Proyecto Final Desarrollo Web",
      description: "HTML, CSS, SASS, BOOTSTRAP",
      imgUrl: ImgProj1,
      urlDep: "https://damian-arrieta.github.io/proyecto-final/",
      urlRep: "https://github.com/damian-arrieta/proyecto-final"
    },
    {
      title: "Proyecto Final JavaScript",
      description: "HTML, CSS, JAVASCRIPT",
      imgUrl: ImgProj2,
      urlDep: "https://damian-arrieta.github.io/proyectoFinalJavaScript/",
      urlRep: "https://github.com/damian-arrieta/proyectoFinalJavaScript"
    },
    {
      title: "Proyecto final React",
      description: "REACT, JAVASCRIPT, HTML, CSS, MATERIAL UI, BOOTSTRAP, FIREBASE",
      imgUrl: ImgProj3,
      urlDep: "https://e-commerce-sepia-chi.vercel.app/",
      urlRep: "https://github.com/damian-arrieta/e-commerce"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p className="text-light">¡Bienvenido a mi sección de proyectos! Aquí encontrarás una muestra de mis trabajos como desarrollador. Desde los primeros y pequeños hasta los mas actuales para que puedas ver mi crecimiento. Mi objetivo es encontrar soluciones creativas a los desafíos y desarrollar productos efectivos para los usuarios finales.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}