const findMaxSlidingWindow = function(arr, windowSize) {
  let result = [];
  
  if(arr.length == 0 || windowSize > arr.length) {
    return;
  }

  let dequeue = [];
  const dequeueIsNotEmpty = () => dequeue.length > 0;
  const currentElementLargerThanLastDequeueElement = currentEl => currentEl >= arr[dequeue[dequeue.length - 1]]
  //find out max for first window
  for (let i = 0; i < windowSize; i++) {
    while (dequeueIsNotEmpty() 
        && currentElementLargerThanLastDequeueElement(arr[i])) {
      dequeue.pop();
    }
    
    dequeue.push(i);
  }
  
  result.push(arr[dequeue[0]])
  
  for (let i = windowSize; i < arr.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of list
    while (dequeueIsNotEmpty() 
        && currentElementLargerThanLastDequeueElement(arr[i])) {
      dequeue.pop();
    }
    
    //remove first number if it doesn't fall in the window anymore
    if (dequeueIsNotEmpty() && (dequeue[0] < i - (windowSize - 1))) {
      dequeue.shift();
    }
    
    dequeue.push(i);
    result.push(arr[dequeue[0]]);
  }
  
  return result;
};

module.exports = findMaxSlidingWindow;
