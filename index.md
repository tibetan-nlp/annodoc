---
layout: entry
title: Annotation Documentation 
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

This advantage is also be evident when investigating a single language from
a diachronic perspective. LIM examines predicate-argument structure in Old,
Classical, and Modern Tibetan, a period spanning over one century and one that
witnesses changes in argument and predicate marking over time.
A particular predicate might mark its agent with one case marker at one stage, 
and another at another stage. Viewing predicate-argument annotation
as a relation between content words allows us to both abstract over such differences and
to describe them in a systematic way. 

## Table of contents

* [Annotation interface](#annotation-interface)
* [Annotation examples](#annotation-examples)
* [Missing arguments](#missing-arguments)
* [Multiword expressions](#multiword-expressions)

## Annotation interface

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

Open class words such as nouns can be linked to predicates as 
their arguments, and so we retain most open class word tags, leaving them capitalized 
but abbreviating them to one character. 
As for closed class words, we include only those categories - determiners,
numerals, and pronouns - which can "head" a noun phrase in the absence of
a head noun. Other closed class categories - such as case markers (ADP) - never 
occur on their own, and therefore for the purposes of predicate-argument
annotation, their tags may be omitted from the UI.

By excluding closed class function words such as case markers (ADP) and 
converbs (SCONJ), the above approach is unable to capture the manner in which
a predicate's arguments are introduced, and therefore incapable of profiling
the valency of a predicate, or its change in valency over time. Therefore, it is 
also necessary to add dependency relations between these function
words and the content words they depend on. In this way, we can capture the fact
that a verbal argument is marked with agentive case on one occasion, but left
unmarked on another occasion. We achieve this objective with a second, 
semi-automated sweep through the data.
This sweep links numerals, determiners, and case markers (ADP) to the nouns they 
depend on, and also links converbs (SCONJ) and final particles (PART) to the verbs they
depend on. Human adjudication is required to confirm the accuracy of the sweep.

## Annotation examples

The following example shows a use of the two-place predicate "write". The writer
is the best proto-agent and so is marked as *nsubj*. The rightmost of three nominals
linked by two genitives ('letter') is marked as *obj*.

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
R1  nsubj Arg1:T6 Arg2:T8
R2  obj Arg1:T5 Arg2:T8
~~~
> Who wrote your last testment?

## Missing arguments 

In Tibetan, verbal arguments are often inferred from the context or from previous
discourse. In the following example, the verb is linked to its object and indirect
object, but there is no overt subject. Provided that the arguments that do appear
are annotated as *obj* and *iobj*, then it is not necessary to insert a zero
element for the missing subject. It is understood that two-place predicates must
have an *nsubj* argument - therefore, a verb with an *obj* and *iobj* must have
a missing subject.

~~~ ann
ཡི་གེ་དེ་བླ་མ་ལ་ཕུལ།
T1  N 0 6  	ཡི་གེ་
A1a Number T1 Sing
T3  N 9 14  བླ་མ་
A3a Number T3 Sing
T5  V 16 19 འབུལ་
R1  obj Arg1:T1 Arg2:T5
R2  iobj Arg1:T3 Arg2:T5
~~~
> (He) presented the letter to the lama.

The same logic applies to the omission of *obj*. Provided *iobj* is present,
then *obj* is inferred, since two-place predicates must have an *nsubj* and
an *obj*. Unfortunately, this reasoning does not allow us to distinguish 
between a three-place predicate with a missing *iobj* and a two-place predicate. 
We do not yet know  whether this situation arises in practice - that is, 
whether or not we will need to distinguish, for the same lemma, 
between two-place and three-place valency variants.

## Multiword expressions
