---
layout: blender
title: 頂点を直線化
date: 2024-11-16
name: 頂点を直線化
categories: blender
---

S→X→0でX軸方向のスケールを0にする。  
→つまり基準点に沿って直線化する。

他の軸についてもできるし、Pivotを3Dカーソルにすることもできる。

S→Shift + X→0とかもできる。

{% assign post = site.posts | where: "title", "Blenderの基本操作" | first %}
[カスタム軸を作っておけば]({{ post.url | relative_url }}#add-transform-orientation)、2点間の直線に対して直線化することもできる。
