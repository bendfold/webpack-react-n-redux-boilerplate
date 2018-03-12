// CONSTANTS
import { TYPE } from '../constants';

export const createCounter = (state = [], action) => {
	switch (action.type) {
		case TYPE.CREATE_COUNTER:
			return [
				...state,
				{
					// ID generator from https://redux.js.org/recipes/writing-tests#reducers
					id: state.reduce((maxId, counterItem) => {
						return Math.max(counterItem.id, maxId);
					}, -1) + 1,
					count: 0
				}
			];
		default:
			return state;
	}
}


export const multiCount = (state = [], action) => {
	switch (action.type) {
		case: TYPE.INCREMENT_MULTI_COUNTER:
			return: [
				...state,
				// var car = [...fuzz.slice(0, 2), ...fuzz.filter((item) => (item.id === 2)), ...fuzz.slice(3)]
			];
		case: TYPE.DECREMENT_MULTI_COUNTER:
			return: [
				...state
			];
		default:
			return state;
	}
};
