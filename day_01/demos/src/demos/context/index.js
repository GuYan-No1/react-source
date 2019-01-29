import React from 'react';
import PropTypes from 'prop-types';
const {Provider,Consumer}=React.createContext('defalut');

class Parent extends React.Component{
    state={
      childContext:'123',
      newContext:'456'
    }

    getChildContext(){
      return {value: this.state.childContext}
    }
    render(){
      return (
        <React.Fragment>
          <div></div>

        </React.Fragment>
      )
    }
}