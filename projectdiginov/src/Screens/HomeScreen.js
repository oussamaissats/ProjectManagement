
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { Helmet } from 'react-helmet-async';
import Project from '../Components/Project';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, projects: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function HomeScreen() {
  const [{ loading, error, projects }, dispatch] = useReducer(logger(reducer), {
    projects: [],
    loading: true,
    error: '',
  });
  // const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/projects');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      // Projects(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Project Management</title>
      </Helmet>
        

      <h1>List Projects</h1>
      <div className="projects">
        {loading ? (
        
          <LoadingBox />
        ) : error ? (
         
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {projects.map((project) => (
              <Col key={project.ref} sm={6} md={4} lg={3} className="mb-3">
                <Project project={project}></Project>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;