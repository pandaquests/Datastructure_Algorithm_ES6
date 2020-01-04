class Deque {
	constructor(items = []) {
		this.store = items;
	}
	size() {
		return this.store.length;
	}
	addFirst(el) {
		this.store.unshift(el);
	}
	addLast(el) {
		this.store.push(el);
	}
	removeFirst() {
		this.store.shift();
	}
	removeLast() {
		this.store.pop();
	}
	contains(el) {
		for (let i = 0; i < this.store.length; i++) {
			if (el === this.store[i]) {
				return true;
			}
		}
		return false;
	}
	removeFirstOccurrence(el) {
		for (let i = 0; i < this.store.length; i++) {
			if (el === this.store[i]) {
				this.store.splice(i, i + 1);
				return;
			}
		}
	}
	removeLastOccurrence(el) {
		for(let i = this.store.length - 1; i >= 0; i--) {
			if (el === this.store[i]) {
				this.store.splice(i, i + 1);
				return;
			}	
		}
	}
	peekFirst() {
		return this.store[0];
	}
	peekLast() {
		return this.store[this.store.length - 1];
	}
	iterator() {
		let nextIndex = 0;
		return {
			next: () => {
				if (nextIndex < this.store.length) {
					return {
						value: this.store[nextIndex++],
						done: false
					};
				}
				return {
					done: true
				};
			}
		};
	}
	descendingIterator() {
		let nextIndex = this.store.length - 1;
		return {
			next: () => {
				if (nextIndex >= 0) {
					return {
						value: this.store[nextIndex--],
						done: false
					};
				}
				return {
					done: true
				};
			}
		};
	}

}

module.exports = Deque;
