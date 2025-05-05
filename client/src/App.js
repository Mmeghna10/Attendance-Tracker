import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import AttendanceView from './components/AttendanceView';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/students" component={StudentList} />
          <Route path="/attendance" component={AttendanceView} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App; 