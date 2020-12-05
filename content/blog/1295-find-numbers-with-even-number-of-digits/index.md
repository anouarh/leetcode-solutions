---
title: Find Numbers with Even Number of Digits
date: "2020-11-20T20:37:03+00:00"
description: "Solution for LeetCode's Find Numbers with Even Number of Digits."
tags: ["array", "easy", "LeetCode"]
dataStructure: "Array"
difficulty: "Easy"
sourceWebsite: "LeetCode"
---

## Problem Statement

The problem statement can be found [here](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/).
The solution to the problem seems straightforward, iterate over all the elements and check whether their length is even.

## Iterate over all elements

**Time**: O(n) <br>

Iterate over all elements and check whether an element's length is even or not, increment result by one if it is.

```cpp
class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int result = 0;
        for(int i = 0; i < nums.size(); i++){
            string elementAsString = to_string(nums[i]);
            if(elementAsString.length()%2 == 0){
                result++;
            }
        }
        return result;
    }
};
```

## Only some numbers have an even number of digits

Only numbers between `10 and 99` or `1000 and 9999`, and `100000` have an even number of digits, taking advantage of the problem statement's constraint, <code>nums[i] <= 10<sup>5</sup> </code>.

```cpp
class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int n,count = 0;
        for(int i = 0; i < nums.size(); i++){
            n=nums[i];
            if(( 10<=n && n<=99) || (1000<=n && n<=9999 ) || ( n==100000 )){
                count++;
            }
        }
        return count;
    }
};
```

## Ressources that made me understand the problem

A key takeway is to alwas read input constraints carefully. <br>
[@huankimtran's LeetCode solution](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/discuss/461680/C%2B%2B-solution-100-runtime)
