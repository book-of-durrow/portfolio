---
layout: blender
title: LoopToolsの機能まとめ
date: 2024-11-18
name: LoopToolsの機能まとめ
categories: blender
---

## Bridge

![Bridge]({{ "/assets/Others/Blender/Blender_EdgeBridge_2411182136.webp" | relative_url }}){:style="max-width: 500px;"}

普通のBridge。正直デフォのBridgeのほうが機能が豊富なような……

これがデフォのBridge。  
![Default Bridge]({{ "/assets/Others/Blender/Blender_EdgeBridge_2411182139.webp" | relative_url }}){:style="width: auto;"}

こっちがLoopToolsのBridge。  
![LoopTools Bridge]({{ "/assets/Others/Blender/Blender_EdgeBridge_2411182142.webp" | relative_url }}){:style="width: auto;"}

調べた感じデフォのBridgeのほうが処理速度も速いようなので、デフォの方でいいと思います。これでないと出来ないことがない。

## Circle

![Circle]({{ "/assets/Others/Blender/Blender_Circle_2411182148.webp" | relative_url }}){:style="max-width: 500px;"}

円形に並べてくれるツール。

メニュー  
![Circle Menu]({{ "/assets/Others/Blender/Blender_Circle_Menu_2411182200.webp" | relative_url }}){:style="width: auto;"}

Flattenのチェックを外せば面に沿って円形にしてくれる。  
Regularにチェックを入れていると頂点の平均化も行う。
x、y、z方向に対してそれぞれ円形をかけるのをやめられる。Mayaの円形化だとこういうことは出来なかった気がする。

## Curve

![Curve]({{ "/assets/Others/Blender/Blender_Curve_2411182223.webp" | relative_url }}){:style="max-width: 500px;"}

2点を選択して実行すると直線化してくれる。  
ここにあったんだね、直線化……  
MayaだとCG自習部屋さんのツールとか使わないといけないやつ。Mayaってあのサイトなくなったらめっちゃ威力下がると思う。どうなってんだろうねホント。

Orientationを作成してからS → Shift + Y → 0とかで直線化するしかないのかと思ってたけど、これはいいね。

これにも軸固定がある。これも嬉しい。

![Curve ThreePoint]({{ "/assets/Others/Blender/Blender_Curve_2411182230.webp" | relative_url }}){:style="max-width: 500px;"}

3点を選択するとそれを補完するようにしてくれる。  
CubicとLinearから選べる。

メニュー  
![Curve Menu]({{ "/assets/Others/Blender/Blender_Curve_2411182237.webp" | relative_url }}){:style="width: auto;"}

Boundariesにチェックしないとエッジループの端から端まで計算してしまうので注意。

## Flatten

![Flatten Before]({{ "/assets/Others/Blender/Blender_Flatten_2411182243.webp" | relative_url }}){:style="max-height: 300px; width: auto;"}
![Flatten After]({{ "/assets/Others/Blender/Blender_Flatten_2411182244.webp" | relative_url }}){:style="max-height: 300px; width: auto;"}

表面を平らにしてくれる。

## Gstretch

ペンツールで引いた線まで辺を延長する。  
ぜってー使わんので割愛。知らべれば出ます。

## Loft

3つ以上のエッジループ間をBridgeするような感じの機能。

デフォのBridgeで同じことができるし、そっちのほうが機能が豊富に感じる。これも使わん。

## Relax

![Relax]({{ "/assets/Others/Blender/Blender_Relax_2411182300.webp" | relative_url }}){:style="max-width: 500px;"}

神機能。なめらか～にしてくれる。  
髪の毛とかモデリングしたいときに特に便利。いや、常に便利。

俺はQuick Favoritesに登録してある。それだけの価値がある。

![Relax Parallel]({{ "/assets/Others/Blender/Blender_Relax_2411182303.webp" | relative_url }}){:style="max-width: 500px;"}

InputをParallel(All)にすると全体に適用してくれる。マジ？　知らなかったそんなの……

なお、必ずエッジループに対して適用してください。面に対してやるとむしろグチャグチャになる。これはLoopToolsだ、忘れるな。

## Space

![Space]({{ "/assets/Others/Blender/Blender_Space_2411182310.webp" | relative_url }}){:style="max-width: 500px;"}

頂点間の距離をいい感じに調節してくれるっぽい。
