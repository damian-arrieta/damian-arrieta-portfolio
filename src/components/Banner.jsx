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
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum((loopNum) => loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    const shouldAnimate = screenWidth >= 425;

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
            <Col xs={12} md={6} xl={6}>
                <TrackVisibility>
                    <div>
                        <img src="https://i.postimg.cc/P59b5M5N/imgcv-removebg.png" alt="Damian Arrieta"/>
                    </div>
                </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={6}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h1>{`Hola! Soy Damián Arrieta`}
                        <br />
                            {shouldAnimate && <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Frontend Developer"]'>
                            <span className="wrap">{text}</span>
                            </span>}
                            {!shouldAnimate && <span className="wrap">{toRotate[0]}</span>}
                        </h1>
                        <div className='container-btn'>
                            <a href={ CV } download>
                                <button class="text-light" style={{ fontSize: '35px' }}>Descarga mi CV <i class="bi bi-file-earmark-arrow-down-fill"></i></button>
                            </a>
                            <div class="social-icon">
                                <a class="btn btn-outline-light btn-floating m-1" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/damian-arrieta/"><i class="bi bi-linkedin text-light"></i></a>
                                <a class="btn btn-outline-light btn-floating m-1" target="_blank" rel="noreferrer" href="https://github.com/damian-arrieta"><i class="bi bi-github text-light"></i></a>
                            </div>
                        </div>
                    </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    )
}