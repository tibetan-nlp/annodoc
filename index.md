---
layout: entry
title: Lexicography in Motion - Annotation Documentation 
---

This page provides documentation of the annotation scheme for
Tibetan language texts used by
the project *Lexicography in Motion* based at SOAS University of London and 
LMU Munich.

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

This advantage could be seen equally when investigating a single language from
a diachronic perspective. Since our project examines predicate-argument structure in Old,
Classical, and Modern Tibetan, a period spanning over one century, there are likely 
to be changes in argument and predicate marking over time.
For example, a particular predicate might mark its agent with one case marker 
at one stage, and another at another stage.
Viewing predicate-argument annotation
as a relation between content words allows us to both abstract over such differences and
to describe them in a systematic way. 

## Table of contents

* [What is Annodoc?](#what-is-annodoc)
* [How does it work?](#how-does-it-work)
* [Getting started](#getting-started)
* [Adding documents](#adding-documents)
* [Visualizations](#visualizations)
* [Multiword expressions](#multiword-expressions)
* [Zero arguments](#zero-arguments)

## What is Annodoc?


~~~ ann
ངོ་མཚར་དོན་གྱི་རིན་ཆེན་ཅིས་མི་རྙེད།
T1	N 0 11	ངོ་མཚར་དོན་
A1a	Number T1 Sing
T3	N 15 23	རིན་ཆེན་
A3a	Number T3 Coll	
T7	V 30 34	རྙེད
A7a	Tense T7 Fut,Pres
E1	V:T7 Arg1:T1 Arg2:T3
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


## Adding documents

To add new documents into the system, simply create a new `.md`
document and add the following front matter at the beginning of the
document:

    ---
    layout: entry
    title: DOCUMENT-TITLE
    ---

(where `DOCUMENT-TITLE` is the title you wish to give to the
document.)

This [YAML] front matter is required for Jekyll to identify the
document as markdown.

If you are using the GitHub (or similar), you can create new documents
simply by clicking on the `+` sign at the top or the repository file
listing.

If you are working locally with Git for version control, you can
create new documents with any text editor and then add newly created
documents to the Git repository, e.g. by running the following
commands:

    git add DOCUMENT.md
    git commit
    git push

(where `DOCUMENT.md` is the name of the new document.)

## Visualizations

As explained in the section [what is annodoc?](#what-is-annodoc),
visualizations are created using a simple syntax that identifies a
section of the document as being annotation in some particular format.
The system then replaces these sections with the corresponding
visualizations.

This section provides examples of various ways to create
visualizations.

### Visualization basics

There are a number of ways to add visualizations into a document.  The
most straightforward one is to wrap annotations in a format `FORMAT`
with the lines `~~~ FORMAT` (before) and `~~~` (after). For example,

    ~~~ ann
    Barack Obama is the current president.
    T1 PERSON 0 12 Barack Obama
    ~~~

gives the following visualization:

~~~ ann
Barack Obama is the current president.
T1 PERSON 0 12 Barack Obama
~~~

Above, the `FORMAT` value `ann` specifies that the source content is
in the [.ann standoff] format. Currently, the following formats are
supported:

* .ann standoff format: <http://brat.nlplab.org/standoff.html>
* Stanford Dependency format: <http://nlp.stanford.edu/software/stanford-dependencies.shtml>
* CoNLL-X format: <http://ilk.uvt.nl/conll/#dataformat>
* CoNLL-U format: <http://universaldependencies.github.io/docs/format.html>

Some more simple examples follow.

A single tree in the Stanford Dependency format can be embedded using
the following syntax:

    ~~~ sdparse
    Dogs run
    nsubj(run, Dogs)
    ~~~

which results in this embedded visualization:

~~~ sdparse
Dogs run
nsubj(run, Dogs)
~~~

Parses represented in the CoNLL-X format can be embedded as illustrated
by the following example:

    ~~~ conllx
    1    Dogs   dog    _    NNS    _    2    nsubj
    2    run    run    _    VBP    _    0    ROOT
    ~~~

gives

~~~ conllx
1    Dogs   dog    _    NNS    _    2    nsubj
2    run    run    _    VBP    _    0    ROOT
~~~

Finally, parses in the CoNLL-U format can be embedded as shown below:

    ~~~ conllu
    1    They    they    PRON    PRN    Case=Nom|Num=Plur            2    nsubj    _    _
    2    buy     buy     VERB    VBP    Num=Plur|Per=3|Tense=Pres    0    root     _    _
    3    books   book    NOUN    NNS    Num=Plur                     2    dobj     _    _
    ~~~

resulting in

~~~ conllu
1       བཅོམ་ལྡན་འདས་     བཅོམ་ལྡན་འདས་     NOUN    n.count Number=Sing     _       _       _       SpaceAfter=No
2       ཤཱཀྱ་སེང་གེ་        ཤཱཀྱ་སེང་གེ་        PROPN   n.prop  _       _       _       _       SpaceAfter=No
3       ལ་      ལ་√case ADP     case.all        _       2       case    _       SpaceAfter=No
4       ཕྱག་     ཕྱག་     NOUN    n.count Number=Sing     _       _       _       SpaceAfter=No
5       འཚལ་    _       VERB    v.fut.v.pres    Tense=Fut,Pres  _       _       _       SpaceAfter=No|[འཚལ་√1][འཚལ་√2]
6       ལོ       འོ་√cv   PART    cv.fin  Mood=Ind        5       discourse       _       SpaceAfter=No
7       །       །       PUNCT   punc    _       5       punct   _       _
~~~

~~~ conllu
1    They    they    PRON    PRN    Case=Nom|Num=Plur            2    nsubj    _    _
2    buy     buy     VERB    VBP    Num=Plur|Per=3|Tense=Pres    0    root     _    _
3    books   book    NOUN    NNS    Num=Plur                     2    dobj     _    _
~~~

The remainder of this section provides further details for each
supported format and additional information on options for embedding
visualizations.

### .ann standoff format

This section provides information on the .ann standoff (Ann) format.
For full documentation, please refer to
<http://brat.nlplab.org/standoff.html>.

#### Ann format: annotation primitives

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

#### Ann format: text-bound annotations

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

#### Ann format: attribute annotations

Attribute annotation associate either a binary flag (e.g. `IsName`) or
a key-value pair (e.g. `Tense`, `Past`) with another annotation, such
as an entity mention (textbound) or an event annotation.

    A1 IsName T4
    A2 Tense E1 Past

#### Ann format: relation annotations

Relation annotations relate two other annotations and have a type
(e.g. `Origin`).

    R1 Origin Arg1:T3 Arg2:T4

#### Ann format: event annotations

Event annotations associate any number of annotations in specific
roles (e.g. `Theme`, `Cause`), identifying the event with a type
(e.g. `MERGE-ORG`) and a textbound annotation expressing it in text.

    E1 MERGE-ORG:T2 Org1:T1 Org2:T3

#### Ann format: other annotation primitives

The [.ann standoff] format additionally supports equivalence
relations, normalization annotations and comment (or note)
annotations. These annotation primitives are presently not supported
in Annodoc.

### Stanford Dependency format

This section provides details on the Stanford Dependency (SD) format.

#### SD format basics

Basic SD format visualizations consist of a single line of text
followed by any number of typed dependencies between words using the
simple format `TYPE(FROM, TO)`. For example, the input

    ~~~ sdparse
    The quick brown fox jumped
    det(fox-4, The-1)
    amod(fox-4, quick-2)
    amod(fox-4, brown-3)
    nsubj(jumped-5, fox-4)
    ~~~

gives

~~~ sdparse
The quick brown fox jumped
det(fox-4, The-1)
amod(fox-4, quick-2)
amod(fox-4, brown-3)
nsubj(jumped-5, fox-4)
~~~

#### SD format: ambiguous tokens

If your example has several instances of the same token, you can use
their position to refer to the exact token. In the following example
`can-5` refers to the fifth token of the sentence, `can`.

    ~~~ sdparse
    I can can the can .
    nsubj(can-3, I)
    aux(can-3, can-2)
    det(can-5,the)
    dobj(can-3,can-5)
    punct(can-3,.)
    ~~~

will result in this visualization

~~~ sdparse
I can can the can .
nsubj(can-3, I)
aux(can-3, can-2)
det(can-5,the)
dobj(can-3,can-5)
punct(can-3,.)
~~~

#### SD format: part-of-speech tags

Part-of-speech (POS) tags are optional and use the format `text/POS`.

    ~~~ sdparse
    POS/NNP tags/NNS can/MD be/VB attached/VBN to/TO tokens/NNS ./.
    nn(tags, POS)
    nsubjpass(attached, tags)
    aux(attached, can)
    auxpass(attached, be)
    prep(attached, to)
    pobj(to, tokens)
    ~~~

~~~ sdparse
POS/NNP tags/NNS can/MD be/VB attached/VBN to/TO tokens/NNS ./.
nn(tags, POS)
nsubjpass(attached, tags)
aux(attached, can)
auxpass(attached, be)
prep(attached, to)
pobj(to, tokens)
~~~

If the source text contains any literal slashes (`/`), these can be
escaped using backslash.

     ~~~ sdparse
     \\/\\ escapes/VBZ :/: \\o\//\\o\/
     nsubj(escapes, \)
     ~~~

~~~ sdparse
\\/\\ escapes/VBZ :/: \\o\//\\o\/
nsubj(escapes, \)
~~~

### Multiple lines of text

The literal sequence `\n` in the SD input text is interpreted as a
newline. (This sequence should be separated by space from the rest of
the input.)

    ~~~ sdparse
    One line \n and another.
    ~~~

gives:

~~~ sdparse
One line \n and another.
~~~

### CoNLL-X format

This section provides information on the visualization of the CoNLL-X
format.

#### CoNLL-X format basics

The [CoNLL-X] format is a format for representing dependency parses,
developed as a variant of previous related formats for the 2006
CoNLL-X shared task on multi-lingual dependency parsing.

Each line in the CoNLL-X format specifies information relating to one
token (or word). For example, the following defines two words

    ~~~ conllx
    1    Dogs   dog    _    NNS    _    2    nsubj    _    _
    2    run    run    _    VBP    _    0    ROOT     _    _
    ~~~

visualized as

~~~ conllx
1    Dogs   dog    _    NNS    _    2    nsubj    _    _
2    run    run    _    VBP    _    0    ROOT     _    _
~~~

The definitions of the various space-separated fields are provided
in the following.

#### CoNLL-X format field definitions

The CoNLL-X format defines 10 fields separated by space (strictly TAB
characters in the original definition):

1. ID: Token counter, starting at 1 for each new sentence.
2. FORM: Word form or punctuation symbol.
3. LEMMA: Lemma or stem of word form.
4. CPOSTAG: Coarse-grained part-of-speech tag.
5. POSTAG: Fine-grained part-of-speech tag.
6. FEATS: Unordered set of syntactic and/or morphological features.
7. HEAD: Head of the current token.
8. DEPREL: Dependency relation to the HEAD.
9. PHEAD: Projective head of current token.
10. PDEPREL: Dependency relation to the PHEAD.

The current implementation of the visualization only uses the `ID`,
`FORM`, `CPOSTAG`, `HEAD` and `DEPREL` attributes.

As an alternative to the `~~~` syntax, you can use the equivalent HTML
tag form, where the format specification appears as the value of the
`class` attribute. For example,

    <div class="sdparse">
    Dogs run
    nsubj(run, Dogs)
    </div>

gives

<div class="sdparse">
Dogs run
nsubj(run, Dogs)
</div>

This form is more flexible in allowing e.g. additional attributes
to control aspects of the visualization. For example,

    <div class="sdparse" id="simple-example-parse" tabs="yes">
    Dogs run
    nsubj(run, Dogs)
    </div>

gives

<div class="sdparse" id="simple-example-parse" tabs="yes">
Dogs run
nsubj(run, Dogs)
</div>

(note the `edit` tab on the top right of the visualization.)

The Kramdown variant of Markdown provides an additional syntax for
specifying attributes called [Attribute List
Definitions](http://kramdown.gettalong.org/syntax.html#attribute-list-definitions)
(ALDs). Using ALDs, the above example can be alternatively written
as

    ~~~
    Dogs run
    nsubj(run, Dogs)
    ~~~
    {:.sdparse}

giving

~~~
Dogs run
nsubj(run, Dogs)
~~~
{:.sdparse}

ALDs can be used to specify arbitrary attributes. For example, the
`id` and `tabs` attributes can be specified as in the following:

    ~~~
    Dogs run
    nsubj(run, Dogs)
    ~~~
    {:#simple-example-parse-2 .sdparse tabs="yes"}

which gives

~~~
Dogs run
nsubj(run, Dogs)
~~~
{:#simple-example-parse-2 .sdparse tabs="yes"}

For full details on this feature, see
<http://kramdown.gettalong.org/syntax.html#attribute-list-definitions>.

### Other features

#### Editing controls

Controls for visualization editing and information is accessible in
elements with the attribute `tabs="yes"` (or any other non-empty
value):

    <div class="ann-annotation" tabs="yes">
    Barack Obama is the current president.
    T1 PERSON 0 12 Barack Obama
    </div>

This gives:

<div class="ann-annotation" tabs="yes">
Barack Obama is the current president.
T1 PERSON 0 12 Barack Obama
</div>

You can click on the tab on the top right to edit the visualization,
but note that the edits are not saved anywhere as there's no
server. This is mostly useful to build and debug examples.

#### Unicode

Everything is unicode-compliant.

    ~~~ sdparse
    ロボットは 東大に  入れる か 。/。
    nsubj(入れる, ロボットは)
    nommod(入れる, 東大に)
    ~~~

~~~ sdparse
ロボットは 東大に  入れる か 。/。
nsubj(入れる, ロボットは)
nommod(入れる, 東大に)
~~~

## Collections

[Jekyll collections](http://jekyllrb.com/docs/collections/) are a
recently introduced Jekyll feature that allows sets of related
documents to be grouped together. Collections support various
operations that specifically benefit guideline development, such as
automatic listings and generation of "merged" documents.

As an illustrative example, this Annodoc repository contains two
collections named `entity` and `relation` with a few example
documents. Using the [Liquid] language, this allows e.g. a listing
of documents in a specific collection to be created as follows:

{% raw %}
    {% for e in site.entity %}
    * {{ e.title }}
    {% endfor %}
{% endraw %}

which produces the following:

{% for e in site.entity %}
* {{ e.title }}
{% endfor %}

Alternatively, we can produce "merged" documents by importing the
contents of documents in collections. The following example shows
the contents of documents in the `entity` collection up to the
first `<!-- details -->` marker (if any):

{% raw %}
    {% for e in site.entity %}
    * {{ e.content | split:"<!-- details -->" | first }}
    {% endfor %}
{% endraw %}

which gives

{% for e in site.entity %}
* {{ e.content | split:"<!-- details -->" | first }}
{% endfor %}

We can similarly generate a listing of all collections, linking all
documents in those collections:

{% raw %}
    {% for i in site.collections %}{% if i[1] %}{% assign c = i[1] %}{% else %}{% assign c = i %}{% endif %}
    * <b>Collection</b>: {{ c.label }}
      {% for d in c.docs %}
      * [{{ d.title }}]({{ d.url | remove_first:'/' }}): {{ d.shortdef }}
      {% endfor %}
    {% endfor %}
{% endraw %}

which gives

{% for i in site.collections %}{% if i[1] %}{% assign c = i[1] %}{% else %}{% assign c = i %}{% endif %}
* <b>Collection</b>: {{ c.label }}
  {% for d in c.docs %}
  * [{{ d.title }}]({{ d.url | remove_first:'/' }}): {{ d.shortdef }}
  {% endfor %}
{% endfor %}

To add documents to a collection, simply add them to the corresponding
directory (e.g. `_type/` for the collection `type`). To add new
collections to the system, first create the directory, and then add
the corresponding entry to `collections` in `_config.yml` (see
[Configuration](#configuration) below).

It is recommended to organize (non-overlapping) sets of related
documents into collections. To get the most out of your Jekyll
collections, please refer also to the Liquid language documentation at
<http://wiki.shopify.com/Liquid>.

### Linking to collection entries

It is often necessary to cross-reference parts of documentation from
others. To make creating such links easier, Annodoc provides support
for linking to collection entries.

The syntax for creating such links is simple: just wrap the name of
any collection entry as in `[NAME]()`. For example, to create a link
to the documentation for the PERSON type, use

    [PERSON]()

which gives the following link

[PERSON]()

Alternatively, you can use empty HTML anchor tags (`<a>`, `</a>`),
as in

    <a>PERSON</a>

(These two alternative forms result in identical links.)

For cases where the same label (name) occurs in several collections,
it is possible to disambiguate the target by including the collection
name in the format `COLLECTION/ENTRY`, for example

    [entity/PERSON]()

(or, equivalently, `<a>entity/PERSON</a>`) which produces

[entity/PERSON]()

(Note that the text of the generated link only includes the entry
label.)

Either of these forms can be used in running text, for example

    [FAMILY]() relation arguments have type [PERSON]().

gives

[FAMILY]() relation arguments have type [PERSON]().

Cases where linking failed are visually marked to identify the
issue:

    [no-such-type]()

is shown as

[no-such-type]()

For all of the forms listed above, the text of the link matches the
linked type. To get a different text, use the syntax
`[text](TYPE)`. For example,

    [people](PERSON)

and 

    [people](entity/PERSON)

both generate the same link: [people](PERSON) and [people](entity/PERSON)

This form can also be written in HTML as

    <a href="PERSON">people</a>

Which again gives an identical link: <a href="PERSON">people</a>

Note that this automatic processing only applies to `<a>` elements
that have no `href`, `id`, or `name` attributes or whose `href`
attribute matches a simple pattern (e.g. lacking `http://` and
`.html`). This means that standard HTML anchors and links can be used
normally in Annodoc documents without triggering this feature.

## Configuration

Different aspects of the way a set of documentation is presented are
controlled by various configuration files and settings. The following
are the most important.

* `_config.yml`

The Jekyll top-level configuration file `_config.yml` controls many
aspects of the conversion of the source documents into the final site
as well as how Jekyll serves the site. This file also configures the
[collections](#collections) that are defined for the documentation.
Full documentation for `_config.yml` is available from
<http://jekyllrb.com/docs/configuration/>.

* `_includes/header.html`, `_includes/footer.html`

These HTML files are automatically attached to every page on the site.
Edit the HTML content of these two files to customize the look of the
documentation, add navigation, etc. These files are standard HTML.

* `css/main.css`, `css/style-vis.css`

The [CSS] files found in the `css` subdirectory control the style
(look) of the main documentation (`main.css`) and the visualizations
(`style-vis.css`). It is not necessary to modify these in basic
usage. If changes to the style of the documentation pages or the
visualization are needed, please refer to e.g.
<http://www.w3.org/Style/CSS/Overview.en.html> for more information.

* `lib/local/config.js`

This JavaScript file holds the configuration for the [brat]
visualization component. The configuration specifies, for example, the
colors, labels, label abbreviations, and line styles to use for
visualizing various categories of annotation. For documentation on the
contents and syntax of this file, refer to
<http://brat.nlplab.org/configuration.html>.



