const BinarySearchTree = require('./bst-class.js')

//how would we test if input is a binary search tree
//traverse the tree
//checks if the right child is greater than the parent
//also checks if the left child is less than the parent


function isBST(tree){
    if(tree.right < tree.parent || tree.left > tree.parent){
        return false;
    }
    if(tree.left<tree.parent){
        return isBST(tree.left);
    }
    if(tree.right>tree.parent){
        return isBST(tree.right);
    }
 
        return true;        

}

const ST = new BinarySearchTree();
ST.insert(4, 'a');
ST.insert(9, 'b');
ST.insert(2, 'c');
ST.insert(10, 'd');
ST.insert(11, 'a');
ST.insert(20, 'b');
ST.insert(15, 'c');
ST.insert(14, 'd');

console.log('This is a BST: ', isBST(ST));