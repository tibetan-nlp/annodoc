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

The following example shows _zhal 'dzum_ "to smile" with the honorific
prefix _zhal_ "mouth".

~~~ ann
བླ་མ་ཞལ་འཛུམ་པ་ཅིག་མཛད་ནས། ཁྱོད་ཀྱི་གཏམ་དེ་རྣམས་ལ་བརྟག་པར་བྱ་གསུང་།
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
T2501	PRON 27 32	ཁྱོད་
A2501a	PronType T2501 Prs
N2501	Reference T2501 Nonverbs:0221	ཁྱོད་√p
T2502	ADP 32 36	ཀྱི་
A2502a	Case T2502 Gen
N2502	Reference T2502 Nonverbs:0012	གྱི་√case
T2503	NOUN 36 40	གཏམ་
A2503a	Number T2503 Sing
T2504	DET 40 43	དེ་
A2504a	PronType T2504 Dem
N2504	Reference T2504 Nonverbs:0233	དེ་√d
T2505	DET 43 48	རྣམས་
A2505a	Number T2505 Plur
N2505	Reference T2505 Nonverbs:0305	རྣམས་√d
T2506	ADP 48 50	ལ་
A2506a	Case T2506 All
N2506	Reference T2506 Nonverbs:0028	ལ་√case
T2507	VERB 50 56	བརྟག་པ
A2507a	Tense T2507 Fut/Past
A2507b	VerbForm T2507 Vnoun
N2507	Reference T2507 Hill:0709	རྟོག་
T2508	ADP 56 58	ར་
A2508a	Case T2508 Ter
N2508	Reference T2508 Nonverbs:0051	དུ་√case
T2509	VERB 58 61	བྱ་
A2509a	Tense T2509 Fut
N2509	Reference T2509 Hill:1168	བྱེད་
T2510	VERB 61 66	གསུང་
T2511	PUNCT 66 67	།
R13	arg2-hon Arg1:T2495 Arg2:T2494
R14	arg1 Arg1:T2497 Arg2:T2493
R15	arg2 Arg1:T2497 Arg2:T2495
R16	argcl Arg1:T2510 Arg2:T2507
R17	aux Arg1:T2507 Arg2:T2509
R18	obl-arg Arg1:T2507 Arg2:T2503
~~~
> The lama smiled and replied, "I shall think over what you have said." [Mila 14b:T2493]

**Admin:** *Evaluate the following examples.*
```
/mila/011a?focus=T196
/mila/012b?focus=T1238
/mila/023a?focus=T8742
/mila/023b?focus=T8925
/mila/025a?focus=T10061
```
