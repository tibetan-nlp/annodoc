---
layout: entry
title: arg2:lvc 
---

The following illustrates the use of the light verb གོམ་པ་རྒྱབ་ "to walk" - literally "take steps". Here, the `VERB` immediately follows the `NOUN`.

~~~ ann
གོམ་པ་རྒྱབ་བྱས་ཐད་དོ།
T1  NOUN 0 6 གོམ་པ་
A1a Number T1 Sing
T2  VERB 6 11  རྒྱག་√1
A2a Tense T2 Past
R2a arg2-lvc Arg1:T2 Arg2:T1
T3  VERB 11 15 བྱེད་
A3a Tense T3 Past
T4  VERB 15 18 ཐད་
A4a Tense T4 Fut,Pres
~~~
> _Let's walk there._ (MT - A Visit to the Hospital, Abridged)

In the following case, by contrast, the adverbial phrase ལན་གསུམ་ "three times"
intervenes, showing that the component parts of the light verb construction
are separable.

~~~ ann
གོམ་པ་ལན་གསུམ་རྒྱབ་ཤོག
T1  NOUN 0 6 གོམ་པ་
A1a Number T1 Sing
T2  NOUN 6 9 ལན་
A2a Number T2 Sing
T3  NUM 9 14  གསུམ་
A3a NumType T3 Card
T4  VERB 14 19 རྒྱག་√1
A4a Tense T4 Pres
R4a arg2-lvc Arg1:T4 Arg2:T1
T5  VERB 19 22 ཤོག
~~~
> _Take three steps._ (MT - Sang né la: A0002)

There are also examples in Classical Tibetan, for example:

~~~ ann
ཞང་པོས་སོ་ནམ་བྱས་པའི་ནས་
T16     NOUN 0 5      ཞང་པོ
A16a    Number T16 Sing
T17     ADP 5 7       ས་
A17a    Case T17 Agn
T18     NOUN 7 13      སོ་ནམ་
A18a    Number T18 Sing
T19     VERB 13 18      བྱས་པ
A19a    Tense T19 Past
A19b    VerbForm T19 Vnoun
T20     ADP 18 21      འི་
A20a    Case T20 Gen
T21     NOUN 21 24    ནས་
R1      arg1 Arg1:T19 Arg2:T16
R2      arg2-lvc Arg1:T19 Arg2:T18
~~~
> _the barley which was cultivated by the uncle_ (CT - Mila 11a)




