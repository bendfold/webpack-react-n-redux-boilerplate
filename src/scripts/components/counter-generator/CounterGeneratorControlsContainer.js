// FRAMEWORK
import React from 'react';
import {connect} from 'react-redux';
// COMPONENTS
import CounterGeneratorControls from './CounterGeneratorControls';
// CONSTANTS
import { TYPE } from '../../constants';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch({
				type: 'CREATE_COUNTER',
				name: 'A'
			})
		}
	}
};

const CounterGeneratorControlsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterGeneratorControls);

export default CounterGeneratorControlsContainer;
