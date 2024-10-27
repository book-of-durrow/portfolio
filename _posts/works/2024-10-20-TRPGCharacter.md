---
layout: default
title: TRPGキャラクター
image: /assets/TrpgCharacters/EraForkole/era_forkole.webp
date: 2024-10-18
categories: works
name: <span>TRPG</span><span>キャラクター</span>
description: "TRPGに使用したプレイヤーキャラクターの立ち絵です。"
---

<section>
    <h1><span>TRPG</span><span>キャラクター</span></h1>
    <h2>D&amp;D</h2>
    {% assign items = site.data.trpg_characters | where: "system", "DnD" %}
    <div class="gallery">
        {% for item in items %}
        <div class="gallery-item">
            <img src="{{ item.path | relative_url }}"
                 alt="{{ item.alt }}"
                 class="thumbnail thumbnail-character"
                 data-description="{% include {{ item.description }} %}">
            {{ item.name }}
        </div>
        {% endfor %}
    </div>

    <h2>CoC</h2>
    {% assign items = site.data.trpg_characters | where: "system", "CoC" %}
    <div class="gallery">
        {% for item in items %}
        <div class="gallery-item">
            <img src="{{ item.path | relative_url }}"
                 alt="{{ item.alt }}"
                 class="thumbnail thumbnail-character"
                 data-description="{% include {{ item.description }} %}{{ item.lost }}">
            <p>{{ item.name }}</p>
        </div>
        {% endfor %}
    </div>

    <h2>エモクロアTRPG</h2>
    {% assign items = site.data.trpg_characters | where: "system", "エモクロアTRPG" %}
    <div class="gallery">
        {% for item in items %}
        <div class="gallery-item">
            <img src="{{ item.path | relative_url }}"
                 alt="{{ item.alt }}"
                 class="thumbnail thumbnail-character"
                 data-description="{% include {{ item.description }} %}{{ item.lost }}">
            <p>{{ item.name }}</p>
        </div>
        {% endfor %}
    </div>

    <h2>サイバーパンクRED</h2>
    {% assign items = site.data.trpg_characters | where: "system", "サイバーパンクRED" %}
    <div class="gallery">
        {% for item in items %}
        <div class="gallery-item">
            <img src="{{ item.path | relative_url }}"
                 alt="{{ item.alt }}"
                 class="thumbnail thumbnail-character"
                 data-description="{% include {{ item.description }} %}{{ item.lost }}">
            <p>{{ item.name }}</p>
        </div>
        {% endfor %}
    </div>
</section>

<div class="modal" id="modal">
    <span class="close" id="close">&times;</span>
    <div class="modal-content">
        <div class="modal-img">
            <img id="modalImg" alt="拡大画像">
        </div>
        <div class="modal-text" id="modalCaption"></div>
    </div>
</div>
<script src="{{ site.baseurl }}/script/modal-window.js"></script>
