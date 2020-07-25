import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddTodoAction, EditTodoAction } from '../../store/TodoAction';
import { useHistory, useParams} from 'react-router-dom';

import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  TextField,
  Typography,
  Snackbar,
} from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';
import { CloseRounded } from '@material-ui/icons';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AddTodo(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  let { todoId } = useParams();
  const allTodos = useSelector(state => state.todos); 
  let selectedTodo = null;

  if(todoId) {
    selectedTodo = allTodos.find((item) => {
      return item.id == todoId;
    });
  } 
  const [onAddTodoTitle, setOnAddTodoTitle] = useState(selectedTodo == null ? '' : selectedTodo.title );
  const [onAddTodoDescription, setOnAddTodoDescription] = useState(selectedTodo == null ? '' : selectedTodo.descr);

  const [snackbar, setSnackbar] = useState({
    duration: 5000,
    message: '',
    messageType: '',
    status: false,
  });

  const handleAddNewTodo = () => {
    if(onAddTodoTitle === '' || onAddTodoDescription === '') {
      setSnackbar({
        ...snackbar,
        status: true,
        messageType: 'error',
        message: 'Todos os campos são obrigatórios. Preencha todos eles.'
      });
      return;
    }

    let newTodo = {
      title: onAddTodoTitle,
      descr: onAddTodoDescription,
      date: new Date().toString(),
    }

    if(selectedTodo == null) {
      newTodo = {...newTodo, id: Math.random() * 100000};
      dispatch(AddTodoAction(newTodo));
      setSnackbar({...snackbar, status: true, message: 'Todo Adicionado com sucesso!', messageType: 'success'});
    } else {
      newTodo = {...newTodo, id: selectedTodo.id};
      dispatch(EditTodoAction(newTodo));
      setSnackbar({...snackbar, status: true, message: 'Todo editado com sucesso!', messageType: 'success'});
    }
    
    setOnAddTodoTitle('');
    setOnAddTodoDescription('');
  }

  const onCloseSnackbar = () => {
    setSnackbar({...snackbar, status: false})
  }
  return(
    <Grid container>
      <AppBar position="static" style={{position: 'relative'}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => history.goBack()} >
            <CloseRounded />
          </IconButton>
          <Typography style={{flex: 1}}>{ selectedTodo ? 'Edit Todo': 'Add todo'}</Typography>
          <Button 
            autoFocus 
            color="inherit" 
            onClick={handleAddNewTodo}>
              SUBMMIT
          </Button>
        </Toolbar>
        </AppBar>
          <TextField
            required
            autoFocus
            margin="dense"
            id="outlined-required"
            variant="outlined"
            label="Todo Title"
            type="text"
            fullWidth
            style={{marginBottom: '20px'}}
            value={onAddTodoTitle}
            onChange={(ev) => setOnAddTodoTitle(ev.target.value)}
          />

          <TextField
            required
            autoFocus
            multiline
            id="outlined-multiline-static"
            variant="outlined"
            label="Todo description"
            rows={20}
            style={{ display: 'flex', width: '100%'}}
            value={onAddTodoDescription}
            onChange={(ev) => setOnAddTodoDescription(ev.target.value)} 
          />    

      <Snackbar open={snackbar.status} autoHideDuration={snackbar.duration} onClose={onCloseSnackbar}>
        <Alert onClose={onCloseSnackbar} severity={snackbar.messageType}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default AddTodo;