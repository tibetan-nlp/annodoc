---
layout: entry
title: Verbs 
---
This is a list of verb lemmas from Hill's verb dictionary:

{% for r in site.verb %}
- [{{ r.vid }}]({{ r.url | remove_first:'/' }}): {{ r.title }}
{% endfor %}