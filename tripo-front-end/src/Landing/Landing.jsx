import React, { Component } from 'react';
import axios from 'axios';

import Create from './Create/Create';
import Plans from './Plans/Plans';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'this result will be changed'
    }
  }

  handleOnClick = () => {
    axios.get('/api/hello')
    .then((response) => {
      this.setState({
        result: response.data.hello
      })
      console.log(response);
    })
  }
  render() {
    return (
      <div>
        {this.state.result}
        <button onClick={this.handleOnClick}>lets talk to backend</button>
        <Create />
        <Plans />
      </div>
    )
  }
}