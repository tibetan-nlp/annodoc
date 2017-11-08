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
* [Annotation overview](#annotation-overview)
    * [Missing arguments](#missing-arguments)
    * [Annotating arguments](#annotating-arguments)
    * [Annotating obliques](#annotating-obliques)
        * [Oblique arguments](#oblique-arguments)
        * [Oblique adjuncts](#oblique-adjuncts)
        * [Oblique adverbs](#oblique-adverbs)
* [Specific constructions](#specific-constructions)
    * [Auxiliaries](#auxiliaries)
    * [Copulas](#copulas)
    * [Light verbs](#light-verbs)
        * [Honorifics](#honorifics)
        * [Special cases](#special-cases)
    * [Complex verbs](#complex-verbs)
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

## Annotation overview

In this section, we draw examples from Old (OT), Classical (CT) and
Modern Tibetan (MT). Each example is cited with its stage and source.

### Missing arguments

In Tibetan, verbal arguments are often inferred from the context or from previous
discourse. In the following example, the verb is linked to its `arg2`,
but `arg1` is not present.

~~~ ann
ཡི་གེ་དེ་བླ་མ་ལ་ཕུལ།
T1  NOUN 0 6    ཡི་གེ་
A1a Number T1 Sing
T3  NOUN 9 14  བླ་མ་
A3a Number T3 Sing
T5  VERB 16 19 འབུལ་
R1  arg2 Arg1:T1 Arg2:T5
R2  obl Arg1:T3 Arg2:T5
~~~
> _(He) presented the letter to the lama._ (CT - Milarepa)

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

In light of these considerations, it makes most sense at this point to
address argument structure at the word sense level. Annotators are
required to choose a lemma, and perhaps eventually a word sense.
For the moment, we assume that argument structure will be handled at this
level, as and when it becomes necessary.

### Annotating arguments

This section gives examples of the various argument relations. Because
arguments can generally be [omitted](#missing-arguments), care must be taken 
to assign the correct roles to the arguments that are overt.

The sole argument of a one-place predicate is marked `arg1`.

Although verbs of motion can occur with a variety of adpositional phrases,
specifying source, destination, and so on, we classify their canonical
use as sole argument verbs. Adpositional phrases
should be linked to motion verbs as oblique modifiers rather than
as arguments, using the [`obl`](http://universaldependencies.org/u/dep/obl.html)
relation. In the following example, in addition to an `arg1`,
there are two obliques. We follow UD guidelines in labeling the
postposed temporal modifier as an
[`obl`](http://universaldependencies.org/u/dep/obl.html),
despite its being a nominal.

~~~ ann
ང་ལྦ་ཤིང་ཀྲན་སྒྲ་སི་ལ་ཕྱིན་པ་ཡིན་བདུན་ཕྲག་གཉིས།
T1  PRON 0 2 ང་
T2  PROPN 2 21   ལྦ་ཤིང་ཀྲན་སྒྲ་སི་
T4  VERB 23 30  ཕྱིན་པ་
A4a Tense T4 Past
A4b VerbForm T4 Vnoun
R4a arg1 Arg1:T4 Arg2:T1
R4b obl Arg1:T4 Arg2:T2
R4c obl Arg1:T4 Arg2:T6
T5  VERB 30 34 ཡིན་
A5a Tense T5 Invar
T6  NOUN 34 43 བདུན་ཕྲག་
A6a Number T6 Sing
T7  NUM 43 47 གཉིས་
~~~
> _I went to Washington D.C for two weeks._ (MT - A Handmade Altar)

The next example shows the same verb ཕྱིན་ occurring with a single
argument, referring to the passage of time.

~~~ ann
དེ་ཚོ་བརྒྱབ་ནས་ལོ་ག་ཚོད་ཕྱིན་ཡོད་རེད།
T1  DET 0 3 དེ་√d
A1a PronType T1 Dem
T3  VERB 6 12  རྒྱག་√1
A3a Tense T3 Past
R3a arg2 Arg1:T3 Arg2:T1
T5  NOUN 15 18 ལོ་
A5a Number T5 Sing
T6  PRON 18 24 ག་ཚོད་
A6a PronType T6 Int
T7  VERB 24 29 ཕྱིན་
A7a Tense T7 Past
R7a arg1 Arg1:T7 Arg2:T5
T8  VERB 29 33 ཡོད་
A8a Tense T8 Invar
T9  VERB 33 36 རེད་√1
A8a Tense T8 Invar
~~~
> _How many years has it been since they were built?_ (MT - The Chapter 26 Dialog from A Manual)

Another example of a single argument verb in many of its uses is ཡོད་.

The arguments of a two-place predicate are marked `arg1` and `arg2`, as in the
the following example with the verb "to write". Here, the agent (the writer)
is marked `arg1`, and the rightmost of three nominals linked by two
genitives ("letter") is marked `arg2`.

~~~ ann
ཁྱོད་ཀྱི་ཁ་ཆེམས་ཀྱི་ཡི་གེ་སུས་བྲིས།
T1  PRON 0 5 ཁྱོད་√p
A1a PronType T1 Prs
T3  NOUN 9 16  ཁ་ཆེམས་
A3a Number T3 Sing
T5  NOUN 20 26 ཡི་གེ་
A5a Number T5 Sing
T6  PRON 26 28 སུ་√p
A6a PronType T6 Int
T8  VERB 30 34 འབྲི་√1
A8a Tense T8 Past
R1  arg1 Arg1:T6 Arg2:T8
R2  arg2 Arg1:T5 Arg2:T8
~~~
> _Who wrote your will?_ (CT - Milarepa)

The next example illustrates the same verbal lemma in Modern Tibetan.
Despite the presence of periphrastic TAME marking following the verb,
the dependency relations still link the verb directly to its two nominal
arguments.

~~~ ann
ཚིག་དེ་ངས་བྲིས་པ་ཡིན།
T1  NOUN 0 4 ཚིག་
A1a Number T1 Sing
T2  PRON 4 7 དེ་√d
A2a PronType T2 Dem
T3  PRON 7 8 ང་√p
A3a PronType T3 Pers
T5  VERB 10 17 འབྲི་པ་√1
A5a Tense T5 Past
A5b VerbForm T5 Vnoun
R1  arg1 Arg1:T3 Arg2:T5
R2  arg2 Arg1:T1 Arg2:T5
~~~
> _I wrote the words._ (MT - An Interview with the Fiddler Drado)

It is not necessary for an `arg1, arg2` verb to be agentive. In the
following case, the verb is involuntary, and the object forms a
[light verb](#light-verbs) construction together with the verb.
Still, there are clearly two distinct verbal arguments in play.
Because the human experiencer is a better proto-agent than their
stomach, `arg1` is the 1p pronoun ང་.

~~~ ann
ང་གྲོད་ཁོག་ཞེ་པོ་བཤལ་གྱིས་ལགས།
T1  PRON 0 2 ང་
T2  NOUN 2 11 གྲོད་ཁོག་
A2a Number T2 Sing
T3  ADV 11 17  ཞེ་པོ་
T4  VERB 17 21 བཤལ་
A4a Tense V Pres
R4a arg1 Arg1:T4 Arg2:T1
R4b arg2 Arg1:T4 Arg2:T2
~~~
> _I've got bad diarrhea._ (MT - Diarrhea)

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
> _Uncle and aunt did not return to us, mother and children, what was rightfully ours._ (CT - Mila 12a)

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

### Annotating obliques 

#### Oblique arguments

It is of considerable value to this project to identify and distinguish
between arguments (those elements that are licensed by a verb and clearly
essential to its meaning) and adjuncts (those elements that are optional
and can occur with many or most verbs). Therefore we permit ourselves
to label oblique-marked nominals that behave as arguments with the
subtyped relation `obl:arg`.

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

#### Oblique adjuncts

Insert examples of `obl`.

#### Oblique adverbs

Insert examples of `obl:adv`.

## Specific constructions

### Auxiliaries

The [`aux`](http://universaldependencies.org/u/dep/aux_.html)
relation is used to link functional auxiliaries to main verbs.
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

### Copulas

In a copular linking construction, we use the
[`cop`](http://universaldependencies.org/u/dep/cop.html)
relation to link a predicate
(e.g. an adjective) to the `x` or `x n`. The copula itself does not have an
argument structure.

### Light verbs

Like other languages of the region, Tibetan has a wealth of idiomatic light verb
constructions. Usually these consist of a `NOUN` without any case marking followed
by a semantically bleached `VERB`. Some such verbs are used with many different
nouns to form different light verb constructions, whereas other verbs are
limited to occur with only one or a small number of nouns.

The following illustrates the use of the light verb གོམ་པ་རྒྱབ་ "to walk" - literally
"take steps". Here, the `VERB` immediately follows the `NOUN`.

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

The UD project suggests that in light verb constructions, the `NOUN`
should depend on the `VERB` via the
[`compound`](http://universaldependencies.org/u/dep/all.html#al-u-dep/compound)
relation. This is likely not the right approach for Tibetan. Instead,
we link the `NOUN` to the `VERB` via the `arg2` relation. So in the above examples,
the verb has the frame `arg1, arg2`.

We take this approach for three reasons. First, if an additional non-agent
semantic role occurs with a light verb, then it must not appear with (unmarked) absolutive case,
but must instead bear an overt oblique case marker. This suggests that the
`NOUN` part of a light verb construction is a syntactic object. Second, adopting the `compound`
dependency relation would make it more difficult to compare the use of a verb
across different stages of the history of the language: a given light verb
construction may have arisen from
a collocation that was once semantically compositional. Third and finally,
in the absence of sound syntactic tests, there is a certain subjectivity
in diagnosing light verb constructions. We are not convinced that
annotators would agree on when to label the `compound` relation.

Despite these objections, the importance to our project of identifying
light verbs cannot be understated. A proper verb lexicon for Tibetan needs
to include those `NOUN` + `VERB` collocations that convey fundamental verbal
meanings in the language. Therefore when feasible we ask annotators to explicitly
mark the light verb construction by marking the noun with the subtyped relation
`arg2:lvc`. The sub-type `lvc` stands for "light verb construction" and has precedent in
[other UD treebanks](http://universaldependencies.org/ext-dep-index.html):
Hungarian has `dobj:lvc`, while Persian and Turkish have `compound:lvc`.

#### Honorifics

Complex honorific verbs in Tibetan are formed by prepending an honorific `NOUN`
to a `VERB`. Semantically, such constructions differ from typical light verb
constructions, in that the `VERB` is not bleached of meaning, and the `NOUN`
contributes only honorific function. Nevertheless, given our present understanding
of Tibetan grammar, these constructions cannot be formally distinguished from
light verb constructions. Therefore, we consider that they also involve `arg2`.

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

In order to make it easier for honorific compounds to be identified later,
we code the honorific noun སྐུ་ as a subtyped `arg2:hon` of the verb གཤེགས་.
This distinguishes such cases from typical light verb constructions.

#### Special cases

In the above cases, which are typical examples of light verbs, the `NOUN`
fills an argument position without introducing additional arguments. However,
in other cases that we have found, the noun in a light verb construction
causes the valency of the verb to change, introducing another otherwise
unlicensed argument. For example, ཡོད་ itself occurs surprisingly as a light
verb in the following example:

~~~ ann
ཞལ་ཆེམས་ཀྱི་ཡི་གེ་རྒྱུས་ཡོད་པ་
T110    NOUN 0 8    ཞལ་ཆེམས་
A110a   Number T110 Sing
T111    ADP 8 12     ཀྱི་
A111a   Case T111 Gen
T112    NOUN 12 18    ཡི་གེ་
A112a   Number T112 Sing
T113    NOUN 18 24    རྒྱས་
A113a   Number T113 Sing
T114    VERB 24 30    ཡོད་པ་
A114a   VerbForm T114 Vnoun
R35     arg1:lvc Arg1:T114 Arg2:T113
R70     arg2 Arg1:T114 Arg2:T112
~~~
> _[They] had knowledge of the written testament._ (CT - Mila 11a)

Here, `arg1:lvc` is  རྒྱས་ "knowledge" and `arg2` is ཡི་གེ་ "letter".

### Complex verbs

Insert examples of V-V predicates here.

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
