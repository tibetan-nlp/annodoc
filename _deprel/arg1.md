---
layout: entry
title: arg1
shortdef: the first argument or "subject" of a verb, which may be agentive or unmarked, but not oblique
---
`arg1` links the "subject" to the verb. `arg1` is often an agent, or the closest
argument there is for a particular verb to an agent. `arg1` may be marked with
agentive case or it can be unmarked.

The following example shows an agentive marked `arg1` of a transitive verb:
~~~ ann
ཁྱོད་ཀྱི་ཁ་ཆེམས་ཀྱི་ཡི་གེ་སུས་བྲིས།
T461    PRON 0 5        ཁྱོད་
A461a   PronType T461 Prs
T462    ADP 5 9 ཀྱི་
A462a   Case T462 Gen
T463    NOUN 9 16       ཁ་ཆེམས་
A463a   Number T463 Sing
T464    ADP 16 20       ཀྱི་
A464a   Case T464 Gen
T465    NOUN 20 26      ཡི་གེ་
A465a   Number T465 Sing
T466    PRON 26 28      སུ
A466a   PronType T466 Int
T467    ADP 28 30       ས་
A467a   Case T467 Agn
T468    VERB 30 34      བྲིས
A468a   Tense T468 Past
T469    PUNCT 34 35     །
R23     arg1 Arg1:T468 Arg2:T466
R24     arg2 Arg1:T468 Arg2:T465
~~~
> _Who wrote the text of your testament?_ ([Mila 11b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/011a?focus=T468))

The sole argument of a one-place predicate is also marked `arg1`,
despite not being marked with agentive case.
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
> When he died, these possessions were returned to their owner. ([Mila 11b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/011b?focus=T411))

Even when an `arg2` is present, `arg1` need not appear with agentive case,
so care must be taken when labeling `arg1` relations.
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

Finally, departing from some analyses, obliques are not allowed to be `arg1`,
and so the `arg1` of a verb of possession like _yod_ is the possessed element
and not the possessor.
~~~ ann
ང་བུ་གཅིག་པོར་སོང་བ་དང་ཨ་ཁུ་ལ་བུ་མང་པོ་ཡོད་པའི་སྟབས་ཀྱིས།
T359	PRON 0 2	ང་
A359a	PronType T359 Prs
T360	NOUN 2 5	བུ་
A360a	Number T360 Sing
T361	ADJ 5 12	གཅིག་པོ
T362	ADP 12 14	ར་
A362a	Case T362 Ter
T363	VERB 14 20	སོང་བ་
A363a	Tense T363 Past
A363b	VerbForm T363 Vnoun
T364	ADP 20 23	དང་
A364a	Case T364 Com
T365	NOUN 23 28	ཨ་ཁུ་
A365a	Number T365 Sing
T366	ADP 28 30	ལ་
A366a	Case T366 All
T367	NOUN 30 33	བུ་
A367a	Number T367 Sing
T368	ADJ 33 39	མང་པོ་
T369	VERB 39 44	ཡོད་པ
A369a	VerbForm T369 Vnoun
T370	ADP 44 47	འི་
A370a	Case T370 Gen
T371	NOUN 47 52	སྟབས་
A371a	Number T371 Sing
T372	ADP 52 56	ཀྱིས
A372a	Case T372 Agn
T373	PUNCT 56 57	།
R4	arg1 Arg1:T363 Arg2:T359
R5	obl-arg Arg1:T363 Arg2:T360
R2	obl Arg1:T369 Arg2:T365
R6	arg1 Arg1:T369 Arg2:T367
~~~
>  I was an only son while my uncle had many sons, therefore... ([Mila 11b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/011b?focus=T369))
