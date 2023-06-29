import React from "react";

class ClassDiv extends React.Component {
  render() {
    return (
      <div>
        <h3>Class Bandymas</h3>
        <p>Party ower!</p>
        <button>{this.props.title}</button>
      </div>
    );
  }
}

export default ClassDiv;
