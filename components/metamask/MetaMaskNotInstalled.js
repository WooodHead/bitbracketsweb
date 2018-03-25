import React from "react";

class MetamaskNotInstalled extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Metamask is not installed!
      </div>
    );
  }
}

MetamaskNotInstalled.propTypes = {

};

MetamaskNotInstalled.getInitialProps = ctx => {
  return {};
};

export default MetamaskNotInstalled;