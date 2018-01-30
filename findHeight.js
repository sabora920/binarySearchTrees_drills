const BinarySearchTree = require('./bst-class.js');

//**starts at root and if there is no root, we return 0;
//then get the max height of left subteree recursively
//then get the max heigh of right subtree recursivley
//get the max of max heights of left & right subtrees and add 1 oto it for the current node.
//compare left& right to see which one's greater & return max height

function findHeight(searchTree){
    if (!searchTree.key){
      return 0;
    }
    else {
      
    }
}


const ST = new BinarySearchTree();
ST.insert(4, 'a');
ST.insert(9, 'b');
ST.insert(2, 'c');
ST.insert(10, 'd');

console.log(findHeight(ST));






















