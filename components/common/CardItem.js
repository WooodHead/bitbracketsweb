import React from 'react';
import Card, { CardContent, CardMedia, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

class CardItem extends React.Component {
    static propTypes = {
      item: PropTypes.object.isRequired,
    };

    constructor(props) {
      super(props);
    }

    render() {
      const style = {
        height: '130px',
        width: '300px',
        background: 'white',
        float: 'left',
        padding: '10px 0px 0px 10px',
        margin: '10px 10px 0px 20px',
      };

        // console.log('Props',this.props);
      return (
        <Card style={style} >
          <CardContent>
            <Typography variant="title">
              {this.props.item.contestName}
            </Typography>
            <br />
            <Typography variant="subheading">
                      Total Players:  {this.props.item.totalPlayer} Prize: {this.props.item.totalBalance} ETH
            </Typography>
          </CardContent>
        </Card>
      );
    }
}

export default CardItem;
