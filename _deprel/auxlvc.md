---
layout: entry
title: auxlvc 
---

Butt (2010:49) defines a *complex predicate* as:

> a construction that involves two or more predicational elements
> (such as nouns, verbs, and adjectives) which predicate as a single unit,
> i.e. their arguments map onto a monoclausal syntactic structure.

A *complex verb* is then a complex predicate where all (or more usually
both) predicates are verbs. In contrast, an auxiliary is a non-predicational
element that merely contributes TAME (tense, aspect, mood and evidentiality)
to a sentence.

It is useful to annotate complex verbs, and in some cases, we may wish to include specific complex verb constructions in the lexicon. However, doing so is not yet on a secure footing, since we have not carried out the requisite tests documented by Butt and others to show which examples count as complex verbs, and which do not.

Therefore, we adopt a flexible annotation scheme that allows us to identify complex verb constructions at any time, without having to change the dependency structure of a sentence. Since each verb contributes to the predication and argument structure, there is no correct verb from which to link arguments. In a basic dependency tree, however, a choice must be made, and so we link the arguments and obliques to the first verb. Subsequent verbs then depend on the first verb via the `aux:lvc` relation.

~~~ ann
ངས་བླ་མའི་དྲུང་དུ་ལོག་འོངས་པའི་ལམ་ལ།
T2751   PRON 0 1        ང
A2751a  PronType T2751 Prs
T2752   ADP 1 3 ས་
A2752a  Case T2752 Agn
T2753   NOUN 3 7        བླ་མ
A2753a  Number T2753 Sing
T2754   ADP 7 10        འི་
A2754a  Case T2754 Gen
T2755   NOUN 10 15      དྲུང་
A2755a  NounType T2755 Rel
T2756   ADP 15 18       དུ་
A2756a  Case T2756 Ter
T2757   VERB 18 22      ལོག་
T2758   VERB 22 28      འོངས་པ
A2758a  Tense T2758 Past
A2758b  VerbForm T2758 Vnoun
T2759   ADP 28 31       འི་
A2759a  Case T2759 Gen
T2760   NOUN 31 34      ལམ་
A2760a  Number T2760 Sing
T2761   ADP 34 35       ལ
A2761a  Case T2761 All
T2762   PUNCT 35 36     །
R26     obl Arg1:T2757 Arg2:T2755
R29     aux-lvc Arg1:T2757 Arg2:T2758
~~~
> ?? (CT, Mila 14b)

~~~ ann
དེའི་ཚེ་བླ་མ་ལ་གྲྭ་པ་རྟ་བས་བང་མགྱོགས་པ།
T3248   DET 0 2 དེ
A3248a  PronType T3248 Dem
T3249   ADP 2 5 འི་
A3249a  Case T3249 Gen
T3250   NOUN 5 8        ཚེ་
A3250a  NounType T3250 Rel
T3251   NOUN 8 13       བླ་མ་
A3251a  Number T3251 Sing
T3252   ADP 13 15       ལ་
A3252a  Case T3252 All
T3253   NOUN 15 21      གྲྭ་པ་
A3253a  Number T3253 Sing
T3254   NOUN 21 24      རྟ་
A3254a  Number T3254 Sing
T3255   ADP 24 27       བས་
A3255a  Case T3255 Cmp
T3256   VERB 27 30      བང་
A3256a  Tense T3256 Fut/Pres
T3257   VERB 30 38      མགྱོགས་པ
A3257a  Tense T3257 Past
A3257b  VerbForm T3257 Vnoun
T3258   PUNCT 38 39     །
R13     arg1 Arg1:T3256 Arg2:T3253
R14     aux-lvc Arg1:T3256 Arg2:T3257
~~~
> (CT, Mila 15b)



