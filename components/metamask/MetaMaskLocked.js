import React from "react";

class MetamaskLocked extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        Metamask is locked!
      </div>
    );
  }
}

MetamaskLocked.propTypes = {

};

MetamaskLocked.getInitialProps = ctx => {
  return {};
};

export default MetamaskLocked;