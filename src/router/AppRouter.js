import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Home from '../components/Home';
import NoMatch from '../containers/pages/404';
import PokemonDetails from '../components/PokemonDetails';

class AppRouter extends PureComponent {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:name" component={PokemonDetails} />
          <Route component={NoMatch} />
        </Switch>
      </ConnectedRouter>
    );
  }
}
export default AppRouter;
