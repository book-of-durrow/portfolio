---
layout: default
title: プログラミング系の情報
categories: others
name: プログラミング系の情報
---

<h1>{{ page.title }}</h1>

{% assign posts = site.posts | where: "categories", "programming" | reverse %}

<div class="flex-center cards cards-column">
    {% for post in posts %}
        <a href="{{ post.url | relative_url }}"
           class="flex-center card card-outline card-clickable card-others">
            <div class="card-title">
                {{ post.name }}
            </div>
        </a>
    {% endfor %}
</div>
