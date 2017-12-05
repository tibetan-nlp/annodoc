---
layout: entry
title: argcl 
---

The following example shows a clausal argument of the verb བསམས་ "think".
The content head word of the embedded clause (the verb བསྡད་) is linked to this
verb by the `argcl` relationship.

~~~ ann
ནང་ལ་བསྡད་འདུག་ག་ངས་ནི་རང་བསྡད་ཨ་ཡོད་བསམས་བྱུང་།
T1  NOUN 0 3 ནང་
A1a Number T1 Sing
T3  VERB 5 10  བསྡད་
A3a Tense T3 Past
T4  VERB 10 15 འདུག་
A4a Tense T4 Invar
T6  PRON 17 18 ང་
A6a PronType T6 Pers
T8  PRON 23 26 རང་
A8a PronType T8 Pers
T9  VERB 26 31 བསྡད་
A9a Tense T9 Past
R9a arg1 Arg1:T9 Arg2:T8
T11 VERB 33 37 ཡོད་
A11a  Tense T11 Invar
T12 VERB 37 42 སེམས་
A12a  Tense T12 Past
R12a  arg1 Arg1:T12 Arg2:T6
R12b  argcl Arg1:T12 Arg2:T9
T13 VERB 42 47 བྱུང་√x
A13a  Tense T13 Invar
~~~
> _You're home. I thought you might not be home._ (MT - A Handmade Altar)

In the following example, the verb ཕྱིན་ takes a
clausal argument where the embedded subject (the subject of ཕུལ་)
must be the same as its own subject. (In UD, this is called an
`xcomp` as opposed to a `ccomp`, but for simplicity we lump both
categories together under `argcl`.)

~~~ ann
ཨ་ནི་ངས་ཨང་ཀི་དེ་ཕུལ་གག་ཕྱིན།
T2  PRON 5 6 ང་
T4  NOUN 8 14  ཨང་ཀི་
A4a Number T4 Sing
T5  DET 14 17 དེ་√d
A5a PronType T5 Dem
T6  VERB 17 21 འབུལ་
R6a arg2 Arg1:T6 Arg2:T4
T7  VERB 24 28 ཕྱིན་
A7a Tense T7 Past
R7a arg1 Arg1:T7 Arg2:T2
R7b argcl Arg1:T7 Arg2:T6
~~~
> _I will go give the number._ (MT - A Visit to the Hospital, Abridged)

Take care that the `argcl` arc points to the head of the embedded clause.
For example, if the main verb of a clause is followed by auxiliaries, point
to the main verb rather than the auxiliaries.

~~~ ann
ལར་མི་ངན་ལ་དབང་བསྐུར་ན་ཆུ་ལ་བྲེས་འཇལ་བྱེད་བྱ་བ་དེ་འདི་འདྲ་ལ་ཟེར་བ་ཡིན་ཟེར།
T484    ADV 0 1 ལ
A484a   PronType T484 Dem
T485    ADP 1 3 ར་
A485a   Case T485 Ter
T486    NOUN 3 9        མི་ངན་
A486a   Number T486 Sing
T487    ADP 9 11        ལ་
A487a   Case T487 All
T488    NOUN 11 15      དབང་
A488a   Number T488 Sing
T489    VERB 15 21      བསྐུར་
A489a   Tense T489 Fut/Past
T490    SCONJ 21 23     ན་
A490a   Case T490 Loc
T491    NOUN 23 26      ཆུ་
A491a   Number T491 Coll
T492    ADP 26 28       ལ་
A492a   Case T492 All
T493    NOUN 28 31      བྲེ
A493a   Number T493 Sing
T494    ADP 31 33       ས་
A494a   Case T494 Agn
T495    VERB 33 37      འཇལ་
A495a   Tense T495 Pres
T496    VERB 37 42      བྱེད་
A496a   Tense T496 Pres
T497    VERB 42 47      བྱ་བ་
A497a   Tense T497 Fut
A497b   VerbForm T497 Vnoun
T498    DET 47 50       དེ་
A498a   PronType T498 Dem
T499    DET 50 54       འདི་
A499a   PronType T499 Dem
T500    NOUN 54 58      འདྲ་
A500a   NounType T500 Rel
T501    ADP 58 60       ལ་
A501a   Case T501 All
T502    VERB 60 66      ཟེར་བ་
A502a   Tense T502 Fut/Pres
A502b   VerbForm T502 Vnoun
T503    AUX 66 70       ཡིན་
T504    VERB 70 73      ཟེར
T505    PUNCT 73 74     །
R30     arg2 Arg1:T489 Arg2:T488
R31     obl-arg Arg1:T489 Arg2:T486
R34     aux Arg1:T495 Arg2:T496
R37     obl-arg Arg1:T495 Arg2:T491
R87     obl Arg1:T495 Arg2:T493
R10     argcl Arg1:T497 Arg2:T495
R32     aux Arg1:T502 Arg2:T503
R33     argcl Arg1:T504 Arg2:T502
R36     arg2 Arg1:T502 Arg2:T499
~~~

