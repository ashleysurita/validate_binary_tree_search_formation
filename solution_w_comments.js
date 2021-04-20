class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function validateBST(tree, upper = Infinity, lower = Math.log(0)) {
     // if tree is null, then return true
    if(!tree) return true
    
    // if its not valid, return false
    else (tree.value > upper || tree.value < lower) return false
  
    // otherwise, recurrsion
    return validateBST(tree.left, tree.value, lower) && validateBST(tree.right, upper, tree.value)
}

// Test Cases
var tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3))
var tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
var tree3 = new TreeNode(8, new TreeNode(3, new TreeNode(1), new TreeNode(6)), new TreeNode(10, null, new TreeNode(14, new TreeNode(13))))
console.log(validateBST(null)) // true
console.log(validateBST(tree1)) // true
console.log(validateBST(tree2)) // false
console.log(validateBST(tree3)) // true
console.log(validateBST(new TreeNode())) // true
