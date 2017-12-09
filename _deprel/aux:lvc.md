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

Verbs of motion are common second verbs in such constructions,
as in the following example with _khyer phyin_ "to bring-go".
~~~ ann
ཡང་བུམ་པ་གང་ཁྱེར་ཕྱིན་པས། དེ་ས་ལ་སྐུངས་དབུ་ཞྭ་བཀབ་སྟེ།
T9025	ADV 0 3	ཡང་
A9025a	PronType T9025 Dem
T9026	NOUN 3 9	བུམ་པ་
A9026a	Number T9026 Sing
T9027	ADJ 9 12	གང་
T9028	VERB 12 17	ཁྱེར་
A9028a	Tense T9028 Fut/Past
T9029	VERB 17 23	ཕྱིན་པ
A9029a	Tense T9029 Past
A9029b	VerbForm T9029 Vnoun
T9030	ADP 23 24	ས
A9030a	Case T9030 Agn
T9031	PUNCT 24 25	།
T9033	DET 26 29	དེ་
A9033a	PronType T9033 Dem
T9034	NOUN 29 31	ས་
A9034a	Number T9034 Sing
T9035	ADP 31 33	ལ་
A9035a	Case T9035 All
T9036	VERB 33 39	སྐུངས་
A9036a	Tense T9036 Past
T9037	NOUN 39 46	དབུ་ཞྭ་
A9037a	Number T9037 Sing
T9038	VERB 46 50	བཀབ་
A9038a	Tense T9038 Past
T9039	SCONJ 50 53	སྟེ
A9039a	Case T9039 Sem
T9040	PUNCT 53 54	།
R56	arg2 Arg1:T9028 Arg2:T9026
R57	aux-lvc Arg1:T9028 Arg2:T9029
R58	arg2 Arg1:T9036 Arg2:T9033
R59	obl Arg1:T9036 Arg2:T9034
R60	arg2 Arg1:T9038 Arg2:T9037
~~~
> She brought another full jar of beer, which he buried in the ground and covered with his hat. ([Mila 23b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/023b?focus=T9028))

A frequent second verb in such constructions is _song_, a suppletive past stem of _'gro_ "to go".
In Modern Tibetan, _song_ is typically characterized as a full-fledged evidential auxiliary marking
witnessed past, and so questions arise as to whether some of its uses in the Milarepa text share
these features.

~~~ ann
དེ་ནས་ཁང་ཐོག་ལ་འཛེགས་སོང་སྟེ། ཡུམ་གྱིས་བེམ་པོའི་ནང་ནས་གསེར་བཏོན།
T5962	DET 0 3	དེ་
A5962a	PronType T5962 Dem
T5963	ADP 3 6	ནས་
A5963a	Case T5963 Ela
T5964	NOUN 6 13	ཁང་ཐོག་
A5964a	Number T5964 Sing
T5965	ADP 13 15	ལ་
A5965a	Case T5965 All
T5966	VERB 15 21	འཛེགས་
A5966a	Tense T5966 Past
T5967	VERB 21 25	སོང་
A5967a	Tense T5967 Past
T5968	SCONJ 25 28	སྟེ
A5968a	Case T5968 Sem
T5969	PUNCT 28 29	།
T5971	NOUN 30 34	ཡུམ་
A5971a	Number T5971 Sing
T5972	ADP 34 39	གྱིས་
A5972a	Case T5972 Agn
T5973	NOUN 39 45	བེམ་པོ
A5973a	Number T5973 Sing
T5974	ADP 45 48	འི་
A5974a	Case T5974 Gen
T5975	NOUN 48 51	ནང་
A5975a	NounType T5975 Rel
T5976	ADP 51 54	ནས་
A5976a	Case T5976 Ela
T5977	NOUN 54 59	གསེར་
A5977a	Number T5977 Coll
T5978	VERB 59 63	བཏོན
A5978a	Tense T5978 Past
T5979	PUNCT 63 64	།
R54	aux-lvc Arg1:T5966 Arg2:T5967
R55	obl Arg1:T5966 Arg2:T5964
R56	arg1 Arg1:T5978 Arg2:T5971
R57	arg2 Arg1:T5978 Arg2:T5977
R58	obl Arg1:T5978 Arg2:T5975
~~~
> Then, having slipped up to the roof, the lama’s wife removed the gold from inside the cloak. ([Mila 019a:T5966](http://tibetanverbs.soas.ac.uk/~badw/#/mila/019a?focus=T5966))

The second verb in a complex verb construction is not limited to verbs of motion.
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
> I possess a black magic rite called Zadong Marnak (Dark Red Faced Dza) that, when cast, kills with the syllable hūṃ and causes unconsciousness with the syllable phaṭ. ([Mila 15b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/015b?focus=T3362))
