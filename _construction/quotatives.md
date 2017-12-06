---
layout: entry
title: Quotatives 
---

We tag _ces_, _zhes_ and related words as `VERB` because of their etymology and
because of the existence of variant forms like _ce na_ and _ces pa_.
However, the usage of these words suggests that they are quotative clitics.
The allomorphs _ces_ and _zhes_ depend on the final of the preceding syllable,
which bespeaks their qualification as function words. In general, they are also
optional, unlike typical verbal predicates. For these reasons, we ignore such
words when annotating verb dependencies.

~~~ ann
གྲལ་པ་རྣམས་སྙན་གསན་པར་ཞུ་ཞེས་བརྗོད་ནས།
T218    NOUN 0 6        གྲལ་པ་
A218a   Number T218 Sing
T219    DET 6 11        རྣམས་
A219a   Number T219 Plur
T220    NOUN 11 15      སྙན་
A220a   Number T220 Sing
T221    VERB 15 20      གསན་པ
A221a   Tense T221 Past/Pres
A221b   VerbForm T221 Vnoun
T222    ADP 20 22       ར་
A222a   Case T222 Ter
T223    VERB 22 25      ཞུ་
A223a   Tense T223 Fut/Pres
T224    VERB 25 29      ཞེས་
A224a   Mood T224 Qot
T225    VERB 29 35      བརྗོད་
A225a   Tense T225 Past
T226    SCONJ 35 37     ནས
A226a   Case T226 Ela
T227    PUNCT 37 38     །
R39     arg1 Arg1:T221 Arg2:T218
R79     argcl Arg1:T223 Arg2:T221
R40     argcl Arg1:T225 Arg2:T223
~~~
> She said: ‘elders, please listen closely’. (CT - Mila 11a)

In this example, the head of the embedded clause _zhu_ depends
directly on the matrix verb _brjod_, without paying any notice
of the intervening _zhes_. In future, when functional dependencies
are added to the trees, _zhes_ will probably be treated like a
complementizer using the relation
[`mark`](http://universaldependencies.org/u/dep/mark.html).


