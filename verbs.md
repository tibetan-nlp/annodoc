---
layout: entry
title: Verbs 
---
This is a list of verb lemmas from Hill's verb dictionary:

{% for r in site.verb %}
- [`{{ r.title }}`]({{ r.url | remove_first:'/' }})
{% endfor %}
