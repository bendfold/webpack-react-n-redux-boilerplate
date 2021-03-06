import { decrementCounter } from './index';
import { TYPE } from '../constants/index';

describe('ACTIONS', () => {
	describe('decrementCounter', () => {

		const actualResult = decrementCounter();

		it('should create an action object that increments the counter by one', () => {
			expect(typeof actualResult).toEqual('object');
		});
		it('should contain the keys "id", "type" and "name"', () => {
			const expectedResult = ['id', 'type', 'name'].sort();

			expect(Object.keys(actualResult).sort()).toEqual(expectedResult);
		});
		it(`should have the type property ${TYPE.DECREMENT_COUNTER}`, () => {
			expect(actualResult.type).toEqual(TYPE.DECREMENT_COUNTER);
		});
	});
});