import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { requestPokemon, isFetchingPokemon } from '../../actions';
import Loading from '../Loading';

const styles = theme => ({
  root: {
    margin: '0, 2%',
    padding: '2%',
    backgroundColor: '#FFF4A5FF',
    height: '100vh',
  },
  title: {
    textTransform: 'capitalize',
  },
  properties: {
    border: '1px solid #ababab',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      fontSize: '80%',
    },
  },
});

class PokemonDetails extends PureComponent {
  constructor(props) {
    super(props);
    props.isFetchingPokemon();
    props.requestPokemon(props.match.params.name);
  }
  render() {
    const {
      classes,
      pokemon: { isLoadingPokemon },
    } = this.props;

    if (!isLoadingPokemon) {
      const {
        pokemon: {
          pokemon: { name, sprites, stats, weight, height, base_experience },
        },
      } = this.props;
      return (
        <Paper elevation={4} className={classes.root}>
          <Grid container direction="column" justify="center" alignItems="center">
            <Typography
              align="center"
              variant="display2"
              gutterBottom
              className={classes.title}
              wrap="nowrap"
            >
              {name}
            </Typography>
            <Grid container direction="row" justify="center" alignItems="flex-start">
              {Object.keys(sprites).map(key => (
                <img key={key} src={sprites[key]} alt={sprites[key]} />
              ))}
            </Grid>
            <Grid container direction="row" justify="center" alignItems="flex-start">
              {[{ Weight: weight }, { Height: height }, { 'Base Exp': base_experience }].map(
                stat => (
                  <Grid item key={Object.keys(stat)[0]} xs={4}>
                    <Typography className={classes.properties} align="center">
                      {Object.keys(stat)[0]}: <span>{Object.values(stat)[0]}</span>
                    </Typography>
                  </Grid>
                ),
              )}
            </Grid>
            <Grid container direction="row" justify="center" alignItems="flex-start">
              {stats.map(stat => (
                <Grid key={stat.stat.name} item xs={4}>
                  <Typography className={classes.properties} align="center">
                    {stat.stat.name}: {stat.base_stat}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      );
    }
    return <Loading />;
  }
}
PokemonDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ pokemon }) => ({
  pokemon,
});

export default connect(mapStateToProps, {
  isFetchingPokemon,
  requestPokemon,
})(withStyles(styles)(PokemonDetails));
