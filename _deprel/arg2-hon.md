---
layout: entry
title: arg2:hon
shortdef: the second argument of a verb, which functions to make the verb honorific
---
Complex honorific verbs in Tibetan are formed by prepending an honorific `NOUN` -
often a body part noun - to a `VERB`. We cannot yet formally distinguished these examples
from other `arg2` constructions. However, it is important to for them to be
catalogued separately in case they should be included in the verb lexicon.

arg2:honནི་ཕྲད་མེད་པ་དང་བྱེད་པ་པོ་མ་ཡིན་པ་སོགས་arg2 དང་ཕལ་ཆེར་མཚུངས་ཀྱང་མིང་ཚིག་དང་བྱ་ཚིག་གཉིས་ཀ་ཞེ་ས་ཡིན་པའམ་བྱ་ཚིག་དང་མིང་ཚིག་གང་རུང་ཞེ་ས་ཡིན་དགོས། དཔེར་ན། སྐུ་གཤེགས། ཞལ་མཇལ། ཐུགས་སྐྲག ཐུགས་ཁྲོས། ཞལ་འཛུམ།

In the following example, we code the honorific noun _sku_ "body" as a subtyped
`arg2:hon` of the verb _gshegs_ "to depart/die". This distinguishes such cases from other
`arg2` or light verb constructions.

~~~ ann
ངས་ཡབ་མི་ལ་ཤེས་རབ་རྒྱལ་མཚན་སྐུ་གཤེགས་ཚུལ་ནས། ཨ་ཁུ་དང་ཨ་ནེས་སྡུག་པོ་བཏང་ཚུལ་རྣམས་ངུ་ངག་གིས་རྒྱས་པར་ཞུས་པས།
T3101	PRON 0 1	ང
A3101a	PronType T3101 Prs
T3102	ADP 1 3	ས་
A3102a	Case T3102 Agn
T3103	NOUN 3 6	ཡབ་
A3103a	Number T3103 Sing
T3104	PROPN 6 27	མི་ལ་ཤེས་རབ་རྒྱལ་མཚན་
T3105	NOUN 27 31	སྐུ་
A3105a	Number T3105 Sing
T3106	VERB 31 41	གཤེགས་ཚུལ་
A3106a	VerbForm T3106 Vnoun
T3107	ADP 41 43	ནས
A3107a	Case T3107 Ela
T3108	PUNCT 43 44	།
T3110	NOUN 45 50	ཨ་ཁུ་
A3110a	Number T3110 Sing
T3111	ADP 50 53	དང་
A3111a	Case T3111 Com
T3112	NOUN 53 57	ཨ་ནེ
A3112a	Number T3112 Sing
T3113	ADP 57 59	ས་
A3113a	Case T3113 Agn
T3114	NOUN 59 67	སྡུག་པོ་
A3114a	Number T3114 Sing
T3115	VERB 67 75	བཏང་ཚུལ་
A3115a	Tense T3115 Past
A3115b	VerbForm T3115 Vnoun
T3116	DET 75 80	རྣམས་
A3116a	Number T3116 Plur
T3117	VERB 80 83	ངུ་
A3117a	Tense T3117 Fut/Pres
T3118	NOUN 83 86	ངག་
A3118a	Number T3118 Sing
T3119	ADP 86 90	གིས་
A3119a	Case T3119 Agn
T3120	VERB 90 96	རྒྱས་པ
A3120a	Tense T3120 Past
A3120b	VerbForm T3120 Vnoun
T3121	ADP 96 98	ར་
A3121a	Case T3121 Ter
T3122	VERB 98 103	ཞུས་པ
A3122a	Tense T3122 Past
A3122b	VerbForm T3122 Vnoun
T3123	ADP 103 104	ས
A3123a	Case T3123 Agn
T3124	PUNCT 104 105	།
R74	arg2-hon Arg1:T3106 Arg2:T3105
R75	arg1 Arg1:T3106 Arg2:T3103
R76	arg2-lvc Arg1:T3115 Arg2:T3114
R77	arg1 Arg1:T3115 Arg2:T3112
R78	obl-adv Arg1:T3122 Arg2:T3120
R79	obl Arg1:T3122 Arg2:T3118
R80	argcl Arg1:T3122 Arg2:T3115
~~~
> Sobbing, I described at length about how my father Mila Sherab Gyaltsen died and about the ways in which my uncle and aunt then tormented us. ([Mila 15a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/015a?focus=T3106))

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
T2502	ADP 32 36	ཀྱི་
A2502a	Case T2502 Gen
T2503	NOUN 36 40	གཏམ་
A2503a	Number T2503 Sing
T2504	DET 40 43	དེ་
A2504a	PronType T2504 Dem
T2505	DET 43 48	རྣམས་
A2505a	Number T2505 Plur
T2506	ADP 48 50	ལ་
A2506a	Case T2506 All
T2507	VERB 50 56	བརྟག་པ
A2507a	Tense T2507 Fut/Past
A2507b	VerbForm T2507 Vnoun
T2508	ADP 56 58	ར་
A2508a	Case T2508 Ter
T2509	VERB 58 61	བྱ་
A2509a	Tense T2509 Fut
T2510	VERB 61 66	གསུང་
T2511	PUNCT 66 67	།
R13	arg2-hon Arg1:T2495 Arg2:T2494
R14	arg1 Arg1:T2497 Arg2:T2493
R15	arg2 Arg1:T2497 Arg2:T2495
R16	argcl Arg1:T2510 Arg2:T2507
R17	aux Arg1:T2507 Arg2:T2509
R18	obl-arg Arg1:T2507 Arg2:T2503
~~~
> The lama smiled and replied, "I shall think over what you have said." ([Mila 14b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/014b/focus=T2495))
