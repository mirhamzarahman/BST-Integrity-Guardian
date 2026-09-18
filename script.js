/**
 * Binary Search Tree Integrity Guardian
 *
 * Detects and repairs two misplaced node values
 * while preserving the original tree structure.
 */

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/**
 * Repairs a corrupted Binary Search Tree.
 *
 * @param {TreeNode} root - Root node of the BST
 */
function repairBSTIntegrity(root) {
    let firstCorruptedNode = null;
    let secondCorruptedNode = null;
    let previousNode = null;

    /**
     * Performs inorder traversal.
     * A valid BST should produce sorted values.
     */
    function validateInorder(node) {
        if (!node) return;

        validateInorder(node.left);

        // Detect broken ordering
        if (previousNode && previousNode.value > node.value) {
            if (!firstCorruptedNode) {
                firstCorruptedNode = previousNode;
            }

            secondCorruptedNode = node;
        }

        previousNode = node;

        validateInorder(node.right);
    }

    validateInorder(root);

    // Restore correct values
    if (firstCorruptedNode && secondCorruptedNode) {
        const temp = firstCorruptedNode.value;
        firstCorruptedNode.value = secondCorruptedNode.value;
        secondCorruptedNode.value = temp;
    }
}

module.exports = {
    TreeNode,
    repairBSTIntegrity
};
