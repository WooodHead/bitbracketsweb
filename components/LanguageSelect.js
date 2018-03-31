import React, { Component } from "react";
import SelectField from './common/SelectField';

class LanguageSelect extends Component {
    itemList() {
        return this.props.languages.map(language => {
            return { id: language.code, name: language.name };
        })
    }

    render() {
        return (
            <SelectField
                id="language"
                name="language"
                items={this.itemList()}
                value={this.props.current}
                onChange={this.props.onChange}
            />
        );
    }
}

export default LanguageSelect;