export const AboutMe = () => {
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
    <section className="aboutme" id="aboutme">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="aboutme-bx wow zoomIn">
                        <h2 className='text-light'>Sobre Mi</h2>
                        <p className="text-light">Nací y vivo en la capital de la provincia de La Pampa, Argentina.<br /><br />
                        Soy una persona con amplia experiencia en ventas y logística, donde trabajé como asesor comercial durante más de cinco años, logrando cumplir con objetivos y metas establecidas. Además, asumí la importante responsabilidad de liderar la gestión de la logística en diversas empresas, lo que me permitió desarrollar habilidades como la organización, la planificación y la solución de problemas de manera efectiva.
                        <br /><br />
                        Sin embargo, recientemente he decidido dar un giro a mi carrera y enfocarme en mi verdadera pasión: la tecnología. Por ello, me encuentro inmerso en el mundo IT como Frontend Developer, adquiriendo conocimientos y habilidades en diferentes lenguajes y frameworks de Frontend para poder desarrollar soluciones tecnológicas innovadoras y atractivas para los clientes.
                        <br /><br />
                        A lo largo de mi trayectoria laboral, he aprendido a trabajar y comprender las necesidades del cliente, así como también a conocer sobre flujos y procesos, siempre en constante interacción con el equipo y con los clientes. Estas habilidades, sumadas a mi capacidad de trabajar en equipo, de adaptarme a nuevas situaciones y de ser proactivo, me convierten en un candidato ideal para integrar un grupo de trabajo profesional de desarrollo.
                        <br /><br />
                        Fuera del trabajo, disfruto de mi pasatiempo favorito: la música, y estoy comprometido con mantener una vida sana, lo que me permite contar con un equilibrio personal que considero esencial para el desempeño óptimo en cualquier ámbito profesional.
                      </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}