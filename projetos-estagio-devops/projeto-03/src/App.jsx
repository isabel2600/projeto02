import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store';

const App = () => {
  
  return (
    
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={2000} />
      </Provider>
    
    );
    
}
  
export default App;
  