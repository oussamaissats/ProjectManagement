import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Project(props) {
  const { project } = props;
  return (
    <Card>
      <Link to={`/project/${project.ref}`}>
        <img src={project.image} className="card-img-top" alt={project.title} />
      </Link>
      <Card.Body>
        <Link to={`/project/${project.ref}`}>
          <Card.Title>{project.title}</Card.Title>
        </Link>
        <Button>Show Tasks</Button>
      </Card.Body>
    </Card>
  );
}
export default Project;