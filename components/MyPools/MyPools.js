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
    const {pools} = this.props;

    if (!pools.pools) {
      return null;
    }
    return pools.pools.map(poolsItems => (
      <CardItem key={poolsItems.address} item={poolsItems} userAddress={pools.address} />
    ));
  }

  render() {
    const style = {
      height: '100px', width: '100%', margin: '20px auto', padding: '20px 0px', align: 'center',
    };
    const style2 = {
      height: '100px',
      width: '200px',
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
          <Button href="/contest/Russia2018/pools/new" variant="raised" color="primary">
                          Create New Pool
          </Button>
        </div>
      </div>
    );
  }
}

export default MyPools;
