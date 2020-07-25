import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const Todo = (props) => {
  return (
    <Card variant="outlined" style={{...props.style, maxWidth: '300px', marginBottom: '10px'}}>
      <CardContent>
        <Typography variant="h6">{props.title}</Typography>
        <Typography color="textSecondary" gutterBottom>{props.date}</Typography>
        <Typography>{props.description}</Typography>
      </CardContent>

      <CardActions>
        <Button size= "small">View</Button>
        <Button size= "small" onClick={props.onEditTodo}>Edit</Button>        
        <Button size= "small">Delete</Button>
      </CardActions>
    </Card>
  );
}

export default Todo;