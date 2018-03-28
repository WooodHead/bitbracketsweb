import React, { Component, Children } from 'react'
import Icon from './Icon';


class Loader extends Component {

  state = {
    loading: true
  }

  constructor(props, context) {
    super(props)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
    if(nextProps.loading !== nextState.loading) {
      this.setState({
        loading: nextProps.loading
      });
    }
  }

  render() {
      return(
        <main>
          <h1>⚙️</h1>
          <p>Loading dapp...</p>
        </main>
      )
  }
}

export default Loader;