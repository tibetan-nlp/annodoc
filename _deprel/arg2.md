---
layout: entry
title: arg2
shortdef: the second argument or "object" of a verb, which cannot be oblique
---
The second argument of a two-place verb is linked to it via the `arg2` relation. `arg2` is roughly equivalent to the UD relation [`obj`](http://universaldependencies.org/u/dep/obj.html), but is preferred as a less opinionated label.
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

As often as not, `arg1` is inferred from the context, leaving `arg2` as the only overt argument,
as in the following example.
~~~ ann
ལག་པ་གཡས་སུ་ཡོག་པ་གཅིག་ཁྱེར། གཡོན་དུ་ཐལ་བ་སྤར་གང་ཁྱེར།
T1424	NOUN 0 5	ལག་པ་
A1424a	Number T1424 Sing
T1425	NOUN 5 9	གཡས་
A1425a	Number T1425 Sing
T1426	ADP 9 12	སུ་
A1426a	Case T1426 Ter
T1427	NOUN 12 18	ཡོག་པ་
A1427a	Number T1427 Sing
T1428	NUM 18 23	གཅིག་
A1428a	NumType T1428 Card
A1428b	NumForm T1428 Word
T1429	VERB 23 27	ཁྱེར
A1429a	Tense T1429 Fut/Past
T1430	PUNCT 27 28	།
T1432	NOUN 29 34	གཡོན་
A1432a	Number T1432 Sing
T1433	ADP 34 37	དུ་
A1433a	Case T1433 Ter
T1434	NOUN 37 42	ཐལ་བ་
A1434a	Number T1434 Coll
T1435	NOUN 42 46	སྤར་
A1435a	Number T1435 Sing
T1436	ADJ 46 49	གང་
T1437	VERB 49 53	ཁྱེར
A1437a	Tense T1437 Fut/Past
T1438	PUNCT 53 54	།
R5	arg2 Arg1:T1429 Arg2:T1427
R6	obl Arg1:T1429 Arg2:T1425
R7	arg2 Arg1:T1437 Arg2:T1434
R8	obl Arg1:T1437 Arg2:T1432
~~~
> Carrying a stick in her right hand and a handful of ashes in her left... ([Mila 13a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/013a?focus=T1429))
