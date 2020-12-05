---
title: 2D Array - DS, Hourglass Problem
date: "2020-12-05T15:46:56+00:00"
description: "Solution for HackerRank's 2D Array Hourglass Problem."
tags: ["array", "easy", "HackerRank"]
dataStructure: "Array"
difficulty: "Easy"
sourceWebsite: "HackerRank"
---

## Problem Statement

The problem statement can be found [here](https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays).

## Brute Force

Since the 2D Array has a fixed length, it is okay to go ahead and do a brute force on this problem.
It is good to know that iterating through a 2D array is done using **two nested for loops**, the first index loops through the **rows**, the second through **columns** `int arr[rows][columns]`. We don't iterate all the way to the end because we wouldn't get an hourglass. We calculate the top, middle and bottom values per hourglass, add them and compare that to the lowest possible sum (`7 * -9 = 63`) and get a the max out of those two.

```java
static int hourglassSum(int[][] arr) {
    int rows = arr.length;
    int columns = arr[0].length;

    int maxSum = -63;

    for(int i = 0; i < rows - 2; i++){
        for(int j = 0; j < rows - 2; j++){
            int top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            int middle = arr[i+1][j+1];
            int bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            int hourglass = top + middle + bottom;

            maxSum = Math.max(hourglass, maxSum);
        }
    }
    return maxSum;
}
```

## Ressources that made me understand the problem

[Nick White's Youtube video](<https://www.youtube.com/watch?v=0lajFzeFEFo>) <br>
[HackerRank's Discussions](<https://www.hackerrank.com/challenges/2d-array/editorial>)