---
title: Trim a Binary Search Tree
date: "2021-01-12T17:39:35+00:00"
description: "Solution for LeetCode's Trim a Binary Search Tree."
tags: ["bst", "medium", "LeetCode"]
dataStructure: "Binary Search Tree"
difficulty: "Medium"
sourceWebsite: "LeetCode"
---

## Problem Statement

The problem statement can be found [here](https://leetcode.com/problems/trim-a-binary-search-tree/).
It is easier to have a grasp of how BSTs work in terms of traversing them and removing nodes etc. The problem states that given a lower and higher bound removes tree nodes from BST where the values are not inside those bounds.

## Traverse Tree and Remove Nodes

**Time**: O(log(n)) <br>

It helps to think about BST problems in recursive terms. The possibe situations are:

- Root is equal to the **lower bound** in which case we would have to **remove the left subtree** and perform a **recursive trim on the right subtree**.
- Root is equal to the **higher bound** in which case we would have to **remove the right subtree** and perform a **recursive on the left subtree**.
- Root is higher than both the lower and higher bounds in which case we perform a recursive trim on left subtree.
- Root is lower than both the lower and higher bounds in which case we perform a recursive trim on the right subtree.

The steps to our solution is to first of all return null if our root is null. Then take care of the mentionned situations above and finally recursively call the method and with the magic of recursion the problem is solved.

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if (root == null) return null;
        if(root.val == low){
            root.left = null;
            root.right = trimBST(root.right, low, high);
        }
        if(root.val == high){
            root.right = null;
            root.left = trimBST(root.left, low, high);
        }
        if(root.val > low && root.val > high){
            return trimBST(root.left, low, high);
        }
        if(root.val < low && root.val < high){
            return trimBST(root.right, low, high);
        }
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
        return root;
    }
}
```
## Ressources that made me understand the problem

This [YouTube video](https://www.youtube.com/watch?v=sJxVWROygXU) by @scottynoshotty was very helpful.
Also it helps to think of BST problems in a recursive approach since a task performed on one small situation is applied to the whole tree.