class Queue {
	constructor(items = []) {
		this.store = items;
	}
	add(el) {
		this.store.unshift(el);
	}
	peek() {
		return this.store[0];
	}
	remove() {
		return this.store.shift();
	}
}

module.exports = Queue;
