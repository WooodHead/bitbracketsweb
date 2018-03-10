import React, { Component } from 'react';
import Head from './Header';
import Nav from './Nav';

class Layout extends Component {
    render() {
        return (
            <div>
                <Head title="Home" />
                <Nav />
                {this.props.children}
            </div>
        );
    };
}

export default Layout;