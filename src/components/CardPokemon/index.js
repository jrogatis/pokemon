import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { push } from 'react-router-redux';
import { store } from '../../store';

const styles = {
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    title: { color: '#fff' },
  },
  img: {
    width: '200px',
  },
  tile: {
    margin: '2%',
    width: 180,
    height: 180,
    '&:hover': {
      cursor: 'pointer',
    },
    align: 'center',
  },
};

const CardPokemon = props => {
  const {
    pokemon: { name, url },
    classes,
  } = props;

  const handleClick = () => {
    store.dispatch(push(name));
  };
  // eslint-disable-next-line
  const pokemonId = /(?<=\/)([0-9])+(?=\/)/g.exec(url)[0];
  const sprint = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  return (
    <GridListTile key={name} className={classes.tile} onClick={handleClick}>
      <img src={sprint} alt={name} className={classes.img} />
      <GridListTileBar
        title={name}
        titlePosition="bottom"
        actionPosition="left"
        className={classes.titleBar}
      />
    </GridListTile>
  );
};

CardPokemon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardPokemon);
