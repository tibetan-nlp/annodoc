---
layout: entry
title: arg1
shortdef: the first argument or "subject" of a verb, which may be agentive or unmarked, but not oblique
---
arg1ནི་བྱེད་པ་པོ་དང་བྱ་ཚིག་ལས་གྲུབ་ཅིང་།     བྱེད་པ་པོ་གཅིག་ལ་བྱ་ཚིག་གཉིས་སམ་གསུམ་ཡོད་ཚེ་བྱེད་པ་པོ་དང་ཐག་ཉེ་ཤོས་སམ་འབྲེལ་ཆེ་ཤོས་ཀྱི་བྱ་ཚིག་དེ་དང་བྱེད་པ་པོ་ལས་arg1 གྲུབ་པ་ཡིན།
`arg1` links the "subject" to the verb. It is often an agent, or the closest argument there is for a particular verb to an agent. It can be marked with agentive case or it can be unmarked, and it is roughly equivalent to the UD relation [`nsubj`](http://universaldependencies.org/u/dep/nsubj.html), but is preferred as the less opinionated label.

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
> But I was not convinced. ([Mila 14b](http://tibetanverbs.soas.ac.uk/~badw/#/mila/014b?focus=T2592))
