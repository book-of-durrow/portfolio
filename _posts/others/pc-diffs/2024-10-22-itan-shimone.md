---
layout: default
title: 伊丹 霜音
image: /assets/TrpgCharacters/ItanShimone/itan_shimone.webp
name: 伊丹 霜音
categories: "pc-diffs"
pos: "style='position: relative; top: -30px; left: 20px;'"
---

{% assign images = site.static_files | where_exp: "item", "item.path contains 'assets/TrpgCharacters/ItanShimone'" %}
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
