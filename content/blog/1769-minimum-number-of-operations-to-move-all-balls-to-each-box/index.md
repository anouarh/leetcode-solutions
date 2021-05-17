---
title: Minimum Number of Operations to Move All Balls to Each Box
date: "2021-05-17T17:07:15+00:00"
description: "Solution for LeetCode's Minimum Number of Operations to Move All Balls to Each Box."
tags: ["array", "medium", "LeetCode"]
dataStructure: "Array"
difficulty: "Medium"
sourceWebsite: "LeetCode"
---

## Problem Statement

The problem statement can be found [here](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/). You are a given String of ones and zeros, for each position return the minimum number of operations to move all ones to that particular position.

## Iterate over each position

**Time**: O(n<sup>2</sup>) <br>

Convert the string to a string array, iterate over each position, calculate the different with ones and add it to the answer array.

```java
class Solution {
    public int[] minOperations(String boxes) {
        String[] arr = boxes.split("");
        int len = arr.length;
        int[] answer = new int[len];

        for(int i = 0; i < len; i++){
            int res = 0;
            for(int j = 0; j < len; j++){
                if(i == j) continue;
                if(arr[j].equals("1")) res += Math.abs(j-i);
            }
            answer[i] = res;
        }
        return answer;
    }
}
```

## Usind DP-like solution

**Time**: O(n) <br>

```java
class Solution {
   public int[] minOperations(String boxes) {
    int[] res = new int[boxes.length()];
    for (int i = 0, ops = 0, cnt = 0; i < boxes.length(); ++i) {
       res[i] += ops;
       cnt += boxes.charAt(i) == '1' ? 1 : 0;
       ops += cnt;
    }
    for (int i = boxes.length() - 1, ops = 0, cnt = 0; i >= 0; --i) {
        res[i] += ops;
        cnt += boxes.charAt(i) == '1' ? 1 : 0;
        ops += cnt;
    }
    return res;
}
}
```

## Reflections

- To convert a string to an array we use `String[] arr = "string".split("")`, and `string.length()` for a string's size.
- Check [@votrubac LeetCode's solution](<https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/discuss/1075474/C%2B%2BJava-O(n)-LTR-%2B-RTL>)'s DP solution
