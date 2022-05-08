/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
const NestedIterator = function (nestedList) {
  const aux = (list = []) =>
    list.reduce(
      (acc, v) => acc.concat(v.isInteger() ? v.getInteger() : aux(v.getList())),
      []
    );
  this.list = aux(nestedList);
  this.count = 0;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.count <= this.list.length - 1;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  return this.list[this.count++];
};
