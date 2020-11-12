---
title: Sum of All Odd Length Subarrays
date: "2020-11-12T08:47:15+00:00"
description: "Solution for LeetCode's Sum of All Odd Length Subarrays."
tags: ["array", "easy"]
---

## Problem Statement

The problem statement can be found [here](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/).
A subarray of an array is a consecutive sequence of zero or more values taken out of that array.
For example the array `[1,5,4]` has 7 subarrays and 4 odd length subarrays in bold:
` `**`[1]`**` `**`[5]`**` `**`[4]`**`[1,5] [5,4]`**`[1,5,4]`**` `.

## Brute Force

**Time**: O(n<sup>3</sup>) <br>
**Space**: O(1)

First thing we would think about is iterating over all possible subarrays, make sure a given array is of odd length, then perform the sum operation.

```cpp
class Solution {
public:
    int sumOddLengthSubarrays(vector<int>& arr) {
        int sum = 0;
        for (int i = 0; i < arr.size(); ++ i) {
            for (int j = i; j < arr.size(); ++ j) {
                if (((j - i + 1) % 2) == 0) {
                    continue;
                }
                for (int k = i; k <= j; ++ k) {
                    sum += arr[k];
                }
            }
        }
        return sum;
    }
};
```

## Each element's contribution

**Time**: O(n) <br>
**Space**: O(1)

There are many ways of thinking about this problem, for instance one of the patterns that one could find is that each element has ` `**`(n-i)*(i+1)`**` ` contributions where ` `**`n`**` ` is the size of the array and ` `**`i`**` ` is the index of a given element.

Let's look at an example to understand the pattern better, the array `[1,3,2,6,5]` has these subarrays:

```
[1], [3], [2], [6], [5] #size 1
[1,3], [3,2], [2,6], [6,5] #size 2
[1,3,2], [3,2,6], [2,6,5] #size 3
[1,3,2,6], [3,2,6,5], [2,6,5] #size 4
[1,3,2,6,5] #size n = 5
```

If we manually count the occurences, we find that:

- `1` occurs 5 times,
- `3` occurs 8 times,
- `2` occurs 9 times,
- `6` occurs 8 times and
- `5` occurs 5 times.

We notice the pattern here since for example for the first element, `5 = (size of array - index of element)*(index of element + 1)`, and since the problem statement specifies that we only need odd length subarrays, we divide the number of occurences by 2 and ceil it (since the number of odd length subarrays always has one more).

```cpp
class Solution {
public:
    int sumOddLengthSubarrays(vector<int>& arr) {
        int result = 0, n = arr.size(), contribution = 0;
        for(int i = 0; i < n; i++){
            contribution = ceil(((n-i)*(i+1))*0.5);
            result += contribution*arr[i];
        }
        return result;
    }
};
```

## Ressources that made me understand the problem

[@lee215 LeetCode's solution](<https://leetcode.com/problems/sum-of-all-odd-length-subarrays/discuss/854184/JavaC%2B%2BPython-O(N)-Time-O(1)-Space>) <br>
[Stanford's solutions](https://web.stanford.edu/class/cs9/sample_probs/SubarraySums.pdf) <br>
[Random article I found in the internet](https://helloacm.com/algorithms-to-sum-of-all-odd-length-subarrays/)
