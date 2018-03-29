// REDUCER
import { multiCounterReducers } from './multiCounter';
// CONSTANTS
import { TYPE } from '../constants/index';
// ACTIONS
import * as actions from '../actions';
// API
import { mockDataBase } from '../api';
// LIBS
import { v4 } from 'uuid';

describe('REDUCERS', () => {

	console.log('multiCounterReducers ', multiCounterReducers.counterCollection);

	// describe('Receive counters', () => {
	// 	it('Should decrement the counter relative to the supplied ID', () => {
	// 		const stateBefore = {};
	// 		const actualResult = multiCounter().counterCollection(stateBefore, actions.receiveCounters(mockDataBase));

	// 		expect(actualResult).toEqual(mockDataBase);
	// 	});
	// });
	// describe('Create counter', () => {
	// 	const stateBefore = {};
	// 	const actualResult = multiCounter(stateBefore, actions.createCounter());

	// 	it('Should create a new counter object and add it to the state.', () => {
	// 		expect(typeof actualResult).toEqual('object');
	// 	});

	// 	it('Should contain an object with the keys, "count" and "id".', () => {
	// 		const expectedResult = ['count', 'id'].sort();
	// 		const resultId = Object.keys(actualResult)[0];

	// 		expect(Object.keys(actualResult[resultId]).sort()).toEqual(expectedResult);
	// 	});

	// 	it('Should have a "count" property set to 0.', () => {
	// 		const resultId = Object.keys(actualResult)[0];

	// 		expect(actualResult[resultId].count).toEqual(0);
	// 	});

	// 	it('Should add a new counter object along side existing counter objects in the state.', () => {
	// 		const stateBeforeId = v4();
	// 		const stateBefore = {
	// 					[stateBeforeId] : {
	// 						id: stateBeforeId,
	// 						count: 0
	// 					}
	// 				};

	// 		const actualResult = multiCounter(stateBefore, { type: TYPE.CREATE_COUNTER });
	// 		const resultKeys = Object.keys(actualResult);

	// 		expect(resultKeys.length).toEqual(2);

	// 	});
	// });
	// describe('Multi counter increment', () => {
	// 	it('Should increment the counter relative to the supplied ID', () => {
	// 		const stateBefore = multiCounter(stateBefore, actions.receiveCounters(mockDataBase));
	// 		const firstItemKey = Object.keys(stateBefore)[0];
	// 		const firstItemId = stateBefore[firstItemKey].id;
	// 		const actualResult = multiCounter(stateBefore, actions.incrementCounter(firstItemId));

	// 		expect(actualResult[firstItemId].count).toEqual(stateBefore[firstItemId].count + 1);
	// 	});
	// });
	// describe('Multi counter decrement', () => {
	// 	it('Should decrement the counter relative to the supplied ID', () => {
	// 		const stateBefore = multiCounter(stateBefore, actions.receiveCounters(mockDataBase));
	// 		const firstItemKey = Object.keys(stateBefore)[0];
	// 		const firstItemId = stateBefore[firstItemKey].id;
	// 		const actualResult = multiCounter(stateBefore, actions.decrementCounter(firstItemId));

	// 		expect(actualResult[firstItemId].count).toEqual(stateBefore[firstItemId].count - 1);
	// 	});
	// });
	// describe('isFetching', () => {
	// 	it('Should be set to true when the action type is REQUEST_COUNTERS', () => {
	// 		const stateBefore = false;
	// 		const actualResult = multiCounter(stateBefore, actions.requestCounters());

	// 		expect(actualResult.isFetching).toEqual(true);
	// 	});
	// 	it('Should be set to false when the action type is RECEIVE_COUNTERS', () => {
			
	// 	});
	// });
});
