(function(root, undefined) {
	'use strict';

	/**
	 * @description Extended Object.keys
	 * @param  {[Object]} source [source object]
	 * @return {[Array]}        [keys]
	 */
	Object.keys = Object.keys || function(source) {
		var keys = [];
		for (var key in source) {
			keys.push(key);
		}
		return keys;
	};

	/**
	 * @description Utils Function
	 * @class Utils
	 * @constructor Utils
	 * @return {[type]} [description]
	 * @version 1.2.0
	 * @author Kingwell Leng <kingwell.leng@gmail.com>
	 * @copyright kingwell 2016
	 */
	var Utils = function() {},
		fn = Utils.prototype;

	/**
	 * @description Object Key Sort
	 * @param  {[Object]} source [source object]
	 * @param  {[Number]} sort   [0 Or -1]
	 * @return {[Object]}        [new object]
	 */
	fn.objectSort = function(source, sort) {

		var sourceObject = source || {},
			targetObject = {},
			_sort = sort || 0,
			keys,
			compareNumbers = function(a, b) {
				var z;
				if (_sort < 0) {
					z = a;
					a = b;
					b = z;
				}
				if (a > b) {
					return 1;
				} else if (a < b) {
					return -1;
				} else {
					return 0;
				}
			};
		keys = Object.keys(sourceObject).sort(compareNumbers);
		keys.forEach(function(item) {
			targetObject[item] = sourceObject[item];
		});
		return targetObject;
	};

	/**
	 * @description Deep Copy
	 * @param  {[Object]} source [source object]
	 * @return {[Object]}        [new object]
	 */
	fn.deepCopy = function copy(source) {
		var result = {};
		if (!source) {
			return source
		}
		if (typeof source !== 'object') {
			return source;
		}
		if (Object.prototype.toString.call(source).slice(8, -1) === 'Array') {
			result = [];
			for (var i = 0; i < source.length; i++) {
				result[i] = copy(source[i]);
			}
			return result;
		}
		for (var key in source) {
			result[key] = copy(source[key]);

		}
		return result;
	};

	/**
	 * @description Slice String
	 * @param  {[String]} str    [source string]
	 * @param  {[Number]} length [return length]
	 * @param  {[String]} symbol [symbol]
	 * @return {[String]}        [result]
	 */
	fn.slice = function(str, length, symbol) {
		var result = '',
			sym = symbol || '...';

		if (!str || typeof str !== 'string' || !length) {
			result = str;
		} else {
			if (str.length < length) {
				sym = '';
			}
			result = str.slice(0, length) + sym;
		}

		return result;
	};

	/**
	 * @description In Array
	 * @param  {Number Or String Or Boolean} item  [item]
	 * @param  {[Array]} array [source array]
	 * @return {[Number]}       [position]
	 */
	fn.inArray = function(item, array) {
		for (var i = 0, len = array.length; i < len; i++) {
			if (array[i] === item) {
				return i;
			}
		}
		return -1;
	};

	/**
	 * @description 变为稠密数据
	 * @param  {[Array]} array [source array]
	 * @return {[Array]}       [new array]
	 */
	fn.toDenseArray = function(array) {
		if (Array.isArray(array)) {
			return array.filter(function(item) {
				return item;
			});
		} else {
			return array;
		}
	};

	/**
	 * @description Delete Duplicates Array
	 * @param  {[Array]} array [source array]
	 * @return {[Array]}       [new  array]
	 */
	fn.delDupArray = fn.delArray = function(array) {
		var targetArray = [];
		var arr = array || [];

		if (arr.length < 1) {
			return arr;
		}
		for (var i = 0; i < arr.length; i++) {
			var st = false
			for (var j = 0; j < targetArray.length; j++) {
				if (arr[i].toString() == targetArray[j].toString()) {
					st = true;
				}
			}
			if (!st) {
				targetArray.push(arr[i]);
			}
		}
		return targetArray;
	};

	/**
	 * @description Strim HTML
	 * @param  {[String]} str [HTML TEXT]
	 * @return {[String]}     [TEXT]
	 */
	fn.strimHtml = function(str) {
		var reg = /<(?:.|\s)*?>/ig;
		return str.replace(reg, '');
	};

	/**
	 * @description Fix Number
	 * @param  {[Number]} number [source number]
	 * @param  {[Number]} length [string length]
	 * @return {[String]}        [fix number]
	 * @example
	 * utils.fixNumber(1,2);//output '01';
	 * utils.fixNumber(1,3);//output '001';
	 * 
	 * utils.fixNumber.size = 4;
	 * utils.fixNumber(1);//output '0001';
	 * utils.fixNumber(10);//output '0010';
	 */
	fn.fixNumber = function fix(number, length) {
		var len = length || fix.size || 0;
		var maxNum = Math.pow(10, len);
		var str = [];
		for (var i = number.toString().length; i < maxNum.toString().length - 1; i++) {
			str.push('0');
		}
		return str.join('') + number;
	};

	root.utils = new Utils();
})(this);