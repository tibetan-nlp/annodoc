---
layout: entry
title: Lexicography in Motion - Annotation Documentation 
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

This advantage would also be evident when investigating a single language from
a diachronic perspective. LIM examines predicate-argument structure in Old,
Classical, and Modern Tibetan, a period spanning over one century, and there are likely 
to be changes in argument and predicate marking over time.
A particular predicate might mark its agent with one case marker at one stage, 
and another at another stage. Viewing predicate-argument annotation
as a relation between content words allows us to both abstract over such differences and
to describe them in a systematic way. 

## Table of contents

* [Annotation interface](#annotation-interface)
* [Zero arguments](#zero-arguments)
* [Multiword expressions](#multiword-expressions)

## Annotation interface

### Predicate-argument annotation

Since we are concerned primarily with annotating predicate-argument
structure as a relation between content words, we declutter the user interface
by simplifying and minimizing the display of part-of-speech tags. First, we use 
universal POS tags as mapped from the [SOAS system](http://larkpie.net/tibetancorpus/tags).
Second, for the purposes of the annotation interface, we use shortened versions of
some [universal POS tags](http://universaldependencies.org/u/pos/all.html), while 
omitting others.

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
annotation, their tags may be omitted from the user interface.

The following example shows a use of the two-place predicate "write". The writer
is the best proto-agent and so is marked by *nsubj*. The rightmost of three nominals
linked by two genitives ('letter') is marked by *obj*.

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
E1  V:T8 Arg1:T6 Arg2:T5
~~~
> Who wrote your last testment?


### Annotating function words

By excluding closed class categories such as case markers (ADP) and 
converbs (SCONJ), the above approach is unable to capture the manner in which
a predicate's arguments are introduced, and therefore incapable of profiling
the valency of a predicate, or its change in valency over time. Therefore, it is 
also necessary to add dependency relations between these function
words and the content words they depend on. In this way we can capture the fact
that a verbal argument is marked with agentive case on one occasion, but left
unmarked on another occasion.

We will achieve this objective with a second, semi-automated sweep through the data.
This sweep will link numerals, determiners, and case markers (ADP) to the nouns they 
depend on, and also link converbs (SCONJ) and final particles to the verbs they
depend on. Human adjudication will be required to confirm the accuracy of this sweep.

~~~ ann
The rain is reallyinterestingwhat do you thinkabout it I wishIhadanidea!
T1      N 0 11  ངོ་མཚར་དོན་
A1a     Number T1 Sing
T3      N 15 23 རིན་ཆེན་
A3a     Number T3 Coll
T7      V 30 34 རྙེད
A7a     Tense T7 Fut,Pres
E1      V:T7 Arg1:T1 Arg2:T3
~~~

~~~ ann
ངོ་མཚར་དོན་གྱི་རིན་ཆེན་ཅིས་མི་རྙེད།
T1	N 0 11	ངོ་མཚར་དོན་
A1a	Number T1 Sing
T3	N 15 23	རིན་ཆེན་
A3a	Number T3 Coll	
T4	PR 23 25	ཅི
A4a	PronType T4 Int
T7	V 30 34	རྙེད
A7a	Tense T7 Fut,Pres
~~~

~~~ ann
ངོ་མཚར་དོན་གྱི་རིན་ཆེན་ཅིས་མི་རྙེད།
T1	N 0 11	ངོ་མཚར་དོན་
A1a	Number T1 Sing
T2	c 11 15	གྱི་
T3	N 15 23	རིན་ཆེན་
A3a	Number T3 Coll	
T4	PR 23 25	ཅི
A4a	PronType T4 Int
T5	c 25 27	ས་
T6	p 27 30	མི་
A6a	Polarity T6 Neg
T7	V 30 34	རྙེད
A7a	Tense T7 Fut,Pres
~~~

~~~ ann
ངོ་མཚར་དོན་གྱི་རིན་ཆེན་ཅིས་མི་རྙེད།
T1	NOUN 0 11	ངོ་མཚར་དོན་
A1a	Number T1 Sing
T2	ADP 11 15	གྱི་
R2	case Arg1:T1 Arg2:T2
T3	NOUN 15 23	རིན་ཆེན་
A3a	Number T3 Coll	
T4	PRON 23 25	ཅི
A4a	PronType T4 Int
T5	ADP 25 27	ས་
R5	case Arg1:T4 Arg2:T5
T6	PART 27 30	མི་
A6a	Polarity T6 Neg
R6	advmod Arg1:T7 Arg2:T6
T7	VERB 30 34	རྙེད
A7a	Tense T7 Fut,Pres
T8	PUNCT 34 35	།
R8	punct Arg1:T7 Arg2:T8
~~~

~~~ ann
Clevercookie this is whereit is at.Just tell mewhoyouare and I'll get onit.
T1      NOUN 0 11       ངོ་མཚར་དོན་
A1a     Number T1 Sing
T2      ADP 11 15       གྱི་
R2      case Arg1:T1 Arg2:T2
T3      NOUN 15 23      རིན་ཆེན་
A3a     Number T3 Coll
T4      PRON 23 25      ཅི
A4a     PronType T4 Int
T5      ADP 25 27       ས་
R5      case Arg1:T4 Arg2:T5
T6      PART 27 30      མི་
A6a     Polarity T6 Neg
R6      advmod Arg1:T7 Arg2:T6
T7      VERB 30 34      རྙེད
A7a     Tense T7 Fut,Pres
T8      PUNCT 34 35     །
R8      punct Arg1:T7 Arg2:T8
~~~


~~~ ann
ངོ་མཚར་དོན་གྱི་རིན་ཆེན་ཅིས་མི་རྙེད།
T1	ω 0 11	ངོ་མཚར་དོན་
A1a	Number T1 Sing
T2	ω 11 15	གྱི་
R2	case Arg1:T1 Arg2:T2
T3	ω 15 23	རིན་ཆེན་
A3a	Number T3 Coll	
T4	ω 23 25	ཅི
A4a	PronType T4 Int
T5	ω 25 27	ས་
R5	case Arg1:T4 Arg2:T5
T6	ω 27 30	མི་
A6a	Polarity T6 Neg
R6	advmod Arg1:T7 Arg2:T6
T7	ω 30 34	རྙེད
A7a	Tense T7 Fut,Pres
T8	ω 34 35	།
R8	punct Arg1:T7 Arg2:T8
~~~

~~~ ann
ངོ་མཚར་དོན་གྱི་རིན་ཆེན་ཅིས་མི་རྙེད།
T1	μ 0 11	ངོ་མཚར་དོན་
A1a	Number T1 Sing
T2	μ 11 15	གྱི་
R2	case Arg1:T1 Arg2:T2
T3	μ 15 23	རིན་ཆེན་
A3a	Number T3 Coll	
T4	μ 23 25	ཅི
A4a	PronType T4 Int
T5	μ 25 27	ས་
R5	case Arg1:T4 Arg2:T5
T6	μ 27 30	མི་
A6a	Polarity T6 Neg
R6	advmod Arg1:T7 Arg2:T6
T7	μ 30 34	རྙེད
A7a	Tense T7 Fut,Pres
T8	μ 34 35	།
R8	punct Arg1:T7 Arg2:T8
~~~

~~~ ann
ངོ་མཚར་དོན་གྱི་རིན་ཆེན་ཅིས་མི་རྙེད།
T1	. 0 11	ངོ་མཚར་དོན་
A1a	Number T1 Sing
T2	. 11 15	གྱི་
R2	case Arg1:T1 Arg2:T2
T3	. 15 23	རིན་ཆེན་
A3a	Number T3 Coll	
T4	. 23 25	ཅི
A4a	PronType T4 Int
T5	. 25 27	ས་
R5	case Arg1:T4 Arg2:T5
T6	. 27 30	མི་
A6a	Polarity T6 Neg
R6	advmod Arg1:T7 Arg2:T6
T7	. 30 34	རྙེད
A7a	Tense T7 Fut,Pres
T8	. 34 35	།
R8	punct Arg1:T7 Arg2:T8
~~~

<span style="float:right;font-size:75%;opacity:0.5">(Not seeing a visualization above? See <a href="#troubleshooting">troubleshooting</a>)</span>

</div>

this example is generated from the following input:

    Mentions of person names are annotated as [PERSON]()

    ~~~ ann
    Barack Obama is the current president.
    T1 PERSON 0 12 Barack Obama
    ~~~

* .ann standoff format: <http://brat.nlplab.org/standoff.html>


## Zero arguments 

## Multiword expressions

## .ann standoff format

This section provides information on the .ann standoff (Ann) format.
For full documentation, please refer to
<http://brat.nlplab.org/standoff.html>.

### Ann format: annotation primitives

The following example illustrates some of the basic Ann format
annotation primitives that are supported in visualizations. The
annotation

    ~~~ ann
    Sony formed a joint venture with Ericsson, a company based in Sweden.
    T1 Organization 0 4	Sony
    T2 MERGE-ORG 14 27	joint venture
    T3 Organization 33 41	Ericsson
    E1 MERGE-ORG:T2 Org1:T1 Org2:T3
    T4 Country 62 68	Sweden
    R1 Origin Arg1:T3 Arg2:T4
    A1 Name T4
    ~~~

is visualized as follows:

~~~ ann
Sony formed a joint venture with Ericsson, a company based in Sweden.
T1 Organization 0 4	Sony
T2 MERGE-ORG 14 27	joint venture
T3 Organization 33 41	Ericsson
E1 MERGE-ORG:T2 Org1:T1 Org2:T3
T4 Country 62 68	Sweden
R1 Origin Arg1:T3 Arg2:T4
A1 Name T4
~~~

This example involves *text-bound* annotations, an *attribute*
annotation, an *event* annotation, and a *relation* annotation. All
annotations occupy a single line of the input and begin with a unique
identifier. The remaining structure varies depending on the annotation
primitive.

### Ann format: text-bound annotations

Text-bound annotations identify a span of text using `(start, end)`
offsets and assign it a type (note that the marked text is repeated
for reference):

    T1 Organization 0 4	Sony
    T2 MERGE-ORG 14 27	joint venture
    T3 Organization 33 41	Ericsson
    T4 Country 75 81	Sweden

Text-bound annotations can be used, for example, to mark mentions of
specific named entities in text (`Sony`, `Ericsson` and `Sweden`
above) or the "triggers" of event annotations (`joint venture`).

In addition to simple `(start, end)` spans, discontinuous span
annotations are also supported using the syntax `START END[;START
END[...]]`. For example,

    ~~~ ann
    Barack and Michelle Obama
    T1 PERSON 0 6;20 25 Barack Obama
    T2 PERSON 11 19 Michelle
    ~~~

gives

~~~ ann
Barack and Michelle Obama
T1 PERSON 0 6;20 25 Barack Obama
T2 PERSON 11 19 Michelle
~~~

### Ann format: attribute annotations

Attribute annotation associate either a binary flag (e.g. `IsName`) or
a key-value pair (e.g. `Tense`, `Past`) with another annotation, such
as an entity mention (textbound) or an event annotation.

    A1 IsName T4
    A2 Tense E1 Past

### Ann format: relation annotations

Relation annotations relate two other annotations and have a type
(e.g. `Origin`).

    R1 Origin Arg1:T3 Arg2:T4

### Ann format: event annotations

Event annotations associate any number of annotations in specific
roles (e.g. `Theme`, `Cause`), identifying the event with a type
(e.g. `MERGE-ORG`) and a textbound annotation expressing it in text.

    E1 MERGE-ORG:T2 Org1:T1 Org2:T3

### Ann format: other annotation primitives

The [.ann standoff] format additionally supports equivalence
relations, normalization annotations and comment (or note)
annotations. These annotation primitives are presently not supported
in Annodoc.

