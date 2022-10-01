import React, { Component } from 'react';
import store from '../store.js';
//import * as actionsCreators from '../actions';
import {increment, decrement, reset, fetchPost} from '../actions';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index.js';
import axios from 'axios';


const Counter = ({ counter, increment, decrement, reset, fetchPost}) => (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>
          +
        </button>
        {' '}
        <button onClick={decrement}>
          -
        </button>
        {' '}
        <button onClick={reset}>
          Reset
        </button>
        <button onClick={() => fetchPost(counter)}>
          Fetch
        </button>
      </p>
    )

const mapStateToProps = (state) => ({
  counter: state.count,
});
// function mapDispathToProps(dispatch){
//   return bindActionCreators(actionsCreators, dispatch);
//   // return {
//   //   increment: () => dispatch(increment()),
//   //   decrement: () => dispatch(decrement()),
//   //   reset: () => dispatch(reset()),
//   //   fetchPost: (num) => dispatch(fetchPost(num))
//   // }
// } 





//export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, {increment, decrement, reset, fetchPost})(Counter);
