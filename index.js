'use strict';
var getType = require('what-type');
module.exports = function (stringNumber) {
	if (getType(stringNumber) === 'string') {
		return +stringNumber;
	} else {
		throw Error("The input must be string value");
	}
};