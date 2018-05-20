import AppComponent from './AppComponent';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(AppComponent, div);
  ReactDOM.unmountComponentAtNode(div);
});
