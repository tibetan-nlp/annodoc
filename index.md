---
layout: entry
title: LIM Annotation Documentation  
---

This page provides documentation of the annotation scheme for
Tibetan language texts used by the project *Lexicography in Motion* (LIM) 
based at SOAS University of London and the Bavarian Academy of Sciences
and Humanities (_Bayerische Akademie der Wissenschaften_) in Munich.
The project is focused on verbs, with the annotation of predicate-argument structure
a key objective. In the process, we hope to build a dependency corpus for
Tibetan that can be contributed to the [Universal Dependencies](http://universaldependencies.org/)
project.

## Table of contents

* [Introduction](#introduction)
* [Universal dependencies](#universal-dependencies)
    * [Part-of-speech tags](#part-of-speech-tags)
    * [Dependency relations](#dependency-relations)
* [Annotation overview](#annotation-overview)
    * [Argument frames](#argument-frames)
        * [`arg1, arg2`](#arg1-arg2)
        * [`arg1, argcl`](#arg1-argcl)
        * [`arg1`](#arg1)
    * [Missing arguments](#missing-arguments)
* [Specific constructions](#specific-constructions)
    * [Auxiliaries](#auxiliaries)
    * [Copulas](#copulas)
    * [Honorific verbal compounds](#honorific-verbal-compounds)
    * [Light verbs](#light-verbs)
        * [Special cases](#special-cases)
    * [Relative clauses](#relative-clauses)

## Introduction

The following guidelines are designed for *annotators* rather than *lexicographers*.
The aim is to create a set of easy to follow instructions that facilitate a high 
degree of inter-annotator agreement. In particular, we aim
to keep semantic decisions to a minimum, leaving such considerations to the
lexicographer. For each part-of-speech tagged annotation unit,
we ask the annotator to perform the following tasks:

1. Identify and label the core arguments of each verb.
    * Identify at most one head word for each core argument position.
    * Link each argument head word to its verb using one of the following
    dependency relations: `arg1`, `arg2`, or `argcl`. 
1. Identify and label the oblique modifiers of each verb.
    * Identify any modifiers related to the verb.
    * Link the head word of each such modifier to the verb, using one of
    the following dependency relations: 
    [`obl`](http://universaldependencies.org/u/dep/obl.html) or 
    [`advcl`](http://universaldependencies.org/u/dep/advcl.html).

Note that annotators are not asked to do the following:

1. Identify equivalencies across different verbs.
2. Label the semantic roles of core arguments or oblique modifiers.

For example, the `arg1` for different verbs could have different semantic roles.
It is only necessary that a given verb's `arg1` is held constant across the various
uses of *the same verb*.

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

1. _Every verb is annotated and no verb is ignored._ A verb is either linked to its arguments or pointed to by a main predicate (as in the case of auxiliaries and copulas, which lack argument structure).
2. _Arguments can occur marked by agentive case or without case-marking._ Other case markers signal an oblique. Agentive case is therefore given unique treatment amongst the adpositional case markers; it is the only `ADP` that doesn't force its nominal to be linked as an `obl`. 
3. _When a verb has more than one argument, link `arg1` to the argument that is the best proto-agent._ That is, compare the arguments in terms of the agent properties that they have, and pick the one that is the best agent. 
4. _`arg1` and `arg2` are reserved for nominal arguments, and `argcl` is reserved for clausal arguments._ `argcl` subsumes what UD refers to as [`ccomp`](http://universaldependencies.org/u/dep/ccomp.html) and [`xcomp`](http://universaldependencies.org/u/dep/xcomp.html). 
5. _A word cannot be the argument of more than one verb at the same time._ When this principle appears to be violated, then all but one of the verbs likely has a missing argument. Link the word to the verb in whose local context it occurs. (This verb may, though not necessarily, determine the word's case marking.) This principle implies that argument-marking is local rather than long-distance. It also implies that when a word has been displaced from its "usual" position - for example, as the external head of a relative clause - then its usual position will be "occupied" by a missing argument.
6. _Being an argument is distinct from contributing a semantic role to the verb._ For example, the nouns in light verb constructions are classified as `arg2` despite the fact that they contribute 'verbal' meaning. Conversely, recipients and other roles that do not meet the case-marking criteria in (1) are classified as `obl` even though they may be essential to the meaning of the phrase.

## Annotation overview 

In this section, we draw examples from Old (OT), Classical (CT) and
Modern Tibetan (MT). Each example is cited with its stage and source.

### Argument frames

This section catalogues the argument frames that Tibetan verbs are known to
select for. Newly discovered frames should be added here. 
Because arguments can generally be [omitted](#missing-arguments),
care must be taken to assign the correct roles to the arguments that are 
overt. A valid argument frame is composed of a set of core argument dependency
relations, selected from the following list: 
`arg1`, `arg2`, `argcl`.

#### `arg1, arg2`

The arguments of a two-place predicate are marked `arg1` and `arg2`, as in the
the following example with the verb "to write". Here, the agent (the writer)
is marked `arg1`, and the rightmost of three nominals linked by two 
genitives ("letter") is marked `arg2`.

~~~ ann
ཁྱོད་ཀྱི་ཁ་ཆེམས་ཀྱི་ཡི་གེ་སུས་བྲིས།
T1  p 0 5 ཁྱོད་√p
A1a PronType T1 Prs
T3  N 9 16  ཁ་ཆེམས་
A3a Number T3 Sing
T5  N 20 26 ཡི་གེ་
A5a Number T5 Sing
T6  p 26 28 སུ་√p
A6a PronType T6 Int
T8  V 30 34 འབྲི་√1
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
T1  N 0 4 ཚིག་
A1a Number T1 Sing
T2  p 4 7 དེ་√d
A2a PronType T2 Dem
T3  p 7 8 ང་√p
A3a PronType T3 Pers
T5  V 10 17 འབྲི་པ་√1
A5a Tense T5 Past
A5b VerbForm T5 Vnoun
R1  arg1 Arg1:T3 Arg2:T5
R2  arg2 Arg1:T1 Arg2:T5
~~~
> _I wrote the words._ (MT - An Interview with the Fiddler Drado)

It is not necessary for an `arg1, arg2` verb to be agentive. In the
following case, the verb is involuntary, and the object forms a
[light verb](#light-verbs) construction together with the verb.
Still, there are clearly two distinct verbal aguments in play.
Because the human experiencer is a better proto-agent than their
stomach, `arg1` is the 1p pronoun ང་.

~~~ ann
ང་གྲོད་ཁོག་ཞེ་པོ་བཤལ་གྱིས་ལགས།
T1  p 0 2 ང་
T2  N 2 11 གྲོད་ཁོག་
A2a Number T2 Sing
T3  D 11 17  ཞེ་པོ་
T4  V 17 21 བཤལ་
A4a Tense V Pres
R4a arg1 Arg1:T4 Arg2:T1
R4b arg2 Arg1:T4 Arg2:T2
~~~
> _I've got bad diarrhea._ (MT - Diarrhea)

What in other contexts might be called a three-place predicate
is for us a two-place predicate with an oblique nominal, since the
third nominal occurs followed by an `ADP` other than agentive case.

~~~ ann
སེམས་ཅན་ཆེན་པོས་སྟག་མོ་ལ་ལུས་སྦྱིན་པ་ཟེར་ཡས་ལེའུ་དེ་རེད།
T1  N 0 8 སེམས་ཅན་
A1a Number T1 Sing
T2  A 8 14  ཆེན་པོས་
T4  N 16 23 སྟག་མོ་
A4a Number T4 Sing
T6  N 25 29 ལུས་
A6a Number T6 Sing
T7  V 29 37 སྦྱིན་པ་
A7a Tense T7 Invar
A7b VerbForm T7 Vnoun
R7a arg1 Arg1:T7 Arg2:T1
R7b arg2 Arg1:T7 Arg2:T6
R7c obl Arg1:T7 Arg2:T4
T8  V 37 41 ཟེར་
A8a Mood T8 Qot
T10 N 44 49 ལེའུ་
A10a  Number T10 Sing
T11 d 49 52 དེ་√d
A11a  PronType T11 Dem
T12 V 52 55 རེད་
A12a  Tense T12 Invar
~~~
> _This is the chapter on the story of the great sentient being giving his body to the tigress._ (MT - An Oral Commentary on The Tale of the Hungry Tigress: A Reader of Classical Tibetan 1.1)

#### `arg1, argcl`

The following example shows a clausal argument of the verb བསམས་ "think".
The content head word of the embedded clause (the verb བསྡད་) is linked to this
verb by the `argcl` relationship.

~~~ ann
ནང་ལ་བསྡད་འདུག་ག་ངས་ནི་རང་བསྡད་ཨ་ཡོད་བསམས་བྱུང་།
T1  N 0 3 ནང་
A1a Number T1 Sing
T3  V 5 10  བསྡད་
A3a Tense T3 Past
A3b Args T3 nsubj
T4  V 10 15 འདུག་
A4a Tense T4 Invar
T6  p 17 18 ང་
A6a PronType T6 Pers
T8  p 23 26 རང་
A8a PronType T8 Pers
T9  V 26 31 བསྡད་
A9a Tense T9 Past
A9b Args T9 nsubj
R9a nsubj Arg1:T9 Arg2:T8
T11 V 33 37 ཡོད་
A11a  Tense T11 Invar
T12 V 37 42 སེམས་
A12a  Tense T12 Past
R12a  arg1 Arg1:T12 Arg2:T6
R12b  argcl Arg1:T12 Arg2:T9
T13 V 42 47 བྱུང་√x
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
T2  p 5 6 ང་
T4  N 8 14  ཨང་ཀི་
A4a Number T4 Sing
T5  d 14 17 དེ་√d
A5a PronType T5 Dem
T6  V 17 21 འབུལ་
R6a arg2 Arg1:T6 Arg2:T4
T7  V 24 28 ཕྱིན་
A7a Tense T7 Past
R7a arg1 Arg1:T7 Arg2:T2
R7b argcl Arg1:T7 Arg2:T6
~~~
> _I will go give the number._ (MT - A Visit to the Hospital, Abridged)

#### `arg1`

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
ང་ལྦ་ཤིང་ཀྲན་སྒྲི་སི་ལ་ཕྱིན་པ་ཡིན་བདུན་ཕྲག་གཉིས།
T1  p 0 2 ང་
T2  P 2 21   ལྦ་ཤིང་ཀྲན་སྒྲི་སི་
T4  V 23 30  ཕྱིན་པ་
A4a Tense T4 Past
A4b VerbForm T4 Vnoun
R4a arg1 Arg1:T4 Arg2:T1
R4b obl Arg1:T4 Arg2:T2
R4c obl Arg1:T4 Arg2:T6
T5  V 30 34 ཡིན་
A5a Tense T5 Invar
T6  N 34 43 བདུན་ཕྲག་
A6a Number T6 Sing
T7  Num 43 47 གཉིས་
~~~
> _I went to Washington D.C for two weeks._ (MT - A Handmade Altar)

The next example shows the same verb ཕྱིན་ occurring with a single
argument, referring to the passage of time. 
The head (verb) of the adverbial clause is linked to the main verb via 
the [`advcl`](http://universaldependencies.org/u/dep/advcl.html) relation.

~~~ ann
དེ་ཚོ་བརྒྱབ་ནས་ལོ་ག་ཚོད་ཕྱིན་ཡོད་རེད།
T1  d 0 3 དེ་√d
A1a PronType T1 Dem
T3  V 6 12  རྒྱག་√1
A3a Tense T3 Past
R3a arg2 Arg1:T3 Arg2:T1
T5  N 15 18 ལོ་
A5a Number T5 Sing
T6  d 18 24 ག་ཚོད་
A6a PronType T6 Int
T7  V 24 29 ཕྱིན་
A7a Tense T7 Past
R7a arg1 Arg1:T7 Arg2:T5
R7b advcl Arg1:T7 Arg2:T3
T8  V 29 33 ཡོད་
A8a Tense T8 Invar
T9  V 33 36 རེད་√1
A8a Tense T8 Invar
~~~
> _How many years has it been since they were built?_ (MT - The Chapter 26 Dialog from A Manual)

Another example of a single argument verb in many of its uses is ཡོད་.

### Missing arguments 

In Tibetan, verbal arguments are often inferred from the context or from previous
discourse. In the following example, the verb is linked to its `arg2`, 
but `arg1` is not present.

~~~ ann
ཡི་གེ་དེ་བླ་མ་ལ་ཕུལ།
T1  N 0 6  	ཡི་གེ་
A1a Number T1 Sing
T3  N 9 14  བླ་མ་
A3a Number T3 Sing
T5  V 16 19 འབུལ་
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

## Specific constructions

### Auxiliaries

In a verbal linking construction, we use the 
[`aux`](http://universaldependencies.org/u/dep/all.html#al-u-dep/aux) 
relation to link a `V` or `V n`
to the `x` or `x n`. The copula itself does not have an
argument structure when used as an auxiliary in periphrastic constructions. 

### Copulas

In a copular linking construction, we use the 
[`cop`](http://universaldependencies.org/u/dep/all.html#al-u-dep/cop)
relation to link a predicate
(e.g. an adjective) to the `x` or `x n`. The copula itself does not have an
argument structure. 

### Honorific verbal compounds

Honorific verbal compounds in Tibetan are formed by prepending an honorific `NOUN`
to a `VERB`, without altering the argument structure of the host. For example:

~~~ ann
ཡབ་མི་ལ་ཤེས་རབ་རྒྱལ་མཚན་སྐུ་གཤེགས་
T104  N 0 3  ཡབ་
A104a Number T104 Sing
T105  PN 3 24  མི་ལ་ཤེས་རབ་རྒྱལ་མཚན་
T106  N 24 28  སྐུ་
A106a Number T106 Sing
T107  V 28 34  གཤེགས་
R14 arg1 Arg1:T107 Arg2:T104
R85 compound Arg1:T107 Arg2:T106
~~~

If སྐུ་ were coded as `arg2`, then the valency of གཤེགས་ would needlessly shift
just because it's an honorific. This doesn't seem warranted, and so we instead
link སྐུ་ to the གཤེགས་ via the `compound` relation.
 
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
T1  N 0 6 གོམ་པ་
A1a Number T1 Sing
T2  V 6 11  རྒྱག་√1
A2a Tense T2 Past
R2a arg2 Arg1:T2 Arg2:T1
T3  V 11 15 བྱེད་
A3a Tense T3 Past
T4  V 15 18 ཐད་
A4a Tense T4 Fut,Pres
~~~
> _Let's walk there._ (MT - A Visit to the Hospital, Abridged)

In the following case, by contrast, the adverbial phrase ལན་གསུམ་ "three times"
intervenes, showing that the component parts of the light verb construction
are separable.

~~~ ann
གོམ་པ་ལན་གསུམ་རྒྱབ་ཤོག
T1  N 0 6 གོམ་པ་
A1a Number T1 Sing
T2  N 6 9 ལན་
A2a Number T2 Sing
T3  n 9 14  གསུམ་
A3a NumType T3 Card
T4  V 14 19 རྒྱག་√1
A4a Tense T4 Pres
R4a arg2 Arg1:T4 Arg2:T1
T5  V 19 22 ཤོག
~~~
> _Take three steps._ (MT - Sang né la: A0002)

There are also examples in Classical Tibetan, for example:

~~~ ann
ཞང་པོས་སོ་ནམ་བྱས་པའི་ནས་
T16     N 0 5      ཞང་པོ
A16a    Number T16 Sing
T17     C 5 7       ས་
A17a    Case T17 Agn
T18     N 7 13      སོ་ནམ་
A18a    Number T18 Sing
T19     V 13 18      བྱས་པ
A19a    Tense T19 Past
A19b    VerbForm T19 Vnoun
T20     C 18 21      འི་
A20a    Case T20 Gen
T21     N 21 24    ནས་
R1      arg1 Arg1:T19 Arg2:T16
R2      arg2 Arg1:T19 Arg2:T18
~~~
> _the barley which was cultivated by the uncle_ (CT - Mila 11a)

The UD project appears to suggest that in light verb constructions, the `NOUN` 
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
across different stages of the history of the language. Light verb constructions 
are widespread in Modern Tibetan, but perhaps less so in Classical and Old Tibetan.
Yet, it is certainly possible that members of this construction arose from
collocations that were once semantically compositional. Third and finally, 
in the absence of sound syntactic tests, there is a certain subjectivity 
in diagnosing light verb constructions. We are not convinced that
annotators would agree on when to label the `compound` relation.

Despite these objections, the importance to our project of identifying 
light verbs cannot be understated. A proper verb lexicon for Tibetan needs 
to include those `NOUN` + `VERB` collocations that convey fundamental verbal 
meanings in the language.

#### Special cases

In the above cases, which are typical examples of light verbs, the `NOUN`
fills an argument position without introducing additional arguments. However,
in other cases that we have found, the noun in a light verb construction
causes the valency of the verb to change, introducing another otherwise
unlicensed argument. For example, ཡོད་ itself occurs surprisingly as a light
verb in the following examples:

> ཞལ་ཆེམས་ཀྱི་ཡི་གེ་རྒྱུས་ཡོད་པ་

> _[They] had knowledge of the written testament._ (CT - Mila 11a)

Here, རྒྱས་ "knowledge" is linked as `arg1` while ཡི་གེ་ "letter" is linked as `arg2`.

### Relative clauses

Repeating the example from above:

~~~ ann
ཞང་པོས་སོ་ནམ་བྱས་པའི་ནས་
T16     N 0 5      ཞང་པོ
A16a    Number T16 Sing
T17     C 5 7       ས་
A17a    Case T17 Agn
T18     N 7 13      སོ་ནམ་
A18a    Number T18 Sing
T19     V 13 18      བྱས་པ
A19a    Tense T19 Past
A19b    VerbForm T19 Vnoun
T20     C 18 21      འི་
A20a    Case T20 Gen
T21     N 21 24    ནས་
R1      arg1 Arg1:T19 Arg2:T16
R2      arg2 Arg1:T19 Arg2:T18
~~~
> _the barley which was cultivated by the uncle_ (CT - Mila 11a)



