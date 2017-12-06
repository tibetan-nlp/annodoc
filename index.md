---
layout: entry
title: LIM Annotation Documentation  
---

This site provides documentation of the annotation scheme for
Tibetan language texts used by the project *Lexicography in Motion* (LIM)
based at SOAS University of London and the Bavarian Academy of Sciences
and Humanities (_Bayerische Akademie der Wissenschaften_) in Munich.
The project is focused on verbs.  Our primary objective is to
annotate the predicate-argument structure of verbs in the service
of building a corpus-based Tibetan verb lexicon.

Where possible, our annotation scheme follows the guidelines of the
[Universal Dependencies](http://universaldependencies.org/) project.

Please see the following pages for further details.

- [Deprels](/deprels)

## Table of contents

* [Introduction](#introduction)
* [Universal dependencies](#universal-dependencies)
    * [Part-of-speech tags](#part-of-speech-tags)
    * [Dependency relations](#dependency-relations)
* [Arguments](#arguments)
* [Constructions](#constructions)
    * [Auxiliaries]()
    * [Copulas]()
    * [Complex predicates]()
    * [Relative clauses]()
    * [Quotatives]()

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

## Deprels 

### Arguments 

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

This section gives examples of the various argument relations. Because
arguments can generally be omitted, care must be taken
to assign the correct roles to the arguments that are overt.

### Obliques

We use the [`obl`](http://universaldependencies.org/u/dep/obl.html) relation
to mark unmarked nominals that act as adverbials, and arguments marked with
adpositions other than agentive case, regardless of whether or not they are
considered to be arguments of the verb.

### Other

## Constructions

