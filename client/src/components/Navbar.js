import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Attendance Tracker
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Dashboard
        </Button>
        <Button color="inherit" component={RouterLink} to="/students">
          Students
        </Button>
        <Button color="inherit" component={RouterLink} to="/attendance">
          Attendance
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 