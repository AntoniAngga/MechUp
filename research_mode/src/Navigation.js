import React, { Component } from 'React';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import App from './App';

class Navigation extends React.Component {
  render() {
    console.log(this.props);
    return (
      <App navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.navReducers
});

export default connect(mapStateToProps)(Navigation);
