class _Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        this.root = new _Node(value);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    insert(value) {
        this.count++

        let newNode = new _Node(value);

        const searchTree = node => {
            // if value < node.value go left
            if (value < node.value) {
                // if no left child, append
                if (!node.left) {
                    node.left = newNode
                    // if left child, go left again
                } else {
                    searchTree(node.left)
                }
            }
            // if value > node.value go right
            else if (value > node.value) {
                // if no right child, append
                if (!node.right) {
                    node.right = newNode;
                } else {
                    // if right child, go right again
                    searchTree(node.right)
                }                
            }
        }

        searchTree(this.root)
    }

    minimimumValue() {
        let currentNode = this.root;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    maximumValue() {
        let currentNode = this.root;

        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.value;
    }

    containsValue(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                return true;
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return false;
    }

    // depth-first
    // left, root, right
    dfsInOrder() {
        let result = [];

        const traverse = node => {
            if (node.left) traverse(node.left);

            result.push(node.value);

            if (node.right) traverse(node.right);
        }

        traverse(this.root)
        return result;
    }

    // root, left, right
    dfsPreOrder() {
        let result = [];

        const traverse = node => {
            // capture node value
            result.push(node.value);
            // if left child exists, go left again
            if (node.left) traverse(node.left);
            // if right child exists go right again
            if (node.right) traverse(node.right);

        }
        traverse(this.root)
        return result;
    }

    // left, right, root
    dfsPostOrder() {
        let result = [];

        const traverse = node => {            
            // if left child exists, go left again
            if (node.left) traverse(node.left);
            // if right child exists go right again
            if (node.right) traverse(node.right);
            // capture node value
            result.push(node.value);
        }
        traverse(this.root)
        return result;
    }
    // breadth first search (search by rows)
    bfs() {
        let result = []
        let queue = []

        queue.push(this.root)

        while(queue.length) {
            let currentNode = queue.shift();

            result.push(currentNode.value)

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }

        return result;
    }
}

let binary = new BST(15)
binary.insert(3);
binary.insert(36);
binary.insert(2);
binary.insert(12);
binary.insert(28);
binary.insert(39);

console.log(binary.size());
console.log(binary.minimimumValue())
console.log(binary.maximumValue())
console.log('in order: ' + binary.dfsInOrder());
console.log('pre order: ' + binary.dfsPreOrder());
console.log('post order: ' + binary.dfsPostOrder());
console.log('breadth first: ' + binary.bfs());

let thinkfulBinary = new BST(25);
thinkfulBinary.insert(15);
thinkfulBinary.insert(50);
thinkfulBinary.insert(10);
thinkfulBinary.insert(24);
thinkfulBinary.insert(35);
thinkfulBinary.insert(70);
thinkfulBinary.insert(4);
thinkfulBinary.insert(12);
thinkfulBinary.insert(18);
thinkfulBinary.insert(31);
thinkfulBinary.insert(44);
thinkfulBinary.insert(66);
thinkfulBinary.insert(90);
thinkfulBinary.insert(22);

console.log('Thinkful in order: ' + thinkfulBinary.dfsInOrder());
console.log('Thinkful pre order: ' + thinkfulBinary.dfsPreOrder());
console.log('Thinkful post order: ' + thinkfulBinary.dfsPostOrder());


