function calculateMinCost() {
  //your code here
	const input = document.getElementById('input').value;

  // Split the input string into an array of integers
  const ropes = input.split(',').map(Number);

  // Create a min-heap (priority queue) to store rope lengths
  const minHeap = new MinHeap();

  // Add all rope lengths to the min-heap
  for (const rope of ropes) {
    minHeap.insert(rope);
  }

  let totalCost = 0;

  // Keep connecting the two shortest ropes until there's only one rope left
  while (minHeap.size() > 1) {
    const firstMin = minHeap.extractMin();
    const secondMin = minHeap.extractMin();

    const currentCost = firstMin + secondMin;
    totalCost += currentCost;

    minHeap.insert(currentCost);
  }

  // Display the minimum cost in the result div
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Minimum Cost: ${totalCost}`;
}

// MinHeap class for implementing the priority queue
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.size() === 0) {
      return null;
    }

    if (this.size() === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let currentIndex = this.size() - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let smallestChildIndex = currentIndex;

      if (
        leftChildIndex < this.size() &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.size() &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex !== currentIndex) {
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  
  
  
}  
