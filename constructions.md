---
layout: entry
title: Linguistic constructions 
---
The following linguistic constructions require special mention:

{% for c in site.construction %}
- [`{{ c.title }}`]({{ c.url | remove_first:'/' }})
{% endfor %}


