---
layout: entry
title: arg2
shortdef: the second argument or "object" of a verb, which cannot be oblique
---
The arguments of a two-place predicate are marked `arg1` and `arg2`, as in the
the following example with the verb "to write". Here, the agent (the writer)
is marked `arg1`, and the rightmost of three nominals linked by two
genitives ("letter") is marked `arg2`.

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
