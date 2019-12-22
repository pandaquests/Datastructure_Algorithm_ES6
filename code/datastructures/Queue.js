class Queue {
	constructor(items = []) {
		this.store = items;
	}
	add(el) {
		this.store.unshift(el);
	}
}

module.exports = Queue;
