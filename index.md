---
layout: entry
title: LIM Annotation Documentation 
---

This page provides documentation of the annotation scheme for
Tibetan language texts used by the project *Lexicography in Motion* (LIM) 
based at SOAS University of London and LMU Munich.

The project is focused on verbs, with the annotation of predicate-argument structure
a key objective. In the process, we hope to build a dependency corpus for
Tibetan that can be contributed to the [Universal Dependencies](http://universaldependencies.org/)
project.

## Table of contents

* [Introduction](#introduction)
* [Universal dependencies](#universal-dependencies)
  * [Part-of-speech tags](#part-of-speech-tags)
  * [Dependency relations](#dependency-relations)
* [Annotation examples](#annotation-examples)
  * [Three-place predicates](#three-place-predicates)
  * [Two-place predicates](#two-place-predicates)
  * [One-place predicates](#one-place-predicates)
  * [Missing arguments](#missing-arguments)
* [Multiword expressions](#multiword-expressions)

## Introduction

The following guidelines are designed for *annotators* rather than *lexicographers*.
The aim is to create a set of easy to follow instructions that facilitate a high 
degree of inter-annotator agreement. In particular, we aim
to keep semantic decisions to a minimum, leaving such considerations to the
lexicographer. For each part-of-speech tagged annotation unit,
we ask the annotator to perform the following tasks:

1. Identify and label the verbs.
    * Identify each verb.
    * Label each verb with the argument frame that is required to capture
    all of its understood arguments on that occasion of use.
1. Identify and label the core arguments of each verb.
    * Identify at most one head word for each core argument position.
    * Link each argument head word to its verb using one of the following
    dependency relations: `nsubj`, `obj`, `iobj`, `csubj`, `ccomp` or `xcomp`.
1. Identify and label the oblique modifiers of each verb.
    * Identify any modifiers related to the verb.
    * Link the head word of each such modifier to the verb, using one of
    the following dependency relations: `advcl`, `acl`, or `obl`. 

This task list poses some challenges for the annotator. 
Implicit in step 2 is the requirement
that the annotator is able to discern when the core arguments of a verb
have been omitted (see [missing arguments](#missing-arguments)). Fortunately,
the initial identification of a verb's core argument structure should suffice
to solve this problem in most cases, given the paucity of non-form affecting 
valency shifting operations in Tibetan.

The second obvious challenge for the annotator is to distinguish between
core arguments and oblique modifiers. Given that core arguments can be
omitted, optionality of overt expression cannot be the key factor. We may have
to learn this as we go along, documenting the specific `ADP`, `SCONJ` and other 
function words that are likely to signal an oblique.

Note that annotators are not asked to do the following:

1. Identify equivalencies across different verbs.
2. Label the semantic roles of core arguments or oblique modifiers.

For example, the `nsubj` for different verbs could be marked with completely
different `ADP`, or have completely different semantic roles. It is only
necessary that a given verb's `nsubj` is held constant across the various
uses of *the same verb*.

## Universal dependencies

### Part-of-speech tags

Since we are concerned primarily with annotating predicate-argument
structure as a relation between content words, we declutter the user interface
by simplifying and minimizing the display of part-of-speech tags. First, we use 
universal POS tags rather than the more verbose SOAS tags. These tags are mapped 
directly from the [SOAS system](http://larkpie.net/tibetancorpus/tags)
without any loss of information.
Second, for the purposes of the annotation interface, we use shortened versions of
some [universal POS tags](http://universaldependencies.org/u/pos/all.html), while 
omitting others entirely from the UI.

- `ADJ` -> `A`
- `ADV` -> `D`
- `NOUN` -> `N` (excluding `n.rel`)
- `PROPN` -> `P`
- `VERB` -> `V`
- `DET` -> `d` (only `d.dem`)
- `NUM` -> `n`
- `PRON` -> `p`
- `X` -> `X`

Open class word classes such as `NOUN` can be linked to predicates as 
their arguments, and so we retain most open class word tags, leaving them capitalized 
but abbreviating them to one character. 
As for closed class words, we include only those categories - `DET`,
`NUM` and `PRON` - which can "head" a noun phrase in the absence of
a `NOUN`. Other closed class categories - such as `ADP` - never 
occur on their own, and therefore for the purposes of predicate-argument
annotation, their tags may be omitted from the UI.

By excluding closed class function words such as `ADP` and `SCONJ`,
the above approach is unable to capture the manner in which
a predicate's arguments are introduced, and therefore incapable of fully profiling
the valency of a predicate, or its change in valency over time. Therefore, it is 
also necessary to add dependency relations between these function
words and the content words they depend on. In this way, we can capture the fact
that a verbal argument is marked with agentive case on one occasion, but left
unmarked on another occasion. We achieve this objective with a second, 
semi-automated sweep through the data.
This sweep links `NUM`, `DET` and `ADP` to the nouns they 
depend on, and also links `SCONJ` and `PART` to the verbs they
depend on. Human adjudication is required to confirm the accuracy of the sweep.

### Dependency relations

Our annotation guidelines follow the UD project in privileging content words over
function words. Instead of linking a predicate to the function word (for example, the case
marker) that marks its argument, we link the predicate to the content head word (for example,
the head noun) of the argument. Function words then depend on the content words which they "modify".

The UD project maintains that there is an advantage to this approach:

> Preferring content words as heads maximizes parallelism between languages because content words vary less than function words between languages. In particular, one commonly finds the same grammatical relation being expressed by morphology in some languages or constructions and by function words in other languages or constructions, while some languages may not mark the information at all (such as not marking tense or definiteness).

This advantage is also evident when investigating a single language from
a diachronic perspective. LIM examines predicate-argument structure in Old,
Classical, and Modern Tibetan - a period spanning over a century, and one
that witnessed significant changes in argument and predicate marking.
A particular predicate might mark its agent with one case marker at one stage, 
and another at another stage. Viewing predicate-argument annotation
as a relation between content words allows us both to abstract over such differences and
to describe them in a systematic way.

Arguments depend on predicates via typed dependency relations. In order to
generalize across instances of a predicate, it is necessary to adopt a consistent
argument labeling policy.
We follow the UD project and use three dependency relations for most core arguments.
The most agentive argument is labeled `nsubj`, the second and most affected argument
(often a patient) is labeled `obj`, and the third and final argument is labeled `iobj`.
It is understood that the second and third arguments rely on the
existence of the first and second, respectively. Therefore, there can be no `obj`
without an `nsubj`, and no `iobj` without an `obj`. This becomes important
when considering sentences with [missing arguments](#missing-arguments).

The additional dependency relations `csubj`, `ccomp` and `xcomp` are available
for marking core arguments that are clausal in nature.

## Annotation examples

In this section, we draw examples from Old (OT), Classical (CT) and
Modern Tibetan (MT). Each example is cited with its stage and source.

### Three-place predicates

The arguments of a three-place predicate are marked `nsubj`, `obj`, and `iobj`.

### Two-place predicates

The arguments of a two-place predicate are marked `nsubj` and `obj`, as in the
the following example with the verb "to write". Here, the agent (the writer)
is marked `nsubj`, and the rightmost of three nominals linked by two 
genitives ("letter") is marked `obj`.

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
A8b Args T8 nsubj,obj 
R1  nsubj Arg1:T6 Arg2:T8
R2  obj Arg1:T5 Arg2:T8
~~~
> _Who wrote your last testment?_ (CT - Milarepa)

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
T5  V 10 15 འབྲི་√1
A5a Tense T5 Past
A5b Args T5 nsubj,obj
R1  nsubj Arg1:T3 Arg2:T5
R2  obj Arg1:T1 Arg2:T5
~~~
> _I wrote the words._ (MT - An Interview with the Fiddler Drado)

### One-place predicates

The sole argument of a one-place predicate is marked `nsubj`.

### Missing arguments 

In Tibetan, verbal arguments are often inferred from the context or from previous
discourse. In the following example, the verb is linked to its object and its indirect
object, but there is no overt subject.

~~~ ann
ཡི་གེ་དེ་བླ་མ་ལ་ཕུལ།
T1  N 0 6  	ཡི་གེ་
A1a Number T1 Sing
T3  N 9 14  བླ་མ་
A3a Number T3 Sing
T5  V 16 19 འབུལ་
A5b Args T5 nsubj,obj,iobj
R1  obj Arg1:T1 Arg2:T5
R2  iobj Arg1:T3 Arg2:T5
~~~
> _(He) presented the letter to the lama._ (CT - Milarepa)

Provided that the arguments that do appear
are annotated as `obj` and `iobj`, then it is not necessary to insert a zero
element for the missing `nsubj`. It is understood that a three-place predicate must
have an `nsubj` argument - therefore, a sentence with an `obj` and `iobj` must have
a missing `nsubj`. The same logic applies to the omission of `obj`. Provided `iobj` is present,
then `obj` is inferred, since three-place predicates must also have an `nsubj` and
an `obj`.

Unfortunately, this reasoning does not allow us to distinguish 
between a saturated two-place predicate and a three-place predicate with 
a missing `iobj`. Nor does it allow us to distinguish between a saturated
one-place predicate and a two-place predicate with a missing `obj`. Finally,
it does not allow us to determine how many arguments a verb has when none of
its arguments are overt.

It is not yet known how often this situation will arise - that is, how often the
same verbal lemma will occur with different numbers of arguments where the 
difference is sense-significant. One solution to this possible problem would be 
to introduce empty elements to hold the place of missing arguments and 
participate in the necessary dependency relations.
Given that Tibetan's word-order is extremely flexible, it would be difficult to
know where to put such empty elements, if one was inclined to use them. A simpler
solution - and the one we adopt - is to attach an attribute to the verb that states
which arguments it has. Hover over any of the verbs in the
examples on this page and you will see this attribute.

## Multiword expressions
