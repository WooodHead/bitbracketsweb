import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(process.env.GA_ID || 'UA-119719705-1');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

// <!-- Global site tag (gtag.js) - Google Analytics -->

// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119719705-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-119719705-1');
// </script>
