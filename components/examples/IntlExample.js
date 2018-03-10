import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

// id prop must be unique
// text for each language should be added to Intl/messages

class IntlExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name       : 'bitbracket',
            unreadCount: 1000,
        };
    }

    render() {
        const {name, unreadCount} = this.state;

        return (
            <p>
                <FormattedMessage
                    id="welcome"
                    defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
                    values={{name: <b>{name}</b>, unreadCount}}
                />
            </p>
        );
    }
}


export default IntlExample;





