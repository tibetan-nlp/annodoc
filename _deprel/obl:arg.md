---
layout: entry
title: obl:arg
shortdef: an oblique marked nominal, which is considered an argument of the verb
---
`obl:arg` (occasionally seen as `obl-arg` in the BRAT UI)
is used for nominals with oblique case-marking which are
nevertheless considered core verbal arguments.

A typical case of `obl:arg` would be to mark the third required argument
of verbs of transfer, such as _sprod_ "to give" and _'dzugs_ "to set down (?)".

~~~ ann
ཁོ་རང་འཆི་ཁར་ནོར་བདག་པོ་ལ་སྤྲད་པ་ཡིན།
T409	PRON 0 3	ཁོ་
A409a	PronType T409 Prs
T410	PRON 3 6	རང་
A410a	Reflex T410 Yes
T411	VERB 6 10	འཆི་
A411a	Tense T411 Fut/Pres
T412	NOUN 10 11	ཁ
A412a	NounType T412 Rel
T413	ADP 11 13	ར་
A413a	Case T413 Ter
T414	NOUN 13 24	ནོར་བདག་པོ་
A414a	Number T414 Sing
T415	ADP 24 26	ལ་
A415a	Case T415 All
T416	VERB 26 33	སྤྲད་པ་
A416a	VerbForm T416 Vnoun
T417	AUX 33 36	ཡིན
T418	PUNCT 36 37	།
R15	arg1 Arg1:T411 Arg2:T409
R16	aux Arg1:T416 Arg2:T417
R17	obl-arg Arg1:T416 Arg2:T414
~~~
> When he died, these possessions were returned to their owner. ([Mila 11b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/011b?focus=T416))

~~~ ann
ཨ་ཁུ་དང་ཨ་ནེ་ལ་ཤ་ཁོག་འཛུགས།
T120	NOUN 0 5	ཨ་ཁུ་
A120a	Number T120 Sing
T121	ADP 5 8	དང་
A121a	Case T121 Com
T122	NOUN 8 13	ཨ་ནེ་
A122a	Number T122 Sing
T123	ADP 13 15	ལ་
A123a	Case T123 All
T124	NOUN 15 21	ཤ་ཁོག་
A124a	Number T124 Sing
T125	VERB 21 26	འཛུགས
A125a	Tense T125 Pres
T126	PUNCT 26 27	།
R21	arg2 Arg1:T125 Arg2:T124
R22	obl-arg Arg1:T125 Arg2:T122
~~~
> To my aunt and uncle we presented an entire animal carcass. ([Mila 11a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/011a?focus=T125))

Other verbs may also subcategorise for `obl:arg`; note the argument structure of _byed_ "to make" and _'tshod_ "to cook/boil".

~~~ ann
ནས་དཀར་མོ་མང་པོ་ལ་ཕྱེ་བྱས། ནག་མོ་མང་པོ་ཆང་དུ་བཙོས་པས།
T44     NOUN 0 3        ནས་
A44a    Number T44 Coll
T45     ADJ 3 10        དཀར་མོ་
T46     ADJ 10 16       མང་པོ་
T47     ADP 16 18       ལ་
A47a    Case T47 All
T48     NOUN 18 22      ཕྱེ་
A48a    Number T48 Sing
T49     VERB 22 25      བྱས
A49a    Tense T49 Past
T50     PUNCT 25 26     །
T52	ADJ 27 33	ནག་མོ་
T53	ADJ 33 39	མང་པོ་
T54	NOUN 39 42	ཆང་
A54a	Number T54 Coll
T55	ADP 42 45	དུ་
A55a	Case T55 Ter
T56	VERB 45 51	བཙོས་པ
A56a	Tense T56 Past
A56b	VerbForm T56 Vnoun
T57	ADP 51 52	ས
A57a	Case T57 Agn
T58	PUNCT 52 53	།
R3      arg2-lvc Arg1:T49 Arg2:T48
R4      obl-arg Arg1:T49 Arg2:T44
R3	arg2-lvc Arg1:T49 Arg2:T48
R4	obl-arg Arg1:T49 Arg2:T44
R12	obl-arg Arg1:T56 Arg2:T54
R11	arg2 Arg1:T56 Arg2:T52
~~~
> He ground a large amount of white barley into flour, and brewed a good deal of black barley into beer. ([Mila 11a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/011a?focus=T56))
