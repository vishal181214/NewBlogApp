import React from 'react';

let Mydata = {
    data: 'Higher Order Component'
}

import React, { Component } from 'react'

let Comp =  class Hoc extends Component {
    componentDidMount(){
        this.setState({
            data:Mydata.data
        });
    }
  render() {
    return (
      <Hoc {...this.props} {...this.state}/>
    )
  }
}

import React, { Component } from 'react'

class HocTwo extends Component {
  render() {
    return (
      <div>{this.props.data}</div>
    )
  }
}

export default Comp(HocTwo);

