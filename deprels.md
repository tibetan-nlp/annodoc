---
layout: entry
title: Dependency relations 
---
Annotators are asked to attend to the following dependency relations:

{% for r in site.deprel %}
- [`{{ r.title }}`]({{ r.url | remove_first:'/' }})
{% endfor %}


