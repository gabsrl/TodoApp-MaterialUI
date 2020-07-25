import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes'; // importing all the routes of the application
import store from './store';
function App() {
  return(
    <Provider store={store} >
      <Routes />
    </Provider>
  );
}

export default App;