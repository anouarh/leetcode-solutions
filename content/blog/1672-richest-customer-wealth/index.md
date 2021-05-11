---
title: Richest Customer Wealth
date: "2021-05-11T14:44:35+00:00"
description: "Solution for LeetCode's Richest Customer Wealth."
tags: ["array", "easy", "LeetCode"]
dataStructure: "Array"
difficulty: "Easy"
sourceWebsite: "LeetCode"
---

## Problem Statement

The problem statement can be found [here](https://leetcode.com/problems/richest-customer-wealth/).
The idea is that you're given a matrix and and you need to find the row with the highest value (i.e., wealthiest customer).

## Iterate over all elements

**Time**: O(n\*m) <br>
**Space**: O(1)

Iterating over all required matrix elements and calculating the the sum, then compare that sum to the initial result variable and return it at the end.

```java
class Solution {
    public int maximumWealth(int[][] accounts) {
        int result = 0;
        for(int i = 0; i < accounts.length; i++){
            int current = 0;
            for(int j = 0; j < accounts[i].length; j++){
                current += accounts[i][j];
            }
            if(current > result) result = current;
        }
        return result;
    }
}
};
```
