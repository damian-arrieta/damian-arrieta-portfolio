import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import angular from '../assets/imgs/angular.png';
import react from '../assets/imgs/atom.png';
import css from '../assets/imgs/css-3.png';
import docker from '../assets/imgs/docker.png';
import git from '../assets/imgs/git.png';
import html from '../assets/imgs/html.png';
import js from '../assets/imgs/js.png';
import node from '../assets/imgs/node-js.png';
import sass from '../assets/imgs/sass.png';
import ts from '../assets/imgs/typescript.png';
import bootstrap from '../assets/imgs/bootstrap.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className='text-dark'>Skills</h2>
                        <p>Estas son las habilidades que he desarrollado en mi carrera y que me permiten abordar de manera efectiva los desafíos en mi área de trabajo.
                        <br></br>
                        Además, estoy siempre dispuesto a aprender nuevas habilidades y a seguir formándome para estar al día con las tecnologías necesarias.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={js} alt="JavaScript" />
                                <h5 className='text-dark'>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="React" />
                                <h5 className='text-dark'>React</h5>
                            </div>
                            <div className="item">
                                <img src={angular} alt="Angular" />
                                <h5 className='text-dark'>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="HTML" />
                                <h5 className='text-dark'>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="CSS" />
                                <h5 className='text-dark'>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={sass} alt="SASS" />
                                <h5 className='text-dark'>SASS</h5>
                            </div>
                            <div className="item">
                                <img src={ts} alt="TypeScript" />
                                <h5 className='text-dark'>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Bootstrap" />
                                <h5 className='text-dark'>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Node" />
                                <h5 className='text-dark'>Node</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Git" />
                                <h5 className='text-dark'>Git</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Docker" />
                                <h5 className='text-dark'>Docker</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}