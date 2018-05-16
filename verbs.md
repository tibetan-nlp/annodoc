---
layout: entry
title: Verbs 
---
This is a list of verb lemmas from Hill's verb dictionary:

{% assign verbs = site.verb | sort %}
{% for r in verbs %}
- [{{ r.title }}]({{ r.url | remove_first:'/' }})
{% endfor %}