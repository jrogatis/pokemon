import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import { loadPokemons, paginatePokemon } from '../../actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#F9D11F',
  },
  flex: {
    flex: 1,
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

const CustomAppBar = props => {
  const { classes, paginatePokemon } = props;
  const handleClick = ev => {
    paginatePokemon();
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="display1" align="center" color="inherit" className={classes.flex}>
            My Adorable Pokedex
          </Typography>
          <Button color="secondary" onClick={handleClick}>
            Load More ?
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

CustomAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(null, { paginatePokemon, loadPokemons })(withStyles(styles)(CustomAppBar));
