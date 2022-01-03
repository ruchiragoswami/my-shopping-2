import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: this.props.value    
    };    

    handleIncrement = () =>  {
        // console.log(product); 
        console.log("Increment clicked", this);
        this.setState({count: this.state.count + 1 });
    }

    render() { 
        // console.log('props', this.props);
        return ( 
            <div> 
                
                <span  className={this.getBadgeClasses()}> {this.formatCount()} </span>          
                <button 
                    onClick={this.handleIncrement}  
                    className='btn btn-secondary btn-sm'> Increment 
                </button>
                
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

function hanclde(){ console.log("hello")}

 
export default Counter;