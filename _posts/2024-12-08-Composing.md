---
layout: default
title: 作曲
categories: others
name: 作曲
---
<h1>{{ page.title }}</h1>

{% assign posts = site.posts | where: "categories", "composing" | reverse %}

<div class="flex-center cards cards-column">
    {% for post in posts %}
        <a href="{{ post.url | relative_url }}"
           class="flex-center card card-outline card-clickable card-others">
            <div class="card-title">
                <h2>{{ post.name }}</h2>
            </div>
        </a>
    {% endfor %}
</div>
