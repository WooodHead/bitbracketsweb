/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initGA, logPageView } from '../utils/analytics';


import Head from './Header';
import Navigation from './Navigation/Navigation';

import initMessages from '../intl/';

import Footer from '../components/Footer/Footer';

import LanguageSelect from '../components/LanguageSelect';
import { changeLanguage, fetchLanguages } from '../actions/languageActions';
import withRoot from '../components/HOC/md/withRoot';

addLocaleData([...en, ...es]);
const messages = initMessages();

// console.log("messages", messages);

class Layout extends Component {
  componentWillMount() {
    this.props.fetchLanguages();
  }
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    const language = this.props.current;

    return (
      <IntlProvider locale={language} messages={messages[language]}>
        <div>
          <Head title="BitBrackets" />

          <Navigation
            languageSelect={
              <LanguageSelect
                languages={this.props.languages} // {["en", "es"]}
                current={language}
                onChange={value => this.props.changeLanguage(value)}
              />
            }
          />

          {this.props.children}

          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    current: state.language.current,
    languages: state.language.languages,
  };
}

const mapDispatchToProps = dispatch => ({
  changeLanguage: bindActionCreators(changeLanguage, dispatch),
  fetchLanguages: bindActionCreators(fetchLanguages, dispatch),
});

Layout.propTypes = {
  languages: PropTypes.array.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  fetchLanguages: PropTypes.func.isRequired,
};
export default withRoot(connect(mapStateToProps, mapDispatchToProps)(Layout));
