function binarySearch(array, value, start, end, iterationCount = 0) {    
    iterationCount++
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1 + ' iterations: ' + iterationCount;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    
    console.log(start, end);    
    if (item == value) {
        return index + ' iterations: ' + iterationCount;
    }
    else if (item < value) {        
        return binarySearch(array, value, index + 1, end, iterationCount++);
    }
    else if (item > value) {        
        return binarySearch(array, value, start, index - 1, iterationCount++);
    }
};

function linearSearch(array, value) {
    let iterationCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        iterationCount++
        return `${value} found in ${iterationCount} iterations.`;
      } else {
        iterationCount++
      }      
    }
    return `Number not found in ${iterationCount} iterations`;
  }

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);
        
        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        // make the new node the last item in the queue
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return; // if queue empty: nothing to return
        }
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null; // if this is last item in queue
        }
        return node.value;
    }
}

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    // Depth-first search
    // in-order traversal: branches visited, then node.
    dfs(value = []) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }

    // Breadth-first search: row traversal
    bfs(tree, values = []) {
        const queue = new Queue(); // instantiate queue
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue(); // remove from queue
            values.push(node.value); // add value from queue to array

            if (node.left) {
                queue.enqueue(node.left); // add left child to queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to queue
            }
        }

        return values;
    }
}

// Drills
// 1.) [3,5,6,8,11,12,14,15,17,18], [3,5,6,8,11], [8,11], [8]
// 1.) [3,5,6,8,11,12,14,15,17,18], [14,15,17,18], [14,15], [15, 15], -1
// console.log(binarySearch([3,5,6,8,11,12,14,15,17,18], 8));
// console.log(linearSearch([3,5,6,8,11,12,14,15,17,18], 16));

function binarySearch2(array, value, start, end, iterationCount = 0) {    
    iterationCount++
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
  
    if (start > end) {
        return `Number not found in ${iterationCount} iterations.`      
    }
  
    const index = Math.floor((start + end) / 2);
    const item = array[index];
  
    
    console.log(start, end);        
    if (item == value) {
        return `${value} found in ${iterationCount} iterations at index: ${index}.`      
    }
    else if (item < value) {        
        return binarySearch2(array, value, index + 1, end, iterationCount++);
    }
    else if (item > value) {        
        return binarySearch2(array, value, start, index - 1, iterationCount++);
    }
  };

console.log(binarySearch2([3,5,6,8,11,12,14,15,17,18], 18));

const library = {
    genre1: [0, 99],
    genre2: [100, 199],
    genre2: [200, 299],
    genre2: [300, 399],
    genre2: [400, 499],
};

let books = [...Array(100)].map((_,i) => 200 + i);

const getDewey = (books, search, start, end, library, dewey) => {
    // code here
}

console.log(getDewey(books, 263, 0, 0, library, 'genre3'));

/* determine the post-order traversal given
    in-order traversal = [14, 15, 19, 25, 27, 35, 79, 89, 90, 91]
    pre-order traversal = [35, 25, 15, 14, 19, 27, 89, 79, 91, 90]

    post-order traversal = []
*/