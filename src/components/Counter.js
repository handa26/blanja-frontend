import React from "react";
import { Button } from "react-bootstrap";

import { connect } from "react-redux";
import { addCounterCreator, subCounterCreator} from "../redux/actionCreators/Counter";

class Counter extends React.Component {
  render() {
    console.log(this.props.counter);
    return(
      <div className='d-flex justify-content-around align-items-stretch'>
      <Button onClick={() => {
        this.props.dispatch(subCounterCreator());
      }}>-</Button>
      <p style={{color: "black", fontSize: "20px"}}>{this.props.counter}</p>
      <Button onClick={() => {
        this.props.dispatch(addCounterCreator());
      }}>+</Button>
    </div>
    )
  }
}

const mapStateToProps = ({counter}) => {
  return {
    // ? key: value
    // * key => nama props
    // * value => state apa di store
    counter,
  };
}

const mapDispatchToProps = dispatch => {
  // key =? nama props berisi fungsi dispatch
  // value => funsgi dispatch
  return {
    addCounter: () => {dispatch(addCounterCreator())},
    subCounter: () => {dispatch(subCounterCreator())}
  }
}

const CounterWithRedux = connect(mapStateToProps)(Counter)
export default CounterWithRedux;