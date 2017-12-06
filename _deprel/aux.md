---
layout: entry
title: aux 
shortdef: a verb which follows and functionally modifies the main verb
---

The [`aux`](http://universaldependencies.org/u/dep/aux_.html)
relation is used to link functional auxiliaries to main verbs.

Modal verbs such as དགོས་ 'need to', ནུས་ 'able to', and འདོད་ 'want to'
fall under this category when used after main verbs, as in the
following example:

~~~ ann
ཨ་ཁུ་དང་ཨ་ནེ་ལ་ངོ་མི་ཚ་བ་ཅིག་བྱེད་དགོས་
T861    NOUN 0 5    ཨ་ཁུ་
A861a   Number T861 Sing
T862    ADP 5 8     དང་
A862a   Case T862 Com
T863    NOUN 8 13    ཨ་ནེ་
A863a   Number T863 Sing
T864    ADP 13 15     ལ་
A864a   Case T864 All
T865    NOUN 15 18    ངོ་
A865a   Number T865 Sing
T866    PART 18 21    མི་
A866a   Polarity T866 Neg
T867    VERB 21 25    ཚ་བ་
A867a   Tense T867 Fut/Pres
A867b   VerbForm T867 Vnoun
T868    DET 25 29     ཅིག་
A868a   PronType T868 Ind
T869    VERB 29 34    བྱེད་
A869a   Tense T869 Pres
T870    VERB 34 39    དགོས་
A870a   VerbType T870 Aux
R37     arg1 Arg1:T867 Arg2:T865
R38     argcl Arg1:T869 Arg2:T867
R38     argcl Arg1:T869 Arg2:T867
R39     aux Arg1:T869 Arg2:T870
R84     obl Arg1:T869 Arg2:T863
~~~

When used in periphrastic constructions to mark tense or aspect,
copulas (`x` and `x n`) also depend on main verbs or verbal nouns via
the `aux` relation.

We adhere to the
[UD guidelines](http://universaldependencies.org/u/overview/syntax.html)
regarding stacked auxiliaries:

> ... multiple function words related to the same content word always appear as siblings, never in a nested structure, regardless of their interpretation. A typical case is that of auxiliary verbs, which never depend on each other.


