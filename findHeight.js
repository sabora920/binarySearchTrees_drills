const BinarySearchTree = require('./bst-class.js');

//**starts at root and if there is no root, we return 0;
//then get the max height of left subtree recursively
//then get the max height of right subtree recursivley
//get the max of max heights of left & right subtrees and add 1 onto it for the current node.
//compare left& right to see which one's greater & return max height

function findHeight(tree){
    // if (!tree.key){
    //   return 0;
    // }
    if (tree.left && tree.right) {
        return Math.max(findHeight(tree.left), findHeight(tree.right)) + 1;
      }
    if (tree.right) {
        return findHeight(tree.right) + 1;
      }
    if (tree.left) {
        return findHeight(tree.left) + 1;
      }
    return 1;
}

// function findHeight(tree) {
//   return Math.max(tree.left && findHeight(tree.left), tree.right && findHeight(tree.right)) + 1;
// }

const ST = new BinarySearchTree();
ST.insert(4, 'a');
ST.insert(9, 'b');
ST.insert(2, 'c');
ST.insert(10, 'd');
// ST.insert(11, 'e');
// ST.insert(12, 'f');

console.log(ST);
console.log('Tree Height: ', findHeight(ST));






















