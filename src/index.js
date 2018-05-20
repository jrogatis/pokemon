import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';

import App from './AppRoot';
import { store } from './store';
import theme from './theme';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const render = AppComponent => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <AppComponent />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  module.hot.accept('./AppRoot', () => {
    render(require('./AppRoot').default);
  });
}

registerServiceWorker();
