/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectField from './common/SelectField';


class LanguageSelect extends Component {
  itemList() {
    return this.props.languages.map(language => ({ id: language.code, name: language.name }));
  }

  render() {
    return (
      <SelectField
        name="language"
        items={this.itemList()}
        value={this.props.languages}
        onChange={this.props.onChange}
      />
    );
  }
}
LanguageSelect.propTypes = {
  languages: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

};
export default LanguageSelect;
