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

The following three sentences combine multiple instances of `arg2:lvc`
together into a single passage of text.

~~~ ann
ང་ཨ་མ་ལ་སེམས་འཁྲེང་གྲགས་ཏེ།
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
R7	arg1 Arg1:T2165 Arg2:T2161
R8	obl-arg Arg1:T2165 Arg2:T2162
R9	arg2-lvc Arg1:T2165 Arg2:T2164
R84	aux Arg1:T2165 Arg2:T2166
~~~
> Feeling a powerful longing for my mother... [Mila 14a:T2161]

~~~ ann
ཡང་ཡང་ཕྱི་མིག་ལྟ་བ་དང་མཆི་མ་མང་པོ་ཤོར།
T2170	ADV 0 3	ཡང་
A2170a	PronType T2170 Dem
T2171	ADV 3 6	ཡང་
A2171a	PronType T2171 Dem
T2172	DET 6 10	ཕྱི་
A2172a	PronType T2172 Dem
T2173	NOUN 10 14	མིག་
A2173a	Number T2173 Sing
T2174	VERB 14 19	ལྟ་བ་
A2174a	Tense T2174 Pres
A2174b	VerbForm T2174 Vnoun
T2175	ADP 19 22	དང་
A2175a	Case T2175 Com
T2176	NOUN 22 28	མཆི་མ་
A2176a	Number T2176 Sing
T2177	ADJ 28 34	མང་པོ་
T2178	VERB 34 37	ཤོར
A2178a	Tense T2178 Past
T2179	PUNCT 37 38	།
R83	arg2-lvc Arg1:T2174 Arg2:T2173
R12	arg2-lvc Arg1:T2178 Arg2:T2176
~~~
> I looked back at her again and again and shed many tears.

~~~ ann
ཨ་མ་ཡང་ང་བུ་གཅིག་པོ་ལ་སེམས་འཁྲེང་བས།
T2181	NOUN 0 4	ཨ་མ་
A2181a	Number T2181 Sing
T2182	PART 4 7	ཡང་
T2183	PRON 7 9	ང་
A2183a	PronType T2183 Prs
T2184	NOUN 9 12	བུ་
A2184a	Number T2184 Sing
T2185	ADJ 12 20	གཅིག་པོ་
T2186	ADP 20 22	ལ་
A2186a	Case T2186 All
T2187	NOUN 22 27	སེམས་
A2187a	Number T2187 Sing
T2188	VERB 27 34	འཁྲེང་བ
A2188a	VerbForm T2188 Vnoun
T2189	ADP 34 35	ས
A2189a	Case T2189 Agn
T2190	PUNCT 35 36	།
R10	arg2-lvc Arg1:T2188 Arg2:T2187
R12	arg2-lvc Arg1:T2178 Arg2:T2176
R13	arg1 Arg1:T2188 Arg2:T2181
R14	obl-arg Arg1:T2188 Arg2:T2184
~~~
> My mother also felt a strong attachment for me, her only son...

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
> "How have your countrymen tormented you?" asked (the lama). [CT, Mila 15a:T3090]
