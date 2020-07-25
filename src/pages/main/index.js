import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { 
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Dialog,
  DialogContent,
  TextField,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {SubjectRounded, ExitToAppRounded, AccountBoxRounded, CloseRounded, AddCircleRounded} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from '../../components/navbar';
import Todo from '../../components/todo';

import { SetTodoToEditAction } from '../../store/TodoAction';

const DRAWER_WIDTH = 240;
const useStyles = makeStyles((theme) =>({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Main(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const todos = useSelector(state => state.todos);
  const classes = useStyles();
  const profile_image = 'https://images.unsplash.com/photo-1487573884658-a5d3c667584e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=692&q=80';

  const [onAddTodoTitle, setOnAddTodoTitle] = useState('');
  const [onAddTodoDescription, setOnAddTodoDescription] = useState('');

  const handleEditTodo = (todo) => {
    history.push(`/${todo.id}`);
  }

  return (
    <Grid container>
      <NavBar />
      {/*<Grid item xs={3}>
      <Drawer 
        className={classes.drawer}
        variant='permanent'
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <ListItem style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <img src={profile_image}  style={{width: '100px', height: '100px', borderRadius: '50px'}}/>
            <ListItemText primary="Alessandra Oliveira" />
          </ListItem>
        </List>
        <Divider />
      <List>
        <ListItem>
          <ListItemIcon><SubjectRounded /></ListItemIcon>
          <ListItemText primary="Todo"/>
        </ListItem>
        
        <ListItem>
          <ListItemIcon><AccountBoxRounded /></ListItemIcon>
          <ListItemText primary="Account"/>
        </ListItem>
        
        <ListItem>
          <ListItemIcon><ExitToAppRounded /></ListItemIcon>
          <ListItemText primary="Logout"/>
          </ListItem>
      </List>

      <Divider />
    </Drawer>
  </Grid>*/}

      <Grid item xs={12} style={{display: 'flex', position: 'relative', justifyContent: 'center', alignContent: 'space-between',  flexWrap: 'wrap', padding: '10px'}}>
      {
        todos.map((item) => (
          <Todo
            key={`${item.id}`}
            title={item.title}
            date={item.date}
            description={item.descr}
            style={{marginRight: '10px'}}
            onEditTodo={() => {handleEditTodo(item)}}
          />
        ))
      }
      </Grid>
      <IconButton 
        style={{position: 'absolute', left: '90%', top: '90%'}}
        onClick={() => history.push('/add-todo')}
      >
        <AddCircleRounded  color="primary" />
      </IconButton>

  </Grid>
  );
}

export default Main;
