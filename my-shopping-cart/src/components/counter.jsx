import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    };


    render() { 
        return <React.Fragment>         
            <span> {this.formatCount()} </span>          
            <button> Increment </button>
        </React.Fragment>;
    }

    formatCount() {
        if(this.state.count === 0) {
           return 'Zero'
        } else {
            return this.state.count
        }        
    }


}
 
export default Counter;