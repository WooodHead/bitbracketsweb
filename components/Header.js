import React from 'react';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';
import NextHead from 'next/head';
import { string } from 'prop-types';

const messages = defineMessages({
  shortDescription: {
    id: 'shortDescription',
    defaultMessage: 'The platform for creating prediction pools for sporting events.',
    description: ''
  },
  description: {
    id: 'description',
    defaultMessage: 'BitBrackets is a smart contract driven platform for creating prediction pools for sporting events based on Ethereum blockchain.',
    description: ''
  }
});

const bitbrackets = 'BitBrackets.io';
const defaultUrl = 'https://bitbrackets.io';
const defaultImage = 'http://res.cloudinary.com/bitbrackets/image/upload/v1527219334/home_bitbrackets.png';
const defaultFavicon = '/static/favicon.ico';

const Header = props => {
  const { title, description, favicon, url, image, intl} = props;
  let currentTitle = bitbrackets + ' | ' + intl.formatMessage(messages.shortDescription);

  currentTitle = title ? title + ' | ' + currentTitle : currentTitle;
  const currentDescription = description || intl.formatMessage(messages.description);
  const currentUrl = url || defaultUrl;
  const currentImage = image || defaultImage;
  const currentFavicon = favicon || defaultFavicon;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription}/>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href={currentFavicon} />
      <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" />
  
    {/* Hotjar Tracking Code for https://bitbrackets.io. */}
    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:895402,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>

    {/* Schema.org markup for Google+ */}
    <meta itemprop="name"         content={bitbrackets}/>
    <meta itemprop="description"  content={currentDescription}/>
    <meta itemprop="image"        content={currentImage}/>
  
    { /* <!-- Twitter Card data --> */}
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@BitBrackets"/>
    <meta name="twitter:title" content={currentTitle}/>
    <meta name="twitter:description" content={currentDescription}/>
    <meta name="twitter:creator" content="@BitBrackets"/>
    {/* Twitter summary card with large image must be at least 280x150px */}
    <meta name="twitter:image:src" content={currentImage}/>

    {/* <!-- Open Graph data --> */}
    <meta property="og:title" content={currentTitle} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={currentUrl} />
    <meta property="og:image" content={currentImage} />
    <meta property="og:description" content={currentDescription} />
    <meta property="og:site_name" content={bitbrackets} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="article:published_time" content={new Date().toISOString()} />
    <meta property="article:modified_time" content={new Date().toISOString()} />
    
    {
    /*
    <meta property="article:section" content="Article Section" />
    <meta property="article:tag" content="Article Tag" />
    */
    }

    
    </NextHead>
  );
};

Header.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

//export default Header;
export default (injectIntl(Header));