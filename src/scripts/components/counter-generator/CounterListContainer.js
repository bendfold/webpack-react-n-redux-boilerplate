// FRAMEWORK
import React from 'react';
import { connect } from 'react-redux';
// COMPONENTS
import CounterList from './CounterList';

const mapStateToProps = (state) => {
	return {counterCollection: state.counterCollection}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpClick: (id) => {
			dispatch({
				type: TYPE.INCREMENT_MULTI_COUNTER,
				id
			})
		},
		onDownClick: (id) => {
			dispatch({
				type: TYPE.DECREMENT_MULTI_COUNTER,
				id
			})
		}
	}
};

const CounterListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterList);

export default CounterListContainer;
