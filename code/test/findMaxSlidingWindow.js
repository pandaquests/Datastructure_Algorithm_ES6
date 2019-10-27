const findMaxSlidingWindow = function(arr, window_size) {
		const getMax = (startWindow, endWindow) => {
					const max = arr
					.slice(startWindow, endWindow + 1)
					.reduce((max, item) => item > max ? item : max, -Infinity);
					result.push(max);
				}
		const result = [];
		let startWindow = 0;
		let endWindow = window_size - 1;
		while (endWindow < arr.length) {
					getMax(startWindow++, endWindow++);    
				}
		return result;
};
module.exports = findMaxSlidingWindow;
