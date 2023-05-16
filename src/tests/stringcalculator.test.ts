import { sumNumbers } from '../core/stringcalculator'

describe('stringCalculator', () => {
	it('given an empty string total is 0', () => {
		expect(sumNumbers("")).toBe(0)
	})
	it('given a string number is converted and added to the total', () => {
		expect(sumNumbers("1")).toBe(1)
	})
	it('given a string chain of numbers separated by commas it adds them all', () => {
		expect(sumNumbers("1,2,3")).toBe(6)
	})
	it('given non numeric values do not increment total', () => {
		expect(sumNumbers("a")).toBe(0)
	})
	it('given mixed non numeric and numeric values in a list do not increment total', () => {
		expect(sumNumbers("1, 1a, 2")).toBe(3)
	})
	it('sending a # as custom separator like //#/ at the beginning should sum the numbers', () => {
		expect(sumNumbers("//#/1#2")).toBe(3)
	})
	it('sending a % as custom separator should sum the numbers', () => {
		expect(sumNumbers("//%/1%2%3")).toBe(6)
	})
	it('sending a wrong custom separator ignores the chars', () => {
		expect(sumNumbers("//%/1,3")).toBe(0)
		expect(sumNumbers("//,/1%3")).toBe(0)
	})
})
