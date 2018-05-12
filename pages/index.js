import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import Layout from '../components/Layout';
import App from '../components/App';
import Home from '../components/home/Home';
import ScrollToTop from 'react-scroll-up';
import Button from 'material-ui/Button';

import withRoot from '../components/HOC/md/withRoot';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        {/* <App /> */}

        <Home />
        <ScrollToTop showUnder={160}>
          <Button variant="fab" mini aria-label="edit" style={{ backgroundColor: '#E91E63', color: '#fff' }}>
            <i className="fas fa-arrow-up" />
          </Button>
        </ScrollToTop>
        {/* <IntlExample /> */}
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    // current: state.language.current,
    // languages: state.language.languages,
  };
}

const mapDispatchToProps = (dispatch) => ({
    // changeLanguage: bindActionCreators(changeLanguage, dispatch),
  });

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index),);
