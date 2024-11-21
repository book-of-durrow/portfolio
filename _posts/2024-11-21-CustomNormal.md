---
layout: blender
title: 法線情報が自動計算されなくなった場合
date: 2024-11-21
name: 法線情報が自動計算されなくなった場合
categories: blender
---

法線の情報が自動で更新されなくなり、ExtrudeやMergeなどのたびに法線がおかしくなる場合がある。

そういうときは右のメニュー（Modifierとかが並んでるところ）からObjectData → GeometryDataの中を見て、カスタム法線データを削除すればいい。  
そうするとMayaでいう法線ロックを解除したときのように、編集に合わせて法線情報が変わってくれる。

ただし、当然ながら自分で調整していた法線情報は失われるので、自分で細かく調整している場合は気をつけよう。  
そういう場合は、法線がおかしい場所を選択してAlt + N → Reset Normalsを選択すれば部分的にリセットできる。