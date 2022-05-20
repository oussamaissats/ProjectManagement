import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Button from 'react-bootstrap/Button';

import { Helmet } from 'react-helmet-async';

import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { getError } from '../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, project: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProjectScreen() {
  const params = useParams();
  const { ref } = params;


  const [{ loading, error, project }, dispatch] = useReducer(reducer, {
    project: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/projects/ref/${ref}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [ref]);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
   
      <Row>
        <Col md={6}>
          <img
            classtitle="img-large"
            src={project.image}
            alt={project.title}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{project.title}</title>
              </Helmet>
              <h1>{project.title}</h1>
            </ListGroup.Item>
             <ListGroup.Item>
              Description:
              <p>{project.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                
      
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Show Tasks</Button>
                    </div>
                  </ListGroup.Item>
            
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ProjectScreen;