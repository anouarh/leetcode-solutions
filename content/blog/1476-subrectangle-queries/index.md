---
title: Subrectangle Queries
date: "22021-05-11T14:44:35+00:00"
description: "Solution for LeetCode's Subrectangle Queries."
tags: ["array", "medium", "LeetCode"]
dataStructure: "Array"
difficulty: "Medium"
sourceWebsite: "LeetCode"
---

## Problem Statement

The problem statement can be found [here](https://leetcode.com/problems/subrectangle-queries/).
The gist of it is that you need to finish writing a class that takes in as input a matrix and updates values of a sub-matrix.

## Iterate over all elements

**Time**: O(n\*m) <br>
**Space**: O(1)

Iterating over all required matrix elements and updating the value.

```cpp
class SubrectangleQueries {

    private int[][] rectangle;

    public SubrectangleQueries(int[][] rectangle) {
        this.rectangle = rectangle;
    }

    public void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        for(int i = row1; i <= row2; i++){
            for(int j = col1; j <= col2; j++){
                this.rectangle[i][j] = newValue;
            }
        }
    }

    public int getValue(int row, int col) {
        return this.rectangle[row][col];
    }
}
};
```

## Ressources that made me understand the problem, Another approach

[@rock LeetCode's solution](<https://leetcode.com/problems/subrectangle-queries/discuss/685352/JavaPython-3-Two-methods%3A-change-input-and-not-w-brief-analysis.) where he stores the operations' histories but like @theleetman said in the comments "I wouldn't say the 2nd version is time optimized. It's just different (not better or worse - better in some cases and worse in other). O(histories.size()) can be a lot more than mn (after a lot more than mn update queries)." <br>
