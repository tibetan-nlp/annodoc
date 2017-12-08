---
layout: entry
title: aux:lvc
shortdef: a verb which follows the main verb, and together with it forms a complex predicate
---
In a sequence of two or more adjacent verbs, if the verbs together form a
[complex predicate](/lim-annodoc/construction/complex-predicates), then non-initial verbs depend on the first verb via
the `aux:lvc` relation. In this scenario, all arguments and obliques should
depend on the first verb.

In the following example, _log 'gro_ "to return-go" forms a complex predicate.

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

In the following example we have _'gyel gtong_ "to send-collapse":
~~~ ann
ང་ལ་མཐུ་གཟའ་གདོང་དམར་ནག་ཞེས་བྱ་བ་ཧཱུཾ་ཤི་དང་ཕཊ་འགྱེལ་ཐོངས་པ་གཅིག་ཡོད་པ་དེ།
T3353	PRON 0 2	ང་
A3353a	PronType T3353 Prs
T3354	ADP 2 4	ལ་
A3354a	Case T3354 All
T3355	NOUN 4 8	མཐུ་
A3355a	Number T3355 Sing
T3356	PROPN 8 24	གཟའ་གདོང་དམར་ནག་
T3357	VERB 24 28	ཞེས་
A3357a	Mood T3357 Qot
T3358	VERB 28 33	བྱ་བ་
A3358a	Tense T3358 Fut
A3358b	VerbForm T3358 Vnoun
T3359	X 33 41	ཧཱུཾ་ཤི་
T3360	ADP 41 44	དང་
A3360a	Case T3360 Com
T3361	X 44 47	ཕཊ་
T3362	VERB 47 53	འགྱེལ་
T3363	VERB 53 60	ཐོངས་པ་
A3363a	Mood T3363 Imp
A3363b	VerbForm T3363 Vnoun
T3364	NUM 60 65	གཅིག་
A3364a	NumType T3364 Card
A3364b	NumForm T3364 Word
T3365	VERB 65 71	ཡོད་པ་
A3365a	VerbForm T3365 Vnoun
T3366	DET 71 73	དེ
A3366a	PronType T3366 Dem
T3367	PUNCT 73 74	།
R40	arg2 Arg1:T3358 Arg2:T3356
R43	aux-lvc Arg1:T3362 Arg2:T3363
R41	arg1 Arg1:T3365 Arg2:T3355
R42	obl Arg1:T3365 Arg2:T3353
~~~
> I possess a black magic rite called Zadong Marnak (Dark Red Faced Dza) that, when cast, kills with the syllable hūṃ and causes unconsciousness with the syllable phaṭ. ([Mila 15b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/015b?focus=T3363))
