import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { Router } from 'react-router-dom';
import history from './router/history';
import App from './components/App';
import '../scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);

// registerServiceWorker(); deixar comentado enquanto está em desenvolvimento
