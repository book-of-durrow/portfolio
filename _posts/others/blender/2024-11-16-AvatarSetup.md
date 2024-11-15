---
layout: blender
title: アバターのセットアップ/ビルド/テスト
date: 2024-11-16
name: アバターのセットアップ/ビルド/テスト
categories: blender
---

1. Armatureの名前とBoneのRootの名前を一致させる。一致してれば名前は何でもいい。{% assign post = site.posts | where: "title", "アドオン" | first %}
2. MirrorなどのModifierをApplyする。[Apply Modifier]({{ post.url | relative_url }})を利用するとよい。
3. fbxを出力する。  
   ![出力設定]({{ "/assets/Others/Blender/Blender_FbxExport_2411160113.webp" | relative_url }}){:style="max-height: 800px; width: auto;"}
4. Unityにインポートする。
    - VCCを導入しておく。
    - 必要に応じてliltoonなども。
5. いくつか設定をする。  
   ![インポート設定]({{ "/assets/Others/Blender/Blender_UnityImportSettings_2411160134.webp" | relative_url }}){:style="max-height: 800px; width: auto;"}
   ![インポート設定]({{ "/assets/Others/Blender/Blender_UnityImportSettings_2411160136.webp" | relative_url }}){:style="max-height: 800px; width: auto;"}
   - Configure...をクリックしてうまく割り当てられていない部分を手動で割り当てる。
6. Add ComponentからVRC Avatar Descripterを追加する。
7. 各種設定をする（Viewは最低限設定したほうがいい。眼と眼の間に軽くめり込ませる。）
8. ビルドする  
   ![ビルド]({{ "/assets/Others/Blender/Blender_VRChatSDKBuild_2411160146.webp" | relative_url}}){:style="max-height: 800px; width: auto;"}
   - Online Publishingにチェックを入れなければローカルでのビルドになる。
9. VRChatを起動し、Avatar→Othersから選べるようになっている（はず）。選べば作ったアバターをテストできる。
