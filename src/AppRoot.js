import React, { PureComponent } from 'react';
import { persistStore } from 'redux-persist';

import { store, history } from './store';
import AppRouter from './router/AppRouter';

class App extends PureComponent {
  state = {
    isLoading: true,
  };

  UNSAFE_componentWillMount() {
    persistStore(store, this.handleRehydrationComplete);
  }

  handleRehydrationComplete = () =>
    this.setState({
      isLoading: false,
    });

  render() {
    return <AppRouter history={history} />;
  }
}

export default App;
