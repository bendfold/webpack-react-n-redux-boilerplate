import { requestCounters } from './index';
import { TYPE } from '../constants/index';

describe('ACTIONS', () => {
	describe('requestCounters', () => {
		
		const actualResult = requestCounters();

		it('should create an action object', () => {
			expect(typeof actualResult).toEqual('object');
		});
		it('should contain the keys "name" and "type"', () => {
			const expectedResult = ['name', 'type'].sort();

			expect(Object.keys(actualResult).sort()).toEqual(expectedResult);
		});
		it(`should have the type property ${TYPE.REQUEST_COUNTERS}`, () => {
			expect(actualResult.type).toEqual(TYPE.REQUEST_COUNTERS);
		});
	});
});
