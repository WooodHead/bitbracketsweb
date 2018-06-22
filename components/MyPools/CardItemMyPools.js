/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import Card, { CardContent } from 'material-ui/Card';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { Router } from '../../routes';

const styles = {
  root: {
    height: '130px',
    width: '330px',
    background: 'white',
    float: 'left',
    padding: '0px 0px 0px 0px',
    margin: '25px 10px 10px 25px',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  },

};

const styleSpan = {
  color: 'grey',
  fontsize: '9px',
};
const messages = defineMessages({
  youAreAdminMyPool: {
    id: 'youAreAdminMyPool',
    defaultMessage: 'You are the Admin',
    description: 'You are the Admin',
  },
  totalPlayerMyPool: {
    id: 'totalPlayerMyPool',
    defaultMessage: 'Total Players: ',
    description: 'Total Players',
  },
  prizeMyPool: {
    id: 'prizeMyPool',
    defaultMessage: 'Prize:',
    description: 'Prize:',
  },
});
function CardItemMyPools(props) {
  const {
    classes, item, userAddress, intl,
  } = props;
  return (
    <Card className={classes.root} >
      <CardContent >
        <div role="button" onClick={() => Router.pushRoute(`/pools/${item.address}`)}>
          <Typography variant="subheading">
            <b>{item.name}&nbsp;&nbsp;</b>
            { userAddress === item.manager && (
            <span style={styleSpan}> {intl.formatMessage(messages.youAreAdminMyPool)}</span>
                )}
          </Typography>
          <br />
          <Typography variant="subheading">
            <span>{intl.formatMessage(messages.totalPlayerMyPool)} {item.totalPlayers} &nbsp;&nbsp; {intl.formatMessage(messages.prizeMyPool)} {item.totalBalance} ETH </span>
          </Typography>
        </div>
      </CardContent>


    </Card>
  );
}
CardItemMyPools.defaultProps = {
  userAddress: PropTypes.string,
};
CardItemMyPools.propTypes = {
  item: PropTypes.object.isRequired,
  userAddress: PropTypes.string,
  classes: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default (injectIntl(withStyles(styles)(CardItemMyPools)));
