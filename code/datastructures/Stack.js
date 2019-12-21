class Stack {
	constructor(items = []) {
		this.store = items;
	}
	empty() {
		return !this.store.length;
	}
	push(el) {
		this.store.push(el);
	}
	pop() {
		return this.store.pop();
	}
	// -------------------
	clear() {
		this.store = [];
		this.size = this.pos = 0;
	}
	toString() {
		return this.store.join(',');
	}
	get(index = this.pos) {
		return this.store[index];	
	}
	indexOf (item) {
		return this.store.indexOf(item);
	}
	lastIndexOf (item) {
		return this.store.lastIndexOf(item);
	}
	isEmpty () {
		return this.store.length === 0;		
	}
	insert(el, index) {
		this.store.splice(index, 0, el);
	}
	add(el) {
		this.store.push(el);
	}
	remove(index) {
		this.store.splice(index, 1);
	}
	front() {
		this.pos = 0;
	}
	end() {
		this.pos = this.store.length - 1;
	}
	prev() {
		if (this.pos === 0) {
			return 0;
		}
		return --this.pos;
	}
	next() {
		if (this.pos === this.store.length - 1) {
			return this.pos;
		}
		return ++this.pos;
	}
	moveTo(index) {
		if (index >= this.store.length) {
			this.pos = this.store.length - 1;
		} else if (index < 0) {
			this.pos = 0; 
		} else {
			this.pos = index;
		}	
	}
	sublist(from, to) {
		return this.store.slice(from, to);
	}
}

module.exports = Stack;
