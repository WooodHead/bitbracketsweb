import React, { Component } from "react";
import SelectField from './common/SelectField';

class LanguageSelect extends Component {
    render() {
        return (
            <SelectField
                id="language"
                name="language"
                items={this.props.languages}
                value={this.props.current}
                onChange={this.props.onChange}
            />
        );
    }
}

export default LanguageSelect;