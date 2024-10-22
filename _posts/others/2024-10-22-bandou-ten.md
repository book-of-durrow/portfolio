---
layout: default
title: 坂東 天
image: /assets/TrpgCharacters/BandouTen/bandou_ten.webp
name: 坂東 天
categories: "pc-diffs"
pos: "style='top: -20px;'"
---

{% assign images = site.static_files | where_exp: "item", "item.path contains 'assets/TrpgCharacters/BandouTen'" %}
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
