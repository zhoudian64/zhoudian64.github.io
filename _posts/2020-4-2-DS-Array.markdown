---
title: DS - Array
layout: post
category: DataStructure
data: 2020-4-2
---

# DS - Array

## introduction 

From wiki :: is a data structure consisting of collection of elements, identified by at least one array index or key.
And the position can be **computed** from its index tuple by a mathematical formula.
Simplest, linear array all called one-dimensional array.

So, actually, they don't need to be stored at contiguous memory locations.
Only need to be contiguous after the Map-function, which is mentioned above as 'computed'.
Also, thought as _O(1)_ indexing.
So those Low-level language always keep them simple.
Just don't need that map and easily got it's element by 
$$
base-address+offset
$$

## Efficiency

_store_ and _select_ take _O(n)_ space.
And waste **0** space.

_index_ take _O(1)_ time.
And not able to _insert_/_delete_ element.

