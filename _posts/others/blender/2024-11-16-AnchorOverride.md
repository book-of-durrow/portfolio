---
layout: blender
title: 頭と身体でシェーディングが違う
date: 2024-11-16
name: 頭と身体でシェーディングが違う
categories: blender
---

{% assign post = site.posts | where: "title", "Blender 備忘録" | first %}
[←{{ post.title }}]({{ post.url | relative_url }})

顔と身体でシェーディングが違うのは、オブジェクトが分かれている場合にライトが別々に計算されるため。  
計算の中心になるポイントを統一すれば解決する。

Anchor Overrideを適当なボーンなどで設定する（今回はChest）。

![Anchor Override]({{ "/assets/Others/Blender/Blender_AnchorOverride_2411160202.webp" | relative_url }}){:style="max-height: 800px; width: auto;"}

---

インスペクタがグレーになってて設定できないんだけど！？

→モデルをsceneのhierarchyに出してscene内のモデルに対して設定してください。
