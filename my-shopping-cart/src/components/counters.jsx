import React, { Component } from 'react';
import Counter from "./counter";


class Counters  extends React.Component {
    state = {
        counters : [ 
            { id :1, value: 5}, 
            { id :2, value: 0},
            { id :3, value: 0},
            { id :4, value: 0},
            { id :5, value: 0},
        ]
    }

    handleDelete = () => { 
        console.log("Event Handler called- delete");
    };

    render() { 
        return (
            <div>
               {this.state.counters.map( counter => 
                <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete}/>)}
                
            </div>
        );
    }
}
 
export default Counters ;