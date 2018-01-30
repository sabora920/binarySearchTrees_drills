'use strict';

var CircularJSON = require('circular-json');

const BinarySearchTree = require('./bst-class');

const BST = new BinarySearchTree;

BST.insert(3);
BST.insert(1);
BST.insert(4);
BST.insert(6);
BST.insert(9);
BST.insert(2);
BST.insert(5);
BST.insert(7);


// BST.self = BST;
// let str = CircularJSON.stringify(BST);
// console.log(str);