import React, {Component} from 'react';
import Head from './Header';
import Nav from './Nav';
import { FormattedDate } from 'react-intl';

class Layout extends Component {
    render() {
        return (
          <div>
              <Head title="Home" />
              <Nav />
              {this.props.children}
              <div>
                <FormattedDate value={Date.now()} />
              </div>
          </div>
        );
    };
}

export default Layout;