---
layout: entry
title: Verbs 
---
Here is a list of verb lemmas with associated numeric ids as
extracted from Nathan Hill's verb dictionary. See 
[github](https://github.com/tibetan-nlp/lexicon-of-tibetan-verb-stems)
for further details.

{% assign verbs = site.verb | sort: 'vcount' % }
{% for r in verbs %}
- [{{ r.vid }}]({{ r.url | remove_first:'/' }}): {{ r.title }} ({{ r.vcount }})
{% endfor %}