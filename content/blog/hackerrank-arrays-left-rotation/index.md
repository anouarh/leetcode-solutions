---
title: "Arrays Left Rotation Problem"
date: "2020-12-05T19:49:06+00:00"
description: "Solution for HackerRank's Arrays Left Rotation Problem."
tags: ["array", "easy", "HackerRank"]
dataStructure: "Array"
difficulty: "Easy"
sourceWebsite: "HackerRank"
---

## Problem Statement

The problem statement can be found [here](https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays).

## Brute Force

The idea here is pretty straightforward, we can calculate each element's new position using modular arithmetic.
The new position is `(currentIndex - numberOfRotations + arrayLength) [mod] arrayLength `

```java
static int[] rotLeft(int[] a, int d) {
    // Get input array's length
    int arrLength = a.length;
    // Initialize new array with the same size
    int[] result = new int[arrLength];

    // Iterate over array
    for(int i = 0; i < arrLength; i++){
        // Calculate the new index
        int newIndex = ((i - d) + arrLength) % arrLength ;
        // Put the current element in the new array in the new calculated position
        result[newIndex] = a[i];
    }
    // Return the new array
    return result;
}
```
