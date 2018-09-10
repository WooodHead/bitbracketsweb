import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    backgroundImage: 'url(../../../../static/art1.png)',

    backgroundRepeat: 'no-repeat',
    height: '750px',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: '600px'
    },
    [theme.breakpoints.up('xl')]: {
      height: '1100px'
    }
  },
  paper: {
    paddingTop: '10%',

    textAlign: 'center'
  },
  title: {
    color: '#e62565',

    fontWeight: '500',
    fontSize: '42px'
  },
  title2: {
    color: 'black',

    fontWeight: '500',
    fontSize: '42px'
  },
  subtitle: {
    color: '#e62565',

    fontWeight: '500',
    fontSize: '35px'
  },
  subtitle2: {
    color: 'black',

    fontWeight: '500',
    fontSize: '35px'
  },
  img: {
    marginBottom: '2%'
  },
  button: {
    color: '#fff',
    marginTop: '30px'
  },
  buttonBack: {
    color: 'black',
    marginTop: '30px'
  },
  socials: {
    marginTop: '30px'
  },

  paper1: {
    height: 140,
    width: 100,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  root1: {
    flexGrow: 1
  }
});

function ComingSoon(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <div className={classes.img}>
          <img
            src="/static/logo.png"
            alt="cryptocurrency-pool"
            width="70"
            height="70"
          />
        </div>
        <div>
          <span className={classes.title}>March Madness</span>
          &nbsp;&nbsp; <span className={classes.title2}>is Coming Soon</span>
        </div>
        <div>
          <span className={classes.subtitle2}>Under</span> &nbsp;&nbsp;
          <span className={classes.subtitle}>Construction </span>
        </div>
        <div className={classes.socials}>
          <Grid container className={classes.root1} spacing={16}>
            <Grid item xs={12}>
              <Grid
                container
                className={classes.demo}
                justify="center"
                spacing={8}
              >
                <Grid key={1} item>
                  <div className={classes.paper}>
                    <Button
                      href="https://www.facebook.com/BitBrackets-401862976892734/"
                      variant="fab"
                      color="primary"
                      aria-label="Add"
                      className={classes.button}
                    >
                      <i className="fab fa-facebook-f" />
                    </Button>
                  </div>
                </Grid>
                <Grid key={2} item>
                  <div className={classes.paper}>
                    <Button
                      href="https://github.com/Bitbrackets/bitbrackets_smart_contracts"
                      variant="fab"
                      color="primary"
                      aria-label="Add"
                      className={classes.button}
                    >
                      <i className="fab fa-github" />
                    </Button>
                  </div>
                </Grid>
                <Grid key={3} item>
                  <div className={classes.paper}>
                    <Button
                      href="https://t.me/bitbrackets"
                      variant="fab"
                      color="primary"
                      aria-label="Add"
                      className={classes.button}
                    >
                      <i className="fab fa-telegram" />
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>

        <div className={classes.text}>
          <Button href="/" className={classes.buttonBack}>
            {' '}
            <span>
              <i className="material-icons">arrow_back_ios</i>
            </span>
            BACK
          </Button>
        </div>
        <div />
      </div>
    </div>
  );
}

ComingSoon.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ComingSoon);
