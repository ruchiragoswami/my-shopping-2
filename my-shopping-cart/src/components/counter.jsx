import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
        // imgUrl: 'https://picsum.photos/200',
        // tags : ['tag1', 'tag2', 'tag3'],
        
    };

    imgDisplay = {
        display: "block"
    }

    

    renderTags() {
        if (this.state.tags.length === 0) return <p> There are no tags!</p>

        return <ul> {this.state.tags.map(tag => <li key={tag}> {tag} </li>) } </ul>
    }

    handleIncrement = product =>  {
        console.log(product); 
        console.log("Increment clicked", this);
        this.setState({count: this.state.count + 1 })
    }

    render() { 
        return ( 
            <div> 
                
                <span  className={this.getBadgeClasses()}> {this.formatCount()} </span>          
                <button 
                    onClick={() =>  this.handleIncrement({id: 1})}  
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