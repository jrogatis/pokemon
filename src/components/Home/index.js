import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import GridList from '@material-ui/core/GridList';

import { isFetchingPokemons, requestPokemons } from '../../actions';
import CardPokemon from '../CardPokemon';
import styles from './indexStyles';
import CustomAppBar from './CustomAppBar';
import Loading from '../Loading';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameToSearch: '',
      paginateTo: 40,
      paginateFrom: 0,
    };
  }

  componentDidMount() {
    this.props.isFetchingPokemons();
    this.props.requestPokemons();
  }

  handleChange = name => event => {
    const {
      target: { value },
    } = event;
    this.props.requestPokemon(value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes, pokemons } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <CustomAppBar />
        <Grid
          container
          direction="column"
          wrap="nowrap"
          alignItems="center"
          className={classes.container}
          justify="center"
          spacing={4}
        >
          <Typography variant="display1" className={classes.subTitle} paragraph>
            Discover all about your adorable pokemon!
          </Typography>
          <GridList spacing={50} className={classes.gridList}>
            {!pokemons.isLoadingPokemons ? (
              pokemons.pokemons.list.map(pokemon => (
                <CardPokemon pokemon={pokemon} key={pokemon.name} />
              ))
            ) : (
              <div>
                <Loading />
              </div>
            )}
          </GridList>
        </Grid>
      </Paper>
    );
  }
}

FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ pokemons }) => ({
  pokemons,
});

export default connect(mapStateToProps, {
  requestPokemons,
  isFetchingPokemons,
})(withStyles(styles)(FrontPage));
