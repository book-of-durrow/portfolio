---
layout: default
title: エラ・フォルコール
image: /assets/TrpgCharacters/EraForkole/era_forkole.webp
name: エラ・フォルコール
categories: "pc-diffs"
pos: "style='top: -150px;'"
---

{% assign images = site.static_files | where_exp: "item", "item.path contains 'assets/TrpgCharacters/EraForkole'" %}
{% include pc_diff.html images=images %}

{% assign post = site.posts | where: "title", "PC差分" | first%}
{% include back_button.html post=post %}

<div class="modal" id="modal">
    <span class="close" id="close">&times;</span>
    <div class="modal-content">
        <img id="modalImg" alt="拡大画像">
    </div>
</div>

<script src="{{ site.baseurl }}/script/modal-window.js"></script>
