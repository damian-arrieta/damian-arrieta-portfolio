import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import boy from '../assets/imgs/boy.png';
import CV from '../assets/DamianArrieta.pdf';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Frontend Developer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
        } else {
        setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={boy} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={6}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h1>{`Hola! Soy Damián Arrieta`}
                        <br />
                            <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Frontend Developer"]'>
                            <span className="wrap">{text}</span>
                            </span>
                        </h1>
                        <p>Soy una persona con experiencia en ventas y logística, ahora estoy dentrándome en el mundo IT como Frontend Developer.
                        <br />
                        Durante más de cinco años, trabajé como asesor comercial, cumpliendo objetivos y metas establecidas. También tuve la responsabilidad de la gestión de la logística en diferentes empresas.
                        <br />
                        Recientemente, he decidido cambiar de carrera y enfocarme en mi pasión por la tecnología. Adquiriendo  conocimientos en diferentes lenguajes y frameworks de Frontend.
                        <br />
                        Creo que mi experiencia me han hecho desarrollar habilidades de organización, planificación y solución de problemas, como también trabajar y comprender las necesidades del cliente, conocer sobre flujos y procesos y estar en constante interacción con el equipo y con los clientes, habilidades que son de gran importancia para un grupo de trabajo profesional.
                        <br />
                        Fuera del trabajo disfruto de la música y estoy comprometido con mantener una vida sana. Considero que mi amplia experiencia y equilibrio personal me hacen un candidato ideal para un equipo de desarrollo. </p>
                        <a href={ CV } download>
                            <button className="text-light" style={{ fontSize: '35px' }}>Descarga mi CV <i class="bi bi-file-earmark-arrow-down-fill"></i></button>
                        </a>
                    </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    )
}