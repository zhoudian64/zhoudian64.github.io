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
BaseAddress+offset
$$

## Efficiency

_store_ and _select_ take _O(n)_ space.
And waste **0** space.

_index_ take _O(1)_ time.
And not able to _insert_/_delete_ element.

## 扩展Dope vectors

有意思地的是在翻阅Wiki时发现好像中文互联网上没有关于Dope Vector的有关翻译，而对于array's descriptor的东西似乎也只有Java部分的,
大概看了一下，其实就就是添加了对于一个Array的Metadata（元数据），从数组元素的元素大小，到元素的数量。
大致可以用作：
- 解决一些Buffer缓冲区攻击（没法越界了）
- 各种数组切片
- 颠倒元素索引
代价是空间复杂度加一个常数。