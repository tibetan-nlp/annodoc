---
layout: entry
title: obl:arg
shortdef: an oblique marked nominal, which is considered an argument of the verb
---
`obl:arg` (occasionally seen as `obl-arg` in the BRAT UI)
is used for nominals with oblique case-marking which are
nevertheless considered core verbal arguments.

A typical case of `obl:arg` would be to mark the third required argument
of a verb of transfer like 'give'.

~~~ ann
ཨ་ཁུ་དང་ཨ་ནེ་ལ་ཤ་ཁོག་འཛུགས།
T120	NOUN 0 5	ཨ་ཁུ་
A120a	Number T120 Sing
T121	ADP 5 8	དང་
A121a	Case T121 Com
T122	NOUN 8 13	ཨ་ནེ་
A122a	Number T122 Sing
T123	ADP 13 15	ལ་
A123a	Case T123 All
T124	NOUN 15 21	ཤ་ཁོག་
A124a	Number T124 Sing
T125	VERB 21 26	འཛུགས
A125a	Tense T125 Pres
T126	PUNCT 26 27	།
R21	arg2 Arg1:T125 Arg2:T124
R22	obl-arg Arg1:T125 Arg2:T122
~~~
> To my aunt and uncle we presented an entire animal carcass. (Mila 11a:T120)

~~~ ann
སེམས་ཅན་ཆེན་པོས་སྟག་མོ་ལ་ལུས་སྦྱན་པ་ཟེར་ཡས་ལེའུ་དེ་རེད།
T1  NOUN 0 8 སེམས་ཅན་
A1a Number T1 Sing
T2  ADJ 8 14  ཆེན་པོས་
T4  NOUN 16 23 སྟག་མོ་
A4a Number T4 Sing
T6  NOUN 25 29 ལུས་
A6a Number T6 Sing
T7  VERB 29 37 སྦྱན་པ་
A7a Tense T7 Invar
A7b VerbForm T7 Vnoun
R7a arg1 Arg1:T7 Arg2:T1
R7b arg2 Arg1:T7 Arg2:T6
R7c obl:arg Arg1:T7 Arg2:T4
T8  VERB 37 41 ཟེར་
A8a Mood T8 Qot
T10 NOUN 44 49 ལེའུ་
A10a  Number T10 Sing
T11 DET 49 52 དེ་√d
A11a  PronType T11 Dem
T12 VERB 52 55 རེད་
A12a  Tense T12 Invar
~~~
> _This is the chapter on the story of the great sentient being giving his body to the tigress._ (MT - An Oral Commentary on The Tale of the Hungry Tigress: A Reader of Classical Tibetan 1.1)

~~~ ann
ནས་དཀར་མོ་མང་པོ་ལ་ཕྱེ་བྱས།
T44     NOUN 0 3        ནས་
A44a    Number T44 Coll
T45     ADJ 3 10        དཀར་མོ་
T46     ADJ 10 16       མང་པོ་
T47     ADP 16 18       ལ་
A47a    Case T47 All
T48     NOUN 18 22      ཕྱེ་
A48a    Number T48 Sing
T49     VERB 22 25      བྱས
A49a    Tense T49 Past
T50     PUNCT 25 26     །
R3      arg2-lvc Arg1:T49 Arg2:T48
R4      obl-arg Arg1:T49 Arg2:T44
~~~
> He ground a large amount of white barley into flour. (CT - Mila 11a)

~~~ ann
ཆུ་ལ་བྲེས་འཇལ་བྱེད་
T491    NOUN 0 3        ཆུ་
A491a   Number T491 Coll
T492    ADP 3 5 ལ་
A492a   Case T492 All
T493    NOUN 5 8        བྲེ
A493a   Number T493 Sing
T494    ADP 8 10        ས་
A494a   Case T494 Agn
T495    VERB 10 14      འཇལ་
A495a   Tense T495 Pres
T496    VERB 14 19      བྱེད་
A496a   Tense T496 Pres
R34     aux Arg1:T495 Arg2:T496
R37     obl-arg Arg1:T495 Arg2:T491
R87     obl Arg1:T495 Arg2:T493
R34     aux Arg1:T495 Arg2:T496
R35     argcl Arg1:T497 Arg2:T496
~~~
> One measures [running] water with a _bre_. (CT - Mila 11b)
