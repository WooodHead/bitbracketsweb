import Layout from '../components/Layout';
import App from '../components/App';
import {addLocaleData, IntlProvider} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';

// This example app only uses English. A fake `"en-UPPER"` locale is created so translations can be emulated.
addLocaleData(enLocaleData);
addLocaleData({
    locale: 'en-UPPER',
    parentLocale: 'en',
});

//const {messages} = window.App;
// messages={messages}
//locale={navigator.language}
export default () => (
  <IntlProvider>
    <Layout>
      <App/>
    </Layout>
  </IntlProvider>
)
