import React, { PureComponent } from 'react';

export default (loader, collection) =>
  class AsyncComponent extends PureComponent {
    constructor(props) {
      super(props);
      this.state = { Component: AsyncComponent.Component };
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    async componentDidMount() {
      if (!this.state.Component) {
        loader().then(Component => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }

    render() {
      if (this.state.Component) {
        return <this.state.Component {...this.props} {...collection} />;
      }

      return <div />;
    }
  };
