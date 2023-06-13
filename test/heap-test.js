'use strict';

const assert = require('bsert');
const Heap = require('../lib/bheep');

describe('Heap', function() {
  it('should sort items in descending order', () => {
    const comparator = (a, b) => b - a;
    const N = 100;

    const heap = new Heap(comparator);

    for (let i = 0; i < N; i++)
      heap.insert(i);

    for (let i = 0; i < N; i++) {
      const item = heap.shift();
      assert.strictEqual(item, N - i - 1);
    }

    assert.strictEqual(heap.size(), 0);
  });
});
