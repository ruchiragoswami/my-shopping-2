import React, { Component } from 'react';
// import React from 'react';
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

    handleIncrement = counter => {
        console.log(counter); 
    }



    handleDelete = counterId => { 
        console.log("Event Handler called- delete", counterId);

        const counters = this.state.counters.filter(c => c.id !== counterId );
        this.setState({counters});
    };

    handleReset  = () => {
        const newCounters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({newCounters}); 
    }

    render() { 
        return (
            <div>
                <button 
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>


               {this.state.counters.map( counter => 
                // <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete}/>)}
                <Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    counter={counter} />
               )}
                
            </div>
        );
    }
}
 
export default Counters ;