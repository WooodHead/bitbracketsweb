/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import classnames from 'classnames';

import { CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';

import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Linkify from 'react-linkify';

const styles = theme => ({
  card: {
    maxWidth: 600,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5em'
  },

  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  text: {
    fontWeight: '400',
    lineHeight: '24px',
    fontSize: '16px',
    color: 'rgb(143, 143, 143)',
    paddingBottom: '0.5em',
    '&:hover': {
      color: 'black'
    }
  },
  textPrueba: {
    color: 'black'
  },
  text2: {
    lineHeight: '24px',
    fontSize: '16px',
    color: 'rgb(143, 143, 143)',
    paddingBottom: '0.5em'
  }
});

class Qa extends React.Component {
  state = {};
  // usamos la pregunta como id unico y creamos una
  // property en el objeto state
  // { ['pregunta'] = true } para trackear si esta
  // extendida o no la pregunta por default las
  // preguntas son undefined asi que cuenta como falso.
  handleExpandClick = questionId => {
    const id = questionId;
    // console.log('current state', this.state[id]);
    const newValue = !this.state[id];
    const newState = { ...this.state, [id]: newValue };
    // console.log('new state', newState);
    this.setState(newState);
  };

  render() {
    const { classes, faqText } = this.props;
    // console.log('after state', this.state);
    return (
      <div className={classes.card}>
        {faqText.map(id => (
          <div key={Math.random()}>
            <Typography
              style={{
                // fontWeight: '500',
                lineHeight: '38.4px',
                fontSize: '32px',
                color: 'rgb(42, 40, 37)',
                paddingBottom: '0.5em'
              }}
            >
              {id.title}
            </Typography>
            <Divider />
            <CardActions
              onClick={() => this.handleExpandClick(id.question)}
              aria-expanded={this.state[id.question]}
              className={classes.actions}
              disableActionSpacing
            >
              <Typography
                className={classnames(classes.text, {
                  [classes.textPrueba]: this.state[id.question]
                })}
              >
                {id.question}
              </Typography>

              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state[id.question]
                })}
                onClick={() => this.handleExpandClick(id.question)}
                aria-expanded={this.state[id.question]}
                aria-label="Show more"
              >
                <i className="fas fa-caret-down" />
                {/* <ExpandMoreIcon /> */}
              </IconButton>
            </CardActions>
            <Collapse in={this.state[id.question]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className={classes.text2}>
                  {' '}
                  <Linkify>{id.answer}</Linkify>
                </Typography>
                <Typography className={classes.text2}>
                  <Linkify>{id.answer1}</Linkify>
                </Typography>
                <Typography className={classes.text2}>
                  <Linkify> {id.answer2} </Linkify>
                </Typography>
                {typeof id.answerbullet === 'object' ? (
                  <div>
                    {id.answerbullet.map((m, k) => (
                      <ul key={Math.random()} className={classes.text2}>
                        <li>
                          <Typography className={classes.text2}>
                            {m.bulletfirst}
                          </Typography>
                        </li>
                        <li>
                          <Typography className={classes.text2}>
                            {m.bulletsecond}
                          </Typography>
                        </li>
                        <li>
                          <Typography className={classes.text2}>
                            {m.bulletthird}
                          </Typography>
                        </li>
                      </ul>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Collapse>
          </div>
        ))}
      </div>
    );
  }
}

Qa.propTypes = {
  // classes: PropTypes.func.isRequired,
  faqText: PropTypes.array.isRequired
};

export default withStyles(styles)(Qa);
