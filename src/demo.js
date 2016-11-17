console.log(utils);
var objSort = {
	d: 4,
	a: 1,
	b: 2,
	e: 5,
	c: 3
};
console.log(utils.objectSort(objSort, 0));
console.log(utils.objectSort(objSort, -1));

var copyOldObject = {
	name: 'copy',
	say: function() {
		alert('say');
	},
	arr: [1, 2, 3],
	obj: objSort
};
var copyNewObject = utils.deepCopy(copyOldObject);
copyOldObject.name = 2
console.log(copyOldObject);
console.log(copyNewObject);