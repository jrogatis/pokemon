const styles = theme => ({
  root: {
    margin: '0 2%',
    padding: 0,
    fontSize: '100%',
    [theme.breakpoints.down('md')]: {
      fontSize: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '60%',
    },
    backgroundColor: '#FFF4A5FF',
  },
  gridList: {
    alignItems: 'center',
  },
  container: {
    width: `100%`,
    padding: '10% 2% 0 2%',
  },
  subTitle: {
    fontSize: '2em',
  },
});

export default styles;
