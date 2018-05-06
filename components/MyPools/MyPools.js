import React from 'react';
import CardItem from '../common/CardItem';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia, CardText } from 'material-ui/Card';
import Button from 'material-ui/Button';

class MyPools extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPools() {
    return this.props.pools.map(poolsItems => (
      <CardItem key={poolsItems.contestName} item={poolsItems} />
    ));
  }

  render() {
    const style = {
      height: '100px', width: '100%', margin: '20px auto', padding: '20px 0px',
    };
    const style2 = {
      height: '100px',
      width: '40%',
      margin: 'auto',
      padding: '30px 0px',
      clear: 'left',
    };

    return (
      <div>
        <div id="page-wrap" style={style}>
            {this.renderPools()}
          </div>
        <div style={style2}>
            <Button href="/create-pool" variant="raised" color="primary">
                        Create New Pool
              </Button>
          </div>
      </div>

    );
  }
}

export default MyPools;
