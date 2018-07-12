---
layout: entry
title: arg2:lvc
shortdef: the second argument of a verb, which together with it forms a complex predicate
---
ཕྲད་མེད་པ་དང་བྱེད་པ་པོ་མ་ཡིན་པ་སོགས་arg2དང་ཕལ་ཆེར་མཚུངས་ཀྱང་བྱ་ཚིག་དང་མིང་ཚིག་གཉིས་ཚོགས་ན་དོན་དག་གཞན་ཞིག་ཡོད་པ་སྟེ། དཔེར་ན། དོགས་པ་ཟ། ཁ་འབྲལ། ལྟ་བུ། གཉེན་སྒྲིག་བྱེད། མཆི་མ་ཤོར། ཞེ་སྣང་སྐྱེ། ལྟ་བུ། གོང་གི་དཔེར་བརྗོད་རྣམས་ལས་སྐབས་འགར་བྱ་ཚིག་ནུས་པ་ཆེ་ཞིང་། སྐབས་འགར་མིང་ཚིག་ནུས་པ་ཆེ་ན་ཡང་། དེ་དག་གཅིག་པ་ལྟར་སྣང་གི་ཡོད་པས། ང་ཚོས་དེ་དག་བྱ་ཚིག་གི་ཚིག་མཛོད་དུ་འཇུག་གི་ཡོད།

Like other languages of the region, Tibetan has a wealth of idiomatic light verb
constructions. Usually these consist of a `NOUN` without any case marking followed
by a semantically bleached `VERB`. Some such verbs are used with many different
nouns to form different light verb constructions, whereas other verbs are
limited to occur with only one or a small number of nouns.

A satisfactory verb lexicon for Tibetan needs to include those `NOUN` + `VERB`
collocations that convey fundamental verbal meanings in the language. Therefore,
when feasible we ask annotators to explicitly encode a light verb construction
by marking the noun with the subtyped relation `arg2:lvc`. The sub-type `lvc`
stands for "light verb construction" and has precedent in
[other UD treebanks](http://universaldependencies.org/ext-dep-index.html):
Hungarian has `dobj:lvc`, while Persian and Turkish have `compound:lvc`.

For detailed examples of `arg2:lvc`, see below. For a list of all cases, see [arg2lvcs](/lim-annodoc/arg2lvcs).

Here is a simple example of `arg2:lvc` with _mchi ma shor_ "to shed tears":
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
> Then I too shed many tears. ([Mila 13a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/013a?focus=T1542))

And another with _yid ches_ "to believe":
~~~ ann
ང་ནི་ཡིད་ཅིག་མ་ཆེས་ཏེ།
T2587	PRON 0 2	ང་
A2587a	PronType T2587 Prs
T2588	PART 2 5	ནི་
T2589	NOUN 5 9	ཡིད་
A2589a	Number T2589 Sing
T2590	DET 9 13	ཅིག་
A2590a	PronType T2590 Ind
T2591	PART 13 15	མ་
A2591a	Polarity T2591 Neg
T2592	VERB 15 19	ཆེས་
A2592a	Tense T2592 Past
T2593	SCONJ 19 21	ཏེ
A2593a	Case T2593 Sem
T2594	PUNCT 21 22	།
R36	arg1 Arg1:T2592 Arg2:T2587
R37	arg2-lvc Arg1:T2592 Arg2:T2589
~~~
> But I was not convinced. ([Mila 14b])(http://tibetanverbs.soas.ac.uk/~badw/#/mila/014b?focus=T2592))

The following example illustrates _sdug po gtong_ "to torment":
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

Idiomatic constructions involving the verb _yod_ will also have an `arg2:lvc`. So the common idiom _rgyus yod_ "to have knowledge of" links _rgyus_ to _yod_ via the `arg2:lvc` relation. Moreover, the construction introduces an `arg3`, as illustrated below.
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

The following example is excellent, in that it exhibits not one, not two, but three
cases of `arg2:lvc`: _sems 'phreng_ "to be attached", _mig lta_ "to look", and
_mchi ma shor_ "to shed tears".

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
> Feeling a powerful longing for my mother, I looked back at her again and again and shed many tears. ([Mila 14a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/014a?focus=T2178))
