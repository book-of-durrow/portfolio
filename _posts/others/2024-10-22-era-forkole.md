---
layout: default
title: エラ・フォルコール
image: /assets/TrpgCharacters/EraForkole/era_forkole.webp
name: エラ・フォルコール
categories: "pc-diffs"
pos: "style='top: -150px; height: 500px;'"
---

{% assign images = site.static_files | where_exp: "item", "item.path contains 'assets/TrpgCharacters/EraForkole'" %}
<div class="gallery">
    {% for image in images %}
        {% assign meta = site.data.pc-diffs | where: "path", image.path | first %}
        <div class="gallery-item">
            <img src="{{ image.path | relative_url }}"
                alt="{{ image.name }}"
                class="thumbnail character"
                data-description="{{ meta.caption | default: "" }}">
            <p>{{ meta.caption }}</p>
        </div>
    {% endfor %}
</div>

{% assign post = site.posts | where: "title", "PC差分" | first%}
{% include back_button.html post=post %}

<div class="modal" id="modal">
    <span class="close" id="close">&times;</span>
    <div class="modal-content">
        <img id="modalImg" alt="拡大画像">
    </div>
</div>

<script src="{{ site.baseurl }}/script/modal-window.js"></script>
