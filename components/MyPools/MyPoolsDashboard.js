/* eslint-disable react/forbid-prop-types */

import React from 'react';
import _ from 'lodash';
import { injectIntl, defineMessages } from 'react-intl';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import withRedux from 'next-redux-wrapper';
import { fetchPools } from '../../actions';


// import CardItem from '../common/CardItem';
import CardItemMyPools from './CardItemMyPools';
import withMetaMask from '../HOC/withMetaMask';
import { initStore } from '../../store';


// import Typography from 'material-ui/Typography';
// import Card, { CardContent, CardMedia, CardText } from 'material-ui/Card';

const messages = defineMessages({
  CreateNewPool: {
    id: 'CreateNewPool',
    defaultMessage: 'Create New Pool',
    description: 'Create New Pool',
  },

});
class MyPoolsDashboard extends React.Component {
  componentDidMount() {
    this.props.fetchPools(this.props.defaultAccount);
  }


  renderPools() {
    console.log('este se pools el dayshoard : ', this.props.pools.length);
    const { pools } = this.props;

    if (!pools || pools.length === 0) {
      return <h1>You don´t have pools</h1>;
    }
    return pools.pools.map(poolsItems => (

      <CardItemMyPools key={poolsItems.address} item={poolsItems} userAddress={pools.address} />
    ));
  }

  render() {
    const { intl } = this.props;
    const style = {
      height: '100px', width: '100%', margin: '20px auto', padding: '20px 0px', align: 'center', paddingBottom: '400px',
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
            {intl.formatMessage(messages.CreateNewPool)}
          </Button>
        </div>
      </div>
    );
  }
}

MyPoolsDashboard.propTypes = {
  fetchPools: PropTypes.func.isRequired,
  defaultAccount: PropTypes.any.isRequired,
  pools: PropTypes.any.isRequired,
  intl: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {

    pools: state.poolR.pools,
    defaultAccount: state.defaultAccount,
  };
}
const mapDispatchToProps = dispatch => ({
  fetchPools: bindActionCreators(fetchPools, dispatch),
});
export default (withRedux(initStore, mapStateToProps, mapDispatchToProps))(withMetaMask(injectIntl(MyPoolsDashboard)));
