import React, { Component } from 'react';
// import React from 'react'; 

class Counter extends React.Component {
    // state = {
    //     count: this.props.counter.value    
    // };    



    // handleIncrement = () =>  {
    //     // console.log(product); 
    //     console.log("Increment clicked", this);
    //     this.setState({count: this.state.count + 1 });
    // }







    render() { 
        // console.log('props', this.props);
        return ( 
            <div> 
                
                <span  className={this.getBadgeClasses()}> {this.formatCount()} </span>          
                <button 
                    onClick={ () => this.props.onIncrement(this.props.counter)}  
                    className='btn btn-secondary btn-sm'> Increment 
                </button>

                <button onClick={ () => this.props.onDelete(this.props.counter.id)} 
                        className="btn btn-danger btn-sm m-2"> 
                    Delete              
                </button>

                
            </div>
        );
    }

    

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value ===0 ? "warning" : "primary";
        return classes; 
        // if (this.state.count === 0) {
        //     classes += 'badge-warning'
        // } else {
        //     classes += 'badge-primary'
        // }
        // return classes;
    }

    formatCount() {
        if(this.props.counter === 0) {
           return 'Zero'
        } else {
            return this.state.count
        }        
    }


}

// function handle(){ console.log("hello")}

 
export default Counter;


/*
removed local state
local state of component removed. This ensures we have a single source of truth
*/