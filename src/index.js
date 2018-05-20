import ReactDOM from 'react-dom';
import AppComponent from './AppComponent';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const render = () => {
  ReactDOM.render(AppComponent, document.getElementById('root'));
};

render();

if (module.hot && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  module.hot.accept('./AppRoot', () => {
    render(require('./AppRoot').default);
  });
}

registerServiceWorker();
