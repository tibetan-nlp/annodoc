---
layout: entry
title: Verbs 
---
Here is a list of verb lemmas with associated numeric ids as
extracted from Nathan Hill's verb dictionary. See 
[github](https://github.com/tibetan-nlp/lexicon-of-tibetan-verb-stems)
for further details.

{% for r in site.verb %}
- [{{ r.vid | slice: 5 }}]({{ r.url | remove_first:'/' }}): {{ r.title }}
{% endfor %}