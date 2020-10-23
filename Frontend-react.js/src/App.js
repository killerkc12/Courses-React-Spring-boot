import React from 'react';
import './App.css';
import Header from './components/Header';
import {Button, Container, Row, Col} from "reactstrap";
import {ToastContainer,toast} from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course'
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import UpdateCourse from './components/UpdateCourse';
import Menus from './components/Menus';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function App() {
  const btnHandle = () => {
    toast.success("Done",{
      position:"top-center"
    })
  }
  return(
    <div>
      <Router>
      <ToastContainer/>
      <Container>
        <Header/>
         
        <Row>
          <Col md={4}>
          <Menus/>
          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact />
            <Route path="/add-course" component={AddCourse} exact />
            <Route path="/view-courses" component={AllCourses} exact />
            {/* <Route pathname="/view-courses/update:c"  component={UpdateCourse} exact/> */}
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  )
}

export default App;
