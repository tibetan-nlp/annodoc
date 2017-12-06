---
layout: entry
title: Complex predicates 
---
Butt (2010:49) defines a *complex predicate* as:

> a construction that involves two or more predicational elements
> (such as nouns, verbs, and adjectives) which predicate as a single unit,
> i.e. their arguments map onto a monoclausal syntactic structure.

A *complex verb* is then a complex predicate where all (or more usually
both) predicates are verbs. In contrast, an auxiliary is a non-predicational
element that merely contributes TAME (tense, aspect, mood and evidentiality)
to a sentence.

Like other languages of the region, Tibetan has a wealth of idiomatic light verb
constructions. Usually these consist of a `NOUN` without any case marking followed
by a semantically bleached `VERB`. Some such verbs are used with many different
nouns to form different light verb constructions, whereas other verbs are
limited to occur with only one or a small number of nouns.

A satisfactory verb lexicon for Tibetan needs to include those `NOUN` + `VERB`
collocations that convey fundamental verbal meanings in the language. Therefore,
when feasible we ask annotators to explicitly encode a light verb construction
by marking the noun with the subtyped relation `arg2:lvc`. The sub-type `lvc`
stands for "light verb construction" and has precedent in
[other UD treebanks](http://universaldependencies.org/ext-dep-index.html):
Hungarian has `dobj:lvc`, while Persian and Turkish have `compound:lvc`.
We also have found a few instances of `arg1:lvc`.



