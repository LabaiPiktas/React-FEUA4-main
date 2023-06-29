import React from "react";
import "./Counter.css";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        count:0,
    };
}

increment = () => {
this.setState(prevState => ({
    count: prevState.count + 1,
}));
};
 decrement = () => {
    this.setState(prevState =>({
        count: prevState.count - 1,
    }));
 };

 render() {
    const { count} = this.state;

    return (
        <div>
            <h2>Class Counter</h2>
            <button onClick={this.decrement}>-</button>
            <span>{count}</span>
            <button onClick={this.increment}>+</button>
        </div>
    );
   }
 }

 export default ClassCounter;