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

    height(currentNode = this.root, calculatedHeight = 0) {
        if (currentNode === null || (currentNode.left === null && currentNode.right === null)) {
            return calculatedHeight; // rightHeight - same result
        }
        let leftHeight = 0, rightHeight = 0;
        // Recursively find the height going to the left or right (where possible)
        if (currentNode.left !== null) {
            leftHeight = this.height(currentNode.left, calculatedHeight+1);
        }
        if (currentNode.right !== null) {
            rightHeight = this.height(currentNode.right, calculatedHeight+1);
        }
        return Math.max(leftHeight,rightHeight);
    }
    
    /* Three different ways to traverse a binary search tree */
    inOrder(currentNode = this.root) {
        if (currentNode === null) {
            return;
        }
        this.inOrder(currentNode.left); // Print everything to the left of this node
        console.log(currentNode.data); // Print this node's value
        this.inOrder(currentNode.right); // Print everything to the right of this node
    }

    preOrder(currentNode = this.root) {
        if (currentNode === null) {
            return;
        }
        console.log(currentNode.data); // Print this node's value
        this.preOrder(currentNode.left); // Print everything to the left of this node
        this.preOrder(currentNode.right); // Print everything to the right of this node
    }

    postOrder(currentNode = this.root) {
        if (currentNode === null) {
            return;
        }
        this.postOrder(currentNode.left); // Print everything to the left of this node
        this.postOrder(currentNode.right); // Print everything to the right of this node
        console.log(currentNode.data); // Print this node's value
    }
}

let myTree = new BST();
myTree.addNode(new BSTNode(20));
myTree.addNode(new BSTNode(10));
myTree.addNode(new BSTNode(25));
myTree.addNode(new BSTNode(30));
myTree.addNode(new BSTNode(22));
myTree.postOrder();
// console.log(myTree);
// console.log(myTree.root.right); // Examining the tree in a little more detail
// console.log(myTree.height()); // Finding the height of the entire tree
// console.log(myTree.height(myTree.root.left)); // Finding the height of the tree from the 10 node