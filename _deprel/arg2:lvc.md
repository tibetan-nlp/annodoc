---
layout: entry
title: arg2:lvc
shortdef: the second argument of a verb, which together with it forms a complex predicate
---

Here is a nice simple example of `arg2:lvc` with _mchi ma shor_ "to shed tears":
~~~ ann
ང་རང་ཡང་མཆི་མ་མང་པོ་ཤོར།
T1537	PRON 0 2	ང་
A1537a	PronType T1537 Prs
T1538	PRON 2 5	རང་
A1538a	Reflex T1538 Yes
T1539	PART 5 8	ཡང་
T1540	NOUN 8 14	མཆི་མ་
A1540a	Number T1540 Sing
T1541	ADJ 14 20	མང་པོ་
T1542	VERB 20 23	ཤོར
A1542a	Tense T1542 Past
T1543	PUNCT 23 24	།
R31	arg2-lvc Arg1:T1542 Arg2:T1540
R32	arg1 Arg1:T1542 Arg2:T1537
~~~
> ([Mila 13a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/013a?focus=T1542))

The following example illustrates _sdug po btang_:
~~~ ann
ཁྱོད་ལ་ཡུལ་མིས་སྡུག་པོ་ཅི་འདྲ་བཏང་གསུང་།
T3090	PRON 0 5	ཁྱོད་
A3090a	PronType T3090 Prs
T3091	ADP 5 7	ལ་
A3091a	Case T3091 All
T3092	NOUN 7 13	ཡུལ་མི
A3092a	Number T3092 Sing
T3093	ADP 13 15	ས་
A3093a	Case T3093 Agn
T3094	NOUN 15 23	སྡུག་པོ་
A3094a	Number T3094 Sing
T3095	PRON 23 26	ཅི་
A3095a	PronType T3095 Int
T3096	NOUN 26 30	འདྲ་
A3096a	NounType T3096 Rel
T3097	VERB 30 34	བཏང་
A3097a	Tense T3097 Past
T3098	VERB 34 39	གསུང་
T3099	PUNCT 39 40	།
R70	argcl Arg1:T3098 Arg2:T3097
R71	arg2-lvc Arg1:T3097 Arg2:T3094
R72	arg1 Arg1:T3097 Arg2:T3092
R73	obl-arg Arg1:T3097 Arg2:T3090
~~~
> "How have your countrymen tormented you?" asked (the lama). ([Mila 15a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/015a?focus=T3097))

The following example is excellent, in that it exhibits not one, not two, but three
cases of `arg2:lvc`.

~~~ ann
ང་ཨ་མ་ལ་སེམས་འཁྲེང་གྲགས་ཏེ། ཡང་ཡང་ཕྱི་མིག་ལྟ་བ་དང་མཆི་མ་མང་པོ་ཤོར།
T2161	PRON 0 2	ང་
A2161a	PronType T2161 Prs
T2162	NOUN 2 6	ཨ་མ་
A2162a	Number T2162 Sing
T2163	ADP 6 8	ལ་
A2163a	Case T2163 All
T2164	NOUN 8 13	སེམས་
A2164a	Number T2164 Sing
T2165	VERB 13 19	འཁྲེང་
T2166	VERB 19 24	གྲགས་
A2166a	VerbType T2166 Aux
T2167	SCONJ 24 26	ཏེ
A2167a	Case T2167 Sem
T2168	PUNCT 26 27	།
T2170	ADV 28 31	ཡང་
A2170a	PronType T2170 Dem
T2171	ADV 31 34	ཡང་
A2171a	PronType T2171 Dem
T2172	DET 34 38	ཕྱི་
A2172a	PronType T2172 Dem
T2173	NOUN 38 42	མིག་
A2173a	Number T2173 Sing
T2174	VERB 42 47	ལྟ་བ་
A2174a	Tense T2174 Pres
A2174b	VerbForm T2174 Vnoun
T2175	ADP 47 50	དང་
A2175a	Case T2175 Com
T2176	NOUN 50 56	མཆི་མ་
A2176a	Number T2176 Sing
T2177	ADJ 56 62	མང་པོ་
T2178	VERB 62 65	ཤོར
A2178a	Tense T2178 Past
T2179	PUNCT 65 66	།
R7	arg1 Arg1:T2165 Arg2:T2161
R8	obl-arg Arg1:T2165 Arg2:T2162
R9	arg2-lvc Arg1:T2165 Arg2:T2164
R84	aux Arg1:T2165 Arg2:T2166
R83	arg2-lvc Arg1:T2174 Arg2:T2173
R12	arg2-lvc Arg1:T2178 Arg2:T2176
~~~
> Feeling a powerful longing for my mother, I looked back at her again and again and shed many tears. ([Mila 14a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/011a?focus=T2178))
