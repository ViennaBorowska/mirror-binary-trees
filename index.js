const fs = require("fs");
// Mirror Binary Tree Program
// I compiled this program using the Mirror Binary Tree workshop
// and code I found online on https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/ contributed by avanitrachhadiya2155
//I only got as far as trying to understand the program and have not had time to test the function properly or collect any runtime data for analysis.
// I have imported the dependencies required to write the data to a csv file and added this functionality into to the program.

// WRITING DATA TO FILE
// delete output csv file if exists
if (fs.existsSync("mirrorBinaryTree.csv"))
  fs.unlinkSync("mirrorBinaryTree.csv");
// create and write a header to the output csv file
fs.appendFile("mirrorBinaryTree.csv", "Tree Size, Average Runtime\n", (err) => {
  if (err) throw err;
});

//Node constructor for binary tree
class node {
  constructor() {
    this.val = 0;
    this.left = this.right = null;
  }
}

// Helper function to create new nodes
function createNode(val) {
  let newNode = new node();
  newNode.val = val;
  newNode.left = null;
  newNode.right = null;
  return newNode;
}

// Helper function to print Inorder traversal
function inorder(root) {
  if (root == null) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}

//Function to create mirror tree
function mirrorify(root) {
  if (root == null) {
    return null;
  }

  // Create new mirror node from original tree node
  let mirror = createNode(root.val);
  mirror.right = mirrorify(root.left);
  mirror.left = mirrorify(root.right);
  return mirror;
}

// Driver code
let tree = createNode(5);
tree.left = createNode(3);
tree.right = createNode(6);
tree.left.left = createNode(2);
tree.left.right = createNode(4);

// Print traversal of the input tree to terminal
console.log("Inorder of original tree: ");
inorder(tree);
let mirror = null;
mirror = mirrorify(tree);

// Print traversal of the mirror tree to terminal
console.log("<br>Inorder of mirror tree: ");
inorder(mirror);
