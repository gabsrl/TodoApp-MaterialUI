import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom'

// importing pages
import Main from './pages/main';
import AddTodo from './pages/add_todo';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/add-todo" component={AddTodo}  exact />
        <Route path="/:todoId" component={AddTodo}  exact />
      </Switch>
    </BrowserRouter>
    );
}

//        
