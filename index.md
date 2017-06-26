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

Our annotation guidelines follow the UD project in privileging content words over
function words. Instead of linking a predicate to the function word (for example, the case
marker) that marks its argument, we link the predicate to the content head word (for example,
the head noun) of the argument. Function words then depend on the content words which they "modify".

The UD project maintains that there is an advantage to this approach:

> Preferring content words as heads maximizes parallelism between languages because content words vary less than function words between languages. In particular, one commonly finds the same grammatical relation being expressed by morphology in some languages or constructions and by function words in other languages or constructions, while some languages may not mark the information at all (such as not marking tense or definiteness).

This advantage is also evident when investigating a single language from
a diachronic perspective. LIM examines predicate-argument structure in Old,
Classical, and Modern Tibetan, a period spanning over a century - a period
that witnessed significant changes in argument and predicate marking.
A particular predicate might mark its agent with one case marker at one stage, 
and another at another stage. Viewing predicate-argument annotation
as a relation between content words allows us to both abstract over such differences and
to describe them in a systematic way. 

The following guidelines are designed for *annotators* as opposed to *lexicographers*,
and as such the aim is to keep them as simple and manageable as possible. Annotators
should be able to agree with each other on their implementation of these instructions.
We aim to keep semantic decisions to a minimum, leaving such considerations to the
lexicographer.

## Table of contents

* [Introduction](#introduction)
* [Annotation interface](#annotation-interface)
  * [POS tags](#pos-tags)
  * [Dependency relations](#dependency-relations)
* [Annotation examples](#annotation-examples)
  * [Three-place predicates](#three-place-predicates)
  * [Two-place predicates](#two-place-predicates)
  * [One-place predicates](#one-place-predicates)
  * [Missing arguments](#missing-arguments)
* [Multiword expressions](#multiword-expressions)

## Introduction

The examples below are drawn from Old (OT), Classical (CT) and
Modern Tibetan (MT). Each example is cited with its stage and source.

## Annotation interface

### POS tags

Since we are concerned primarily with annotating predicate-argument
structure as a relation between content words, we declutter the user interface
by simplifying and minimizing the display of part-of-speech tags. First, we use 
universal POS tags rather than the more verbose SOAS tags. These tags are mapped 
directly from the [SOAS system](http://larkpie.net/tibetancorpus/tags)
without any loss of information.
Second, for the purposes of the annotation interface, we use shortened versions of
some [universal POS tags](http://universaldependencies.org/u/pos/all.html), while 
omitting others entirely from the UI.

- ADJ -> **A**
- ADV -> **D**
- NOUN -> **N** (excluding *n.rel*)
- PROPN -> **P**
- VERB -> **V**
- DET -> **d** (only *d.dem*)
- NUM -> **n**
- PRON -> **p**
- X -> **X**

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

Arguments depend on predicates via typed dependency relations. In order to
generalize across instances of a predicate, it is necessary to adopt a consistent
argument labeling policy.
We follow the UD project and use three dependency relations for core arguments.
The most agentive argument is labeled `nsubj`, the second and most affected argument
(often a patient) is labeled `obj`, and the third and final argument is labeled `iobj`.
It is understood that the second and third arguments rely on the
existence of the first and second, respectively. Therefore, there can be no `obj`
without an `nsubj`, and no `iobj` without an `obj`. This becomes important
when considering sentences with [missing arguments](#missing-arguments).

## Annotation examples

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
A8b Args T8 2:(nsubj,obj) 
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
A5b Args T5 2:(nsubj,obj)
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
A5b Args T5 3:(nsubj,obj,iobj)
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

One possible solution to this problem would be to introduce empty elements to hold
the place of missing arguments and participate in the necessary dependency relations.
Given that Tibetan's word-order is extremely flexible, it would be difficult to
know where to put such empty elements, if one was inclined to use them. A simpler
solution - and the one we adopt - is to attach an attribute to the verb which states
how many and what types of arguments it has. Hover over any of the verbs in the
examples on this page and you will see this attribute.


## Multiword expressions
