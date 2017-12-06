---
layout: entry
title: LIM Annotation Documentation  
---

This site provides documentation of the annotation scheme for
Tibetan language texts used by the project *Lexicography in Motion* (LIM)
based at SOAS University of London and the Bavarian Academy of Sciences
and Humanities (_Bayerische Akademie der Wissenschaften_) in Munich.
The project is focused on verbs.  Our primary objective is to
annotate the predicate-argument structure of verbs in the service
of building a corpus-based Tibetan verb lexicon.

Where possible, our annotation scheme follows the guidelines of the
[Universal Dependencies](http://universaldependencies.org/) project.

Please see the following pages for further details.

- General background
    - [Dependency grammar](/lim-annodoc/depgram)
- Project specific
    - [Part-of-speech tags](/lim-annodoc/postags)
    - [Annotation principles]](/lim-annodoc/principles))
    - [Dependency relations](/lim-annodoc/deprels)
    - [Linguistic constructions])/lim-annodoc/constructions)


In Tibetan, verbal arguments are often inferred from the context or from previous
discourse. In the following example, the verb is linked to its `arg2`,
but `arg1` is not present.

~~~ ann
ཡི་གེ་དེ་བླ་མ་ལ་ཕུལ།
T5796 NOUN 0 6    ཡི་གེ་
A5796a  Number T1 Sing
T5797 DET 6 9 དེ་√d
A5797a  PronType T1 Dem
T5798 NOUN 9 14  བླ་མ་
A5798a  Number T3 Sing
T5799 ADP 14 16	ལ་
A5799a  Case T487 All
T5800 VERB 16 19 འབུལ་
T5801 PUNCT 19 20	།
R1  arg2 Arg1:T5800 Arg2:T5796
R2  obl-arg Arg1:T5800 Arg2:T5798
~~~
> _(He) presented the letter to the lama._ (CT - Mila 19a:T5796)

Provided that the argument that does appear
is annotated as `arg2`, then it is not necessary to insert a zero
element for the missing `arg1`. It is understood that a two-place predicate must
have an `arg1` argument - therefore, a sentence with an `arg2` must have
a missing `arg1`.

This reasoning does not allow us to distinguish between a saturated
one-place predicate and a two-place predicate with a missing `arg2`.
Nor does it allow us to determine how many arguments a verb has when
none of its arguments are overt.

In an earlier version of this documentation, we proposed to handle
such difficulties by labeling each verb with its argument structure.
However, doing so comes with problems of its own. It can be difficult,
especially during the early days of our understanding, to distinguish
between a required but missing argument and something that just isn't
there, Forcing annotators to make this decision is not always
helpful, and the gain made by doing so is not always obvious -
we have so far identified few verbs that occur in the same form with multiple
argument structures.

This section gives examples of the various argument relations. Because
arguments can generally be omitted, care must be taken
to assign the correct roles to the arguments that are overt.

### Obliques

We use the [`obl`](http://universaldependencies.org/u/dep/obl.html) relation
to mark unmarked nominals that act as adverbials, and arguments marked with
adpositions other than agentive case, regardless of whether or not they are
considered to be arguments of the verb.


