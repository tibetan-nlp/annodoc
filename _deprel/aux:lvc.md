---
layout: entry
title: aux:lvc
shortdef: a verb which follows the main verb, and together with it forms a complex predicate
---
In a sequence of two or more adjacent verbs, if the verbs together form a
[complex predicate](/lim-annodoc/construction/complex-predicates), then non-initial verbs depend on the first verb via
the `aux:lvc` relation. In this scenario, all arguments and obliques should
depend on the first verb.

In the following example, _log 'gro ba_ forms a complex predicate.

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
> I then went to see the lama, who asked, "Töpaga, why did you not return home?" [Mila 015a:T2938]
