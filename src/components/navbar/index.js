import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

const NavBar = (props) => {
  return (
    <AppBar position="static" style={{marginLeft: 0/*'220px'*/}} >
      <Toolbar>
        <Typography>TodoApp</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;