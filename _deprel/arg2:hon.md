---
layout: entry
title: arg2:hon
shortdef: the second argument of a verb, which functions to make the verb honorific
---
Complex honorific verbs in Tibetan are formed by prepending an honorific `NOUN`
to a `VERB`. We cannot yet formally distinguished these examples from
other `arg2` constructions. However, it is important to for them to be
catalogued separately in case they should be included in the verb lexicon.

In the following example, we code the honorific noun སྐུ་ as a subtyped
`arg2:hon` of the verb གཤེགས་. This distinguishes such cases from other
`arg2` or light verb constructions.

~~~ ann
ཡབ་མི་ལ་ཤེས་རབ་རྒྱལ་མཚན་སྐུ་གཤེགས་
T104  NOUN 0 3  ཡབ་
A104a Number T104 Sing
T105  PROPN 3 24  མི་ལ་ཤེས་རབ་རྒྱལ་མཚན་
T106  NOUN 24 28  སྐུ་
A106a Number T106 Sing
T107  VERB 28 34  གཤེགས་
R14 arg1 Arg1:T107 Arg2:T104
R85 arg2:hon Arg1:T107 Arg2:T106
~~~

~~~ ann
བླ་མ་ཞལ་འཛུམ་པ་ཅིག་མཛད་ནས།
T2493	NOUN 0 5	བླ་མ་
A2493a	Number T2493 Sing
T2494	NOUN 5 8	ཞལ་
A2494a	Number T2494 Sing
T2495	VERB 8 15	འཛུམ་པ་
A2495a	VerbForm T2495 Vnoun
T2496	DET 15 19	ཅིག་
A2496a	PronType T2496 Ind
T2497	VERB 19 23	མཛད་
A2497a	Tense T2497 Past/Pres
T2498	SCONJ 23 25	ནས
A2498a	Case T2498 Ela
T2499	PUNCT 25 26	།
R13	arg2-hon Arg1:T2495 Arg2:T2494
R14	arg1 Arg1:T2497 Arg2:T2493
R15	arg2 Arg1:T2497 Arg2:T2495
~~~
> The lama smiled and... [Mila 14b:T2493]

**Admin:** *Evaluate the following examples.*
```
/mila/011a?focus=T196
/mila/012b?focus=T1238
/mila/023a?focus=T8742
/mila/023b?focus=T8925
/mila/025a?focus=T10061
```
