import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import SigninScreen from '../Screens/SigninScreen';
import ProjectScreen from '../Screens/ProjectScreen';
import HomeScreen from '../Screens/HomeScreen';
function App() {

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Project Management</Navbar.Brand>
              </LinkContainer>
            
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/project/:ref" element={<ProjectScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;