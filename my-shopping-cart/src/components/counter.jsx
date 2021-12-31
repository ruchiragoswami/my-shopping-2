import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        imgUrl: 'https://picsum.photos/200'
    };

    imgDisplay = {
        display: "block"
    }

    render() { 
        return ( 
            <div> 
                <h1 style= {{fontSize: 35}}> Heading 1 </h1>
                <img style={this.imgDisplay} src={this.state.imgUrl} />         
                <span  className={this.getBadgeClasses()}> {this.formatCount()} </span>          
                <button className='btn btn-secondary btn-sm'> Increment </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count ===0 ? "warning" : "primary";
        return classes; 
        // if (this.state.count === 0) {
        //     classes += 'badge-warning'
        // } else {
        //     classes += 'badge-primary'
        // }
        // return classes;
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