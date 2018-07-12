---
layout: entry
title: argcl
shortdef: the clausal argument of a verb
---
The relation `argcl` subsumes two dependency relations from the UD project: [`ccomp`](http://universaldependencies.org/u/dep/ccomp.html) and [`xcomp`](http://universaldependencies.org/u/dep/xcomp.html). `ccomp` is intended for clausal complements that have overt subjects - for example, the complement clause in _He said that I would leave_ - while `xcomp` is intended for clausal complements with obligatorily covert controlled subjects. Since Tibetan regularly drops pronouns, and in particular subjects, this distinction was difficult for annotators to make. Therefore we decided to merge the two relations into a single relation called `argcl`.

བྱ་ཚིག་ཐ་དད་པ་གཉིས་ལས་argclགྲུབ། དཔེར་ན། ཁྱོད་ལ་ཡུལ་མིས་སྡུག་པོ་ཅི་འདྲ་བཏང་གསུང་ལྟ་བུར་མཚོན་ན། བཏང་དང་གསུང་གཉིས་ལས་argcl གྲུབ་པ་ཡིན། ཡིན་ཡང་། འགྲོ་གི་ཡིན་ལྟ་བུ་ནི་argclམ་ཡིན་ཏེ་ཡིན་གྱིས་འགྲོ་ལ་རོགས་པ་བྱེད་པ་ཙམ་ལས་བྱ་ཚིག་གཙོ་བོ་མ་ཡིན་པའི་ཕྱིར། ཡང་། བླ་མའི་ཞལ་ཏ་ལ་ཐོས་པ་དགའ་ཁྱོད་ལོག་མི་འགྲོ་བ་ཅི་ཡིན་གསུང་ཞེས་པ་ལྟ་བུར་མཚོན་ན། ལོག་བྱ་ཚིག་གཙོ་བོ་ཡིན་པས་ལོག་དང་གསུང་གཉིས་ལས་argcl གྲུབ་པ་ཡིན།

On the face of it, `argcl` constructions can look similar to complex verb constructions, however, they should not be confused. In the following example, _gsung_ "to say" has its own arguments, completely distinct from the arguments of the verb that precedes it.
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

The `argcl` arc must point to the head of the embedded clause. So if the main verb of a clause is followed by auxiliaries, the arc should point to the main verb rather than the auxiliaries:
~~~ ann
བླ་མའི་དྲུང་དུ་ཕྱིན་པས། བླ་མའི་ཞལ་ཏ་ལ་ཐོས་པ་དགའ་ཁྱོད་ལོག་མི་འགྲོ་བ་ཅི་ཡིན་གསུང་།
T2938	NOUN 0 4	བླ་མ
A2938a	Number T2938 Sing
T2939	ADP 4 7	འི་
A2939a	Case T2939 Gen
T2940	NOUN 7 12	དྲུང་
A2940a	NounType T2940 Rel
T2941	ADP 12 15	དུ་
A2941a	Case T2941 Ter
T2942	VERB 15 21	ཕྱིན་པ
A2942a	Tense T2942 Past
A2942b	VerbForm T2942 Vnoun
T2943	ADP 21 22	ས
A2943a	Case T2943 Agn
T2944	PUNCT 22 23	།
T2946	NOUN 24 28	བླ་མ
A2946a	Number T2946 Sing
T2947	ADP 28 31	འི་
A2947a	Case T2947 Gen
T2948	NOUN 31 36	ཞལ་ཏ་
A2948a	Number T2948 Sing
T2949	ADP 36 38	ལ་
A2949a	Case T2949 All
T2950	PROPN 38 48	ཐོས་པ་དགའ་
T2951	PRON 48 53	ཁྱོད་
A2951a	PronType T2951 Prs
T2952	VERB 53 57	ལོག་
T2953	PART 57 60	མི་
A2953a	Polarity T2953 Neg
T2954	VERB 60 67	འགྲོ་བ་
A2954a	Tense T2954 Fut/Pres
A2954b	VerbForm T2954 Vnoun
T2955	PRON 67 70	ཅི་
A2955a	PronType T2955 Int
T2956	AUX 70 74	ཡིན་
T2957	VERB 74 79	གསུང་
T2958	PUNCT 79 80	།
R30	obl Arg1:T2942 Arg2:T2940
R32	argcl Arg1:T2957 Arg2:T2952
R34	arg1 Arg1:T2952 Arg2:T2950
R31	aux-lvc Arg1:T2952 Arg2:T2954
R33	aux Arg1:T2954 Arg2:T2956
~~~
> I then went to see the lama, who asked, "Töpaga, why did you not return home?" ([Mila 15a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/015a?focus=T2952))
