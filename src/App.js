import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actionCreators/CatActions';
import { Cats } from './containers';
import './styles/app.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchCats()
    }

    render() {
      return (
          <>
            <h1>Welcome to our Cats Page!</h1>
            <h3 id="refresh" onClick={this.props.fetchCats}>fetch!</h3>
            <Cats />
          </>
      )
    }
  }

export default connect(null, { fetchCats })(App);