import React from 'react';
import Card, { CardContent, CardMedia, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { Router } from '../../routes';

const style = {
  height: '130px',
  width: '330px',
  background: 'white',
  float: 'left',
  padding: '0px 0px 0px 0px',
  margin: '25px 10px 10px 25px'
};

const styleSpan = {
  color: 'grey',
  fontsize: '9px'
};
class CardItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    userAddress: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={style}>
        <CardContent>
          <div
            onClick={() =>
              Router.pushRoute(`/pools/${this.props.item.address}`)
            }
          >
            <Typography variant="subheading">
              <b>
                {this.props.item.name}
                &nbsp;&nbsp;
              </b>
              {this.props.userAddress === this.props.item.manager && (
                <span style={styleSpan}>You are the Admin</span>
              )}
            </Typography>
            <br />
            <Typography variant="subheading">
              <span>
                Total Players: {this.props.item.totalPlayers} &nbsp;&nbsp;
                Prize: {this.props.item.totalBalance} ETH{' '}
              </span>
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default CardItem;
