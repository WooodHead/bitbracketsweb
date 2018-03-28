import React from "react";

class MetamaskInvalidNetwork extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Metamask is in an invalid network!
      </div>
    );
  }
}

MetamaskInvalidNetwork.propTypes = {

};

MetamaskInvalidNetwork.getInitialProps = ctx => {
  return {};
};

export default MetamaskInvalidNetwork;