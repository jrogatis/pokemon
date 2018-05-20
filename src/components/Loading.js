import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

class Loading extends PureComponent {
  render() {
    const { classes, style } = this.props;

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
