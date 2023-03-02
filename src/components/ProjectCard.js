import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, urlDep, urlRep }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <div className="proj-links">
            <a className='btn btn-outline-dark btn-floating m-1' target="_blank" rel="noreferrer" href={urlDep}>ir al deploy</a>
            <a className='btn btn-outline-dark btn-floating m-1' target="_blank" rel="noreferrer" href={urlRep}>Ir al repositorio</a>
          </div>
          <div className="proj-description">
            <span className="text-dark">{description}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}