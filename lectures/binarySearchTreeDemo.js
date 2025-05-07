class BSTNode {
    constructor(data, leftNode, rightNode) {
        this.data = data;
        this.left = leftNode || null;
        this.right = rightNode || null;
    }
}

class BST {
    constructor(topNode) {
        this.root = topNode || null;
    }

    addNode(newNode) {
        if (this.root === null) { // Empty tree
            this.root = newNode;
            return this; // Stop immediately
        }
        // Here we have at least one node in the tree, so travel down as often as needed
        let runner = this.root;
        while (runner !== null) { // Travel down the tree
            if (newNode.data > runner.data) { // Move right
                if (runner.right !== null) { // If there's a node to the right...
                    runner = runner.right; // ...then just move down the tree
                } else { // Here we DON'T have a node to the right, so insert it into the tree and stop
                    runner.right = newNode;
                    break;
                }
            } else { // Move left
                if (runner.left !== null) {
                    runner = runner.left; // Move down the tree
                } else { // Insert the node
                    runner.left = newNode;
                    break;
                }
            }
        }
        return this;
    }
}

let myTree = new BST();
myTree.addNode(new BSTNode(20));
myTree.addNode(new BSTNode(10));
myTree.addNode(new BSTNode(25));
myTree.addNode(new BSTNode(30));
myTree.addNode(new BSTNode(22));
console.log(myTree);
console.log(myTree.root.right); // Examining the tree in a little more detail