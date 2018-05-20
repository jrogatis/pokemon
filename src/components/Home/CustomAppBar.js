import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#F9D11F',
  },
  flex: {
    '-webkit-text-stroke': '1px blue',
    color: 'white',
    'text-shadow':
      '2px  2px 0 #000,  -1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function CustomAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="display1" align="center" color="inherit" className={classes.flex}>
            My Adorable Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

CustomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomAppBar);
