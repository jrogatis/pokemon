import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

class Loading extends PureComponent {
  render() {
    const { classes, containerClassName, fullScreen = false, centered = false, style } = this.props;

    if (fullScreen) {
      return (
        <div className={classNames(classes.container, containerClassName)}>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }

    if (centered) {
      return (
        <div className={classNames(classes.centeredContainer, containerClassName)}>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }

    return <CircularProgress className={classes.progress} size={50} style={style} />;
  }
}

const styles = theme => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  centeredContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default withStyles(styles)(Loading);
