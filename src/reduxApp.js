
/*

Techsith redux tutorial code

import React, { Component } from "react";
import "./reduxApp.css";
import { connect } from "react-redux";

class ReduxApp extends Component {
  render() {
    console.log('helloo');
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
        <div>History</div>
        <div>
          <ul>
            {
              this.props.history.map(el => (
                <li 
                className='historyItem' 
                key={el.id} 
                onClick={() => this.props.onDelItem(el.id)}>
                  {el.age}
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 }),
    onDelItem: (id) => dispatch({type: "DEL_ITEM", key: id})
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(ReduxApp);


*/