---
layout: entry
title: LIM Annotation Documentation  
---

This page provides documentation of the annotation scheme for
Tibetan language texts used by the project *Lexicography in Motion* (LIM)
based at SOAS University of London and the Bavarian Academy of Sciences
and Humanities (_Bayerische Akademie der Wissenschaften_) in Munich.
The project is focused on verbs.  Our primary objective is to
annotate the predicate-argument structure of verbs in the service
of building a corpus-based Tibetan verb lexicon.

Where possible, our annotation scheme follows the guidelines of the
[Universal Dependencies](http://universaldependencies.org/) project.


## Table of contents

* [Introduction](#introduction)
* [Universal dependencies](#universal-dependencies)
    * [Part-of-speech tags](#part-of-speech-tags)
    * [Dependency relations](#dependency-relations)
* [Argument structure](#argument-structure)
    * [Overview](#overview)
    * [Arguments](#arguments)
      * [arg1]()
      * [`arg2`](#arg2)
      * [`arg3`](#arg3)
      * [`argcl`](#argcl)
    * [Obliques](#obliques)
      * [`obl`](#obl)
      * [`obl:adv`](#obladv)
      * [`obl:arg`](#oblarg)
* [Specific constructions](#specific-constructions)
    * [Auxiliaries](#auxiliaries)
      * [`aux`](#aux)
    * [Copulas](#copulas)
      * [`cop`](#cop)
    * [Complex verbs](#complex-verbs)
      * [`aux:lvc`](#auxlvc)
    * [Light verbs](#light-verbs)
      * [`arg2:lvc`](#arg2lvc)
      * [`arg1:lvc`](#arg1lvc)
    * [Honorifics](#honorifics)
      * [`arg2:hon`](#arg2hon)
    * [Relative clauses](#relative-clauses)
    * [Quotatives](#quotatives)

## Introduction

The guidelines on this page are designed for *annotators* rather than *lexicographers*.
The aim is to create a set of easy to follow instructions that facilitate a high
degree of inter-annotator agreement. In particular, we aim
to keep semantic decisions to a minimum, leaving such considerations to the
lexicographer.

We ask annotators to identify and label the core arguments of each verb.
This involves finding at most one head word for each core argument position,
and then drawing an arc from the verb to this word and labeling the arc with
one of the following dependency relations: `arg1`, `arg2`, `arg3` or
`argcl`. When present, agentive marked arguments fill the `arg1` slot. The remaining
argument slots aside from clausal `argcl` are filled by nominals without
overt case-marking. Nominal arguments occurring with any kind of oblique
case-marking are marked as `obl`. This includes words that function as adverbs,
which can be marked with the subtype `obl:adv`. Some nominals may be considered
to be core arguments, despite occurring with oblique case marking. In such cases,
the arc from the verb to the argument may be labelled with the subtype `obl:arg`.

Note that annotators are not asked to identify equivalencies across different verbs,
or to label the semantic roles of core arguments or obliques. For example, the `arg1`
for different verbs could have different semantic roles; it is only necessary that a
given verb's `arg1` is held constant across the various uses of *the same verb*.

## Universal dependencies

### Part-of-speech tags

We use the universal POS tag scheme rather than the more verbose SOAS tags.
We have mapped directly from the
[SOAS system](http://larkpie.net/tibetancorpus/tags)
without any loss of information.
To declutter the annotation interface, however, we shorten the
[UD tags](http://universaldependencies.org/u/pos/all.html)
as follows:

- ADJ -> A
- ADP -> c
- ADV -> AV
- AUX -> x
- DET -> d
- INTJ -> i
- NOUN -> N
- NUM -> n
- PART -> p
- PRON -> pr
- PROPN -> PN
- PUNCT -> .
- SCONJ -> s
- VERB -> V
- X -> ?

### Dependency relations

Our annotation guidelines follow the UD project in privileging content words over
function words. Instead of linking a predicate to the function word (for example, the case
marker) that marks its argument, we link the predicate to the content head word (for example,
the head noun) of the argument. Function words then depend on the content words which they "modify".

The UD project maintains that there is an advantage to this approach:

> Preferring content words as heads maximizes parallelism between languages because content words vary less than function words between languages. In particular, one commonly finds the same grammatical relation being expressed by morphology in some languages or constructions and by function words in other languages or constructions, while some languages may not mark the information at all (such as not marking tense or definiteness).

This advantage is also evident when investigating a single language from
a diachronic perspective. LIM examines predicate-argument structure in Old,
Classical, and Modern Tibetan - a period spanning over a millennium, and one
that witnessed significant changes in argument and predicate marking.
A particular predicate might mark its agent with agentive case at one stage,
and no case at another stage. Viewing predicate-argument annotation
as a relation between content words allows us both to abstract over such differences and
to describe them in a systematic way.

In order to generalize across instances of a predicate, it is necessary to adopt a consistent
annotation policy. We adopt the following principles:

1. **Every verb is annotated and no verb is ignored.** A verb is either linked to its arguments or pointed to by a main predicate (as in the case of auxiliaries and copulas, which lack argument structure).
2. **Arguments can occur marked by agentive case or without case-marking.** Other case markers signal an oblique. Agentive case is therefore given unique treatment amongst the adpositional case markers; it is the only `ADP` that doesn't force its nominal to be linked as an `obl`.
3. **When a verb has more than one argument, link `arg1` to the argument that is the best proto-agent.** That is, compare the arguments in terms of the agent properties that they have, and pick the one that is the best agent.
4. **`arg1`, `arg2`, and `arg3` are reserved for nominal arguments, and `argcl` is reserved for clausal arguments.** `argcl` subsumes what UD refers to as [`ccomp`](http://universaldependencies.org/u/dep/ccomp.html) and [`xcomp`](http://universaldependencies.org/u/dep/xcomp.html).
5. **A word cannot be the argument of more than one verb at the same time.** When this principle appears to be violated, then all but one of the verbs likely has a missing argument. Link the word to the verb in whose local context it occurs. (This verb may, though not necessarily, determine the word's case marking.) This principle implies that argument-marking is local rather than long-distance. It also implies that when a word has been displaced from its "usual" position - for example, as the external head of a relative clause - then its usual position will be "occupied" by a missing argument.
6. **Being an argument is distinct from contributing a semantic role to the verb.** For example, the nouns in light verb constructions are classified as `arg2` despite the fact that they contribute 'verbal' meaning. Conversely, recipients and other roles that do not meet the case-marking criteria in (1) are classified as `obl` (or `obl:arg`) even though they may be essential to the meaning of the phrase.

## Argument structure

### Overview

In Tibetan, verbal arguments are often inferred from the context or from previous
discourse. In the following example, the verb is linked to its `arg2`,
but `arg1` is not present.

~~~ ann
ཡི་གེ་དེ་བླ་མ་ལ་ཕུལ།
T5796 NOUN 0 6    ཡི་གེ་
A5796a  Number T1 Sing
T5797 DET 6 9 དེ་√d
A5797a  PronType T1 Dem
T5798 NOUN 9 14  བླ་མ་
A5798a  Number T3 Sing
T5799 ADP 14 16	ལ་
A5799a  Case T487 All
T5800 VERB 16 19 འབུལ་
T5801 PUNCT 19 20	།
R1  arg2 Arg1:T5800 Arg2:T5796
R2  obl-arg Arg1:T5800 Arg2:T5798
~~~
> _(He) presented the letter to the lama._ (CT - Mila 19a:T5796)

Provided that the argument that does appear
is annotated as `arg2`, then it is not necessary to insert a zero
element for the missing `arg1`. It is understood that a two-place predicate must
have an `arg1` argument - therefore, a sentence with an `arg2` must have
a missing `arg1`.

This reasoning does not allow us to distinguish between a saturated
one-place predicate and a two-place predicate with a missing `arg2`.
Nor does it allow us to determine how many arguments a verb has when
none of its arguments are overt.

In an earlier version of this documentation, we proposed to handle
such difficulties by labeling each verb with its argument structure.
However, doing so comes with problems of its own. It can be difficult,
especially during the early days of our understanding, to distinguish
between a required but missing argument and something that just isn't
there, Forcing annotators to make this decision is not always
helpful, and the gain made by doing so is not always obvious -
we have so far identified few verbs that occur in the same form with multiple
argument structures.

### Arguments

This section gives examples of the various argument relations. Because
arguments can generally be omitted, care must be taken
to assign the correct roles to the arguments that are overt.

#### `arg2`

The arguments of a two-place predicate are marked `arg1` and `arg2`, as in the
the following example with the verb "to write". Here, the agent (the writer)
is marked `arg1`, and the rightmost of three nominals linked by two
genitives ("letter") is marked `arg2`.

~~~ ann
ཁྱོད་ཀྱི་ཁ་ཆེམས་ཀྱི་ཡི་གེ་སུས་བྲིས།
T461	PRON 0 5	ཁྱོད་
A461a	PronType T461 Prs
T462	ADP 5 9	ཀྱི་
A462a	Case T462 Gen
T463	NOUN 9 16	ཁ་ཆེམས་
A463a	Number T463 Sing
T464	ADP 16 20	ཀྱི་
A464a	Case T464 Gen
T465	NOUN 20 26	ཡི་གེ་
A465a	Number T465 Sing
T466	PRON 26 28	སུ
A466a	PronType T466 Int
T467	ADP 28 30	ས་
A467a	Case T467 Agn
T468	VERB 30 34	བྲིས
A468a	Tense T468 Past
T469	PUNCT 34 35	།
R23	arg1 Arg1:T468 Arg2:T466
R24	arg2 Arg1:T468 Arg2:T465
~~~
> _Who wrote your will?_ (CT - Mila 11b:T461)

#### `arg3`

When a verb has two unmarked arguments in addition to having an `arg1` argument,
then we classify it as a three-place predicate with no obliques. For example:

~~~ ann
ངེད་མ་སྨད་ཨ་ཁུ་དང་ཨ་ནེས་གཤའ་མ་རང་མ་བཅོལ་
T924	PRON 0 4	ངེད་
A924a	PronType T924 Prs
T925	NOUN 4 10	མ་སྨད་
A925a	Number T925 Sing
T926	NOUN 10 15	ཨ་ཁུ་
A926a	Number T926 Sing
T927	ADP 15 18	དང་
A927a	Case T927 Com
T928	NOUN 18 22	ཨ་ནེ
A928a	Number T928 Sing
T929	ADP 22 24	ས་
A929a	Case T929 Agn
T930	NOUN 24 30	གཤའ་མ་
A930a	Number T930 Sing
T931	PRON 30 33	རང་
A931a	Reflex T931 Yes
T932	PART 33 35	མ་
A932a	Polarity T932 Neg
T933	VERB 35 40	བཅོལ་
A933a	Tense T933 Past
R53	arg1 Arg1:T933 Arg2:T928
R54	arg2 Arg1:T933 Arg2:T930
R55	arg3 Arg1:T933 Arg2:T925
~~~
> _Uncle and aunt did not return to us, mother and children, what was rightfully ours._ (CT - Mila 12a:T924)

#### `argcl`

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
T484	ADV 0 1	ལ
A484a	PronType T484 Dem
T485	ADP 1 3	ར་
A485a	Case T485 Ter
T486	NOUN 3 9	མི་ངན་
A486a	Number T486 Sing
T487	ADP 9 11	ལ་
A487a	Case T487 All
T488	NOUN 11 15	དབང་
A488a	Number T488 Sing
T489	VERB 15 21	བསྐུར་
A489a	Tense T489 Fut/Past
T490	SCONJ 21 23	ན་
A490a	Case T490 Loc
T491	NOUN 23 26	ཆུ་
A491a	Number T491 Coll
T492	ADP 26 28	ལ་
A492a	Case T492 All
T493	NOUN 28 31	བྲེ
A493a	Number T493 Sing
T494	ADP 31 33	ས་
A494a	Case T494 Agn
T495	VERB 33 37	འཇལ་
A495a	Tense T495 Pres
T496	VERB 37 42	བྱེད་
A496a	Tense T496 Pres
T497	VERB 42 47	བྱ་བ་
A497a	Tense T497 Fut
A497b	VerbForm T497 Vnoun
T498	DET 47 50	དེ་
A498a	PronType T498 Dem
T499	DET 50 54	འདི་
A499a	PronType T499 Dem
T500	NOUN 54 58	འདྲ་
A500a	NounType T500 Rel
T501	ADP 58 60	ལ་
A501a	Case T501 All
T502	VERB 60 66	ཟེར་བ་
A502a	Tense T502 Fut/Pres
A502b	VerbForm T502 Vnoun
T503	AUX 66 70	ཡིན་
T504	VERB 70 73	ཟེར
T505	PUNCT 73 74	།
R30	arg2 Arg1:T489 Arg2:T488
R31	obl-arg Arg1:T489 Arg2:T486
R34	aux Arg1:T495 Arg2:T496
R37	obl-arg Arg1:T495 Arg2:T491
R87	obl Arg1:T495 Arg2:T493
R10	argcl Arg1:T497 Arg2:T495
R32	aux Arg1:T502 Arg2:T503
R33	argcl Arg1:T504 Arg2:T502
R36	arg2 Arg1:T502 Arg2:T499
~~~

### Obliques

We use the [`obl`](http://universaldependencies.org/u/dep/obl.html) relation
to mark unmarked nominals that act as adverbials, and arguments marked with
adpositions other than agentive case, regardless of whether or not they are
considered to be arguments of the verb.

#### `obl`

`obl` is used for most oblique modifiers, including unmarked nominals
that behave adverbially.

#### `obl:adv`

`obl:adv` (occasionally seen as `obl-adv` in the BRAT UI)
is used for nominals marked with oblique case-marking which
derive etymologically from verbal nouns but which might commonly be
called adverbs, such as _nye bar_, _so sor_, and _lhag par_.

#### `obl:arg`

`obl:arg` (occasionally seen as `obl-arg` in the BRAT UI)
is used for nominals with oblique case-marking which are
nevertheless considered core verbal arguments.

A typical case of `obl:arg` would be to mark the third required argument
of a verb of transfer like 'give'.

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
T44	NOUN 0 3	ནས་
A44a	Number T44 Coll
T45	ADJ 3 10	དཀར་མོ་
T46	ADJ 10 16	མང་པོ་
T47	ADP 16 18	ལ་
A47a	Case T47 All
T48	NOUN 18 22	ཕྱེ་
A48a	Number T48 Sing
T49	VERB 22 25	བྱས
A49a	Tense T49 Past
T50	PUNCT 25 26	།
R3	arg2-lvc Arg1:T49 Arg2:T48
R4	obl-arg Arg1:T49 Arg2:T44
~~~
> He ground a large amount of white barley into flour. (CT - Mila 11a)

~~~ ann
ཆུ་ལ་བྲེས་འཇལ་བྱེད་
T491	NOUN 0 3	ཆུ་
A491a	Number T491 Coll
T492	ADP 3 5	ལ་
A492a	Case T492 All
T493	NOUN 5 8	བྲེ
A493a	Number T493 Sing
T494	ADP 8 10	ས་
A494a	Case T494 Agn
T495	VERB 10 14	འཇལ་
A495a	Tense T495 Pres
T496	VERB 14 19	བྱེད་
A496a	Tense T496 Pres
R34	aux Arg1:T495 Arg2:T496
R37	obl-arg Arg1:T495 Arg2:T491
R87	obl Arg1:T495 Arg2:T493
R34	aux Arg1:T495 Arg2:T496
R35	argcl Arg1:T497 Arg2:T496
~~~
> One measures [running] water with a _bre_. (CT - Mila 11b)

## Specific constructions

### Auxiliaries

The [`aux`](http://universaldependencies.org/u/dep/aux_.html)
relation is used to link functional auxiliaries to main verbs.

#### `aux`

Modal verbs such as དགོས་ 'need to', ནུས་ 'able to', and འདོད་ 'want to'
fall under this category when used after main verbs, as in the
following example:

~~~ ann
ཨ་ཁུ་དང་ཨ་ནེ་ལ་ངོ་མི་ཚ་བ་ཅིག་བྱེད་དགོས་
T861    NOUN 0 5    ཨ་ཁུ་
A861a   Number T861 Sing
T862    ADP 5 8     དང་
A862a   Case T862 Com
T863    NOUN 8 13    ཨ་ནེ་
A863a   Number T863 Sing
T864    ADP 13 15     ལ་
A864a   Case T864 All
T865    NOUN 15 18    ངོ་
A865a   Number T865 Sing
T866    PART 18 21    མི་
A866a   Polarity T866 Neg
T867    VERB 21 25    ཚ་བ་
A867a   Tense T867 Fut/Pres
A867b   VerbForm T867 Vnoun
T868    DET 25 29     ཅིག་
A868a   PronType T868 Ind
T869    VERB 29 34    བྱེད་
A869a   Tense T869 Pres
T870    VERB 34 39    དགོས་
A870a   VerbType T870 Aux
R37     arg1 Arg1:T867 Arg2:T865
R38     argcl Arg1:T869 Arg2:T867
R38     argcl Arg1:T869 Arg2:T867
R39     aux Arg1:T869 Arg2:T870
R84     obl Arg1:T869 Arg2:T863
~~~

When used in periphrastic constructions to mark tense or aspect,
copulas (`x` and `x n`) also depend on main verbs or verbal nouns via
the `aux` relation.

We adhere to the
[UD guidelines](http://universaldependencies.org/u/overview/syntax.html)
regarding stacked auxiliaries:

> ... multiple function words related to the same content word always appear as siblings, never in a nested structure, regardless of their interpretation. A typical case is that of auxiliary verbs, which never depend on each other.

### Copulas

In a copular linking construction, we use the
[`cop`](http://universaldependencies.org/u/dep/cop.html)
relation to link a predicate
(e.g. an adjective) to the `x` or `x n`. The copula itself does not have an
argument structure.

#### `cop`

### Light verbs

Like other languages of the region, Tibetan has a wealth of idiomatic light verb
constructions. Usually these consist of a `NOUN` without any case marking followed
by a semantically bleached `VERB`. Some such verbs are used with many different
nouns to form different light verb constructions, whereas other verbs are
limited to occur with only one or a small number of nouns.

A satisfactory verb lexicon for Tibetan needs to include those `NOUN` + `VERB`
collocations that convey fundamental verbal meanings in the language. Therefore,
when feasible we ask annotators to explicitly encode a light verb construction
by marking the noun with the subtyped relation `arg2:lvc`. The sub-type `lvc`
stands for "light verb construction" and has precedent in
[other UD treebanks](http://universaldependencies.org/ext-dep-index.html):
Hungarian has `dobj:lvc`, while Persian and Turkish have `compound:lvc`.
We also have found a few instances of `arg1:lvc`.

#### `arg2:lvc`

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

#### `arg1:lvc`

In the above cases, which are typical examples of light verbs, the `NOUN`
fills an argument position without introducing additional arguments. However,
in other cases that we have found, the noun in a light verb construction
causes the valency of the verb to change, introducing another otherwise
unlicensed argument. For example, ཡོད་ itself occurs surprisingly as a light
verb in the following example:

~~~ ann
ཞལ་ཆེམས་ཀྱི་ཡི་གེ་རྒྱས་ཡོད་པ་
T110  NOUN 0 8  ཞལ་ཆེམས་
A110a Number T110 Sing
T111  ADP 8 12  ཀྱི་
A111a Case T111 Gen
T112  NOUN 12 18  ཡི་གེ་
A112a Number T112 Sing
T113  NOUN 18 23  རྒྱུས་
A113a Number T113 Sing
T114  VERB 23 29  ཡོད་པ་
A114a VerbForm T114 Vnoun
R35 arg1:lvc Arg1:T114 Arg2:T113
R70 arg2 Arg1:T114 Arg2:T112
~~~
> _[They] had knowledge of the written testament._ (CT - Mila 11a)

Here, `arg1:lvc` is རྒྱུས་ "knowledge" and `arg2` is ཡི་གེ་ "letter".

### Honorifics

Complex honorific verbs in Tibetan are formed by prepending an honorific `NOUN`
to a `VERB`. Given our present understanding of Tibetan grammar,
these constructions cannot be formally distinguished from
other `arg2` constructions. However, it is important to for them to be
catalogued so that they can be entered into the verb lexicon.

#### `arg2:hon`

In the following example, we code the honorific noun སྐུ་ as a subtyped
`arg2:hon` of the verb གཤེགས་. This distinguishes such cases from other
`arg2` or light verb constructions.

~~~ ann
ཡབ་མི་ལ་ཤེས་རབ་རྒྱལ་མཚན་སྐུ་གཤེགས་
T104  NOUN 0 3  ཡབ་
A104a Number T104 Sing
T105  PROPN 3 24  མི་ལ་ཤེས་རབ་རྒྱལ་མཚན་
T106  NOUN 24 28  སྐུ་
A106a Number T106 Sing
T107  VERB 28 34  གཤེགས་
R14 arg1 Arg1:T107 Arg2:T104
R85 arg2:hon Arg1:T107 Arg2:T106
~~~

### Complex verbs

Butt (2010:49) defines a *complex predicate* as:

> a construction that involves two or more predicational elements
> (such as nouns, verbs, and adjectives) which predicate as a single unit,
> i.e. their arguments map onto a monoclausal syntactic structure.

A *complex verb* is then a complex predicate where all (or more usually
both) predicates are verbs. In contrast, an auxiliary is a non-predicational
element that merely contributes TAME (tense, aspect, mood and evidentiality)
to a sentence.

#### `aux:lvc`

It is useful to annotate complex verbs, and in some cases, we may wish to include specific complex verb constructions in the lexicon. However, doing so is not yet on a secure footing, since we have not carried out the requisite tests documented by Butt and others to show which examples count as complex verbs, and which do not.

Therefore, we adopt a flexible annotation scheme that allows us to identify complex verb constructions at any time, without having to change the dependency structure of a sentence. Since each verb contributes to the predication and argument structure, there is no correct verb from which to link arguments. In a basic dependency tree, however, a choice must be made, and so we link the arguments and obliques to the first verb. Subsequent verbs then depend on the first verb via the `aux:lvc` relation.

~~~ ann
ངས་བླ་མའི་དྲུང་དུ་ལོག་འོངས་པའི་ལམ་ལ།
T2751	PRON 0 1	ང
A2751a	PronType T2751 Prs
T2752	ADP 1 3	ས་
A2752a	Case T2752 Agn
T2753	NOUN 3 7	བླ་མ
A2753a	Number T2753 Sing
T2754	ADP 7 10	འི་
A2754a	Case T2754 Gen
T2755	NOUN 10 15	དྲུང་
A2755a	NounType T2755 Rel
T2756	ADP 15 18	དུ་
A2756a	Case T2756 Ter
T2757	VERB 18 22	ལོག་
T2758	VERB 22 28	འོངས་པ
A2758a	Tense T2758 Past
A2758b	VerbForm T2758 Vnoun
T2759	ADP 28 31	འི་
A2759a	Case T2759 Gen
T2760	NOUN 31 34	ལམ་
A2760a	Number T2760 Sing
T2761	ADP 34 35	ལ
A2761a	Case T2761 All
T2762	PUNCT 35 36	།
R26	obl Arg1:T2757 Arg2:T2755
R29	aux-lvc Arg1:T2757 Arg2:T2758
~~~
> ?? (CT, Mila 14b)

~~~ ann
དེའི་ཚེ་བླ་མ་ལ་གྲྭ་པ་རྟ་བས་བང་མགྱོགས་པ།
T3248	DET 0 2	དེ
A3248a	PronType T3248 Dem
T3249	ADP 2 5	འི་
A3249a	Case T3249 Gen
T3250	NOUN 5 8	ཚེ་
A3250a	NounType T3250 Rel
T3251	NOUN 8 13	བླ་མ་
A3251a	Number T3251 Sing
T3252	ADP 13 15	ལ་
A3252a	Case T3252 All
T3253	NOUN 15 21	གྲྭ་པ་
A3253a	Number T3253 Sing
T3254	NOUN 21 24	རྟ་
A3254a	Number T3254 Sing
T3255	ADP 24 27	བས་
A3255a	Case T3255 Cmp
T3256	VERB 27 30	བང་
A3256a	Tense T3256 Fut/Pres
T3257	VERB 30 38	མགྱོགས་པ
A3257a	Tense T3257 Past
A3257b	VerbForm T3257 Vnoun
T3258	PUNCT 38 39	།
R13	arg1 Arg1:T3256 Arg2:T3253
R14	aux-lvc Arg1:T3256 Arg2:T3257
~~~
> (CT, Mila 15b)

### Relative clauses

Repeating the example from above:

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
R2      arg2 Arg1:T19 Arg2:T18
~~~
> _the barley which was cultivated by the uncle_ (CT - Mila 11a)

### Quotatives

We tag _ces_, _zhes_ and related words as `VERB` because of their etymology and
because of the existence of variant forms like _ce na_ and _ces pa_.
However, the usage of these words suggests that they are quotative clitics.
The allomorphs _ces_ and _zhes_ depend on the final of the preceding syllable,
which bespeaks their qualification as function words. In general, they are also
optional, unlike typical verbal predicates. For these reasons, we ignore such
words when annotating verb dependencies.

~~~ ann
གྲལ་པ་རྣམས་སྙན་གསན་པར་ཞུ་ཞེས་བརྗོད་ནས།
T218	NOUN 0 6	གྲལ་པ་
A218a	Number T218 Sing
T219	DET 6 11	རྣམས་
A219a	Number T219 Plur
T220	NOUN 11 15	སྙན་
A220a	Number T220 Sing
T221	VERB 15 20	གསན་པ
A221a	Tense T221 Past/Pres
A221b	VerbForm T221 Vnoun
T222	ADP 20 22	ར་
A222a	Case T222 Ter
T223	VERB 22 25	ཞུ་
A223a	Tense T223 Fut/Pres
T224	VERB 25 29	ཞེས་
A224a	Mood T224 Qot
T225	VERB 29 35	བརྗོད་
A225a	Tense T225 Past
T226	SCONJ 35 37	ནས
A226a	Case T226 Ela
T227	PUNCT 37 38	།
R39	arg1 Arg1:T221 Arg2:T218
R79	argcl Arg1:T223 Arg2:T221
R40	argcl Arg1:T225 Arg2:T223
~~~
> She said: ‘elders, please listen closely’. (CT - Mila 11a)

In this example, the head of the embedded clause _zhu_ depends
directly on the matrix verb _brjod_, without paying any notice
of the intervening _zhes_. In future, when functional dependencies
are added to the trees, _zhes_ will probably be treated like a
complementizer using the relation
[`mark`](http://universaldependencies.org/u/dep/mark.html).
