---
layout: entry
title: arg3
shortdef: the third argument or "indirect object" of a verb, which cannot be oblique
---
When a verb has two unmarked arguments in addition to having an `arg1` argument, then we classify it as a three-place predicate with no obliques, and the third argument is marked `arg3`. Therefore, `arg3` might be seen as functionally equivalent to the UD relation [`iobj`](http://universaldependencies.org/u/dep/iobj.html), but is preferred as the less opinionated label.

The instances of `arg3` that we have found fall into two types. In the first type, a normally oblique argument - for example, the recipient of a verb of transfer - occurs without its usual oblique marking.
~~~ ann
ངེད་མ་སྨད་ཨ་ཁུ་དང་ཨ་ནེས་གཤའ་མ་རང་མ་བཅོལ་
T924    PRON 0 4        ངེད་
A924a   PronType T924 Prs
T925    NOUN 4 10       མ་སྨད་
A925a   Number T925 Sing
T926    NOUN 10 15      ཨ་ཁུ་
A926a   Number T926 Sing
T927    ADP 15 18       དང་
A927a   Case T927 Com
T928    NOUN 18 22      ཨ་ནེ
A928a   Number T928 Sing
T929    ADP 22 24       ས་
A929a   Case T929 Agn
T930    NOUN 24 30      གཤའ་མ་
A930a   Number T930 Sing
T931    PRON 30 33      རང་
A931a   Reflex T931 Yes
T932    PART 33 35      མ་
A932a   Polarity T932 Neg
T933    VERB 35 40      བཅོལ་
A933a   Tense T933 Past
R53     arg1 Arg1:T933 Arg2:T928
R54     arg2 Arg1:T933 Arg2:T930
R55     arg3 Arg1:T933 Arg2:T925
~~~
> Uncle and aunt did not return to us (mother and children), what was rightfully ours. ([Mila 12a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/012a?focus=T933))

The second type of `arg3` involves honorific or light verb constructions in which the `arg2` is semantically marginalized. It is easy to imagine a different approach in which the `arg2` does not have argument status, and the `arg3` is promoted to `arg2`, reflecting its semantic role. This includes idiomatic constructions involving the verb _yod_, such as _rgyus yod_ "to have knowledge of".
~~~ ann
ལུང་བ་དང་ཉེ་ཚན་རྒྱུས་མེད་པས་མཆི་མ་མང་པོ་ཤོར།
T5695	NOUN 0 6	ལུང་བ་
A5695a	Number T5695 Sing
T5696	ADP 6 9	དང་
A5696a	Case T5696 Com
T5697	NOUN 9 15	ཉེ་ཚན་
A5697a	Number T5697 Sing
T5698	NOUN 15 21	རྒྱུས་
A5698a	Number T5698 Sing
T5699	VERB 21 26	མེད་པ
A5699a	Polarity T5699 Neg
A5699b	VerbForm T5699 Vnoun
T5700	ADP 26 28	ས་
A5700a	Case T5700 Agn
T5701	NOUN 28 34	མཆི་མ་
A5701a	Number T5701 Sing
T5702	ADJ 34 40	མང་པོ་
T5703	VERB 40 43	ཤོར
A5703a	Tense T5703 Past
T5704	PUNCT 43 44	།
R7	arg2-lvc Arg1:T5699 Arg2:T5698
R8	arg2-lvc Arg1:T5703 Arg2:T5701
R9	arg3 Arg1:T5699 Arg2:T5697
~~~
> I was unfamiliar with that region or those relations so I broke down in tears. ([Mila 18b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/018b?focus=T5699))

An example with a different verb:
~~~ ann
ང་མི་ཐོད་གད་ཁ་ན་ཀློག་སློབ་དུས་རྩའི་མདའ་རུ། སྐྱིད་སྟོན་གྱི་ཆང་ས་ཆེན་པོ་ཅིག་བྱུང་བ་དེའི་གྲལ་དབུ་ལ་སློབ་དཔོན་སྤྱན་དྲངས་པའི་ཕྱགས་ཕྱི་ལ་ངས་ཀྱང་ཕྱིན།
T1214	PRON 0 2	ང་
A1214a	PronType T1214 Prs
T1215	PROPN 2 14	མི་ཐོད་གད་ཁ་
T1216	ADP 14 16	ན་
A1216a	Case T1216 Loc
T1217	VERB 16 21	ཀློག་
A1217a	Tense T1217 Pres
T1218	VERB 21 26	སློབ་
A1218a	Tense T1218 Pres
T1219	NOUN 26 30	དུས་
A1219a	NounType T1219 Rel
T1220	PROPN 30 32	རྩ
T1221	ADP 32 35	འི་
A1221a	Case T1221 Gen
T1222	NOUN 35 39	མདའ་
A1222a	Number T1222 Sing
T1223	ADP 39 41	རུ
A1223a	Case T1223 Ter
T1224	PUNCT 41 42	།
T1226	NOUN 43 54	སྐྱིད་སྟོན་
A1226a	Number T1226 Sing
T1227	ADP 54 58	གྱི་
A1227a	Case T1227 Gen
T1228	NOUN 58 63	ཆང་ས་
A1228a	Number T1228 Sing
T1229	ADJ 63 70	ཆེན་པོ་
T1230	DET 70 74	ཅིག་
A1230a	PronType T1230 Ind
T1231	VERB 74 81	བྱུང་བ་
A1231a	Tense T1231 Past
A1231b	VerbForm T1231 Vnoun
T1232	DET 81 83	དེ
A1232a	PronType T1232 Dem
T1233	ADP 83 86	འི་
A1233a	Case T1233 Gen
T1234	NOUN 86 94	གྲལ་དབུ་
A1234a	Number T1234 Sing
T1235	ADP 94 96	ལ་
A1235a	Case T1235 All
T1236	NOUN 96 106	སློབ་དཔོན་
A1236a	Number T1236 Sing
T1237	NOUN 106 111	སྤྱན་
A1237a	Number T1237 Sing
T1238	VERB 111 117	དྲངས་པ
A1238a	Tense T1238 Past
A1238b	VerbForm T1238 Vnoun
T1239	ADP 117 120	འི་
A1239a	Case T1239 Gen
T1240	NOUN 120 129	ཕྱགས་ཕྱི་
A1240a	Number T1240 Sing
T1241	ADP 129 131	ལ་
A1241a	Case T1241 All
T1242	PRON 131 132	ང
A1242a	PronType T1242 Prs
T1243	ADP 132 134	ས་
A1243a	Case T1243 Agn
T1244	PART 134 138	ཀྱང་
T1245	VERB 138 142	ཕྱིན
A1245a	Tense T1245 Past
T1246	PUNCT 142 143	།
R33	argcl Arg1:T1218 Arg2:T1217
R34	arg1 Arg1:T1218 Arg2:T1214
R35	obl Arg1:T1218 Arg2:T1215
R36	arg1 Arg1:T1231 Arg2:T1228
R37	arg2-hon Arg1:T1238 Arg2:T1237
R38	arg3 Arg1:T1238 Arg2:T1236
R39	arg1 Arg1:T1245 Arg2:T1242
R40	obl Arg1:T1245 Arg2:T1240
R41	obl Arg1:T1238 Arg2:T1234
~~~
> While studying to read in Mithögeka, one day I accompanied my master to the lower valley of Tsa where he was invited to preside over a great wedding feast. ([Mila 12b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/012b?focus=T1238))
