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
      urlDep: "https://proyecto-final-five-sepia.vercel.app/",
      urlRep: "https://github.com/damian-arrieta/react/tree/main/ProyectoFinal"
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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