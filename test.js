var expect = require('chai').expect;
var s2n = require('./index.js');

describe('tests for converting String to Number', function () {
	it('should return +ve number', function () {
		expect(s2n('+211')).to.be.equal(211);
	})

	it('the type of returned value should be number', function () {
		expect(typeof s2n('+211')).to.be.equal('number');
	})

	it('should return -ve number', function () {
		expect(s2n('-900')).to.be.equal(-900);
	})

	it('the type of returned value should be number', function () {
		expect(typeof s2n('-900')).to.be.equal('number');
	})

	it('should return +ve float number', function () {
		expect(s2n('+2.11')).to.be.equal(2.11);
	})

	it('the type of returned value should be number', function () {
		expect(typeof s2n('+2.11')).to.be.equal('number');
	})

	it('should return -ve float number', function () {
		expect(s2n('-9.00001')).to.be.equal(-9.00001);
	})

	it('the type of returned value should be number', function () {
		expect(typeof s2n('-9.00001')).to.be.equal('number');
	})
})