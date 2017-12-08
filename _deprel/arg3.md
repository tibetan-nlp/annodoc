---
layout: entry
title: arg3 
shortdef: the third argument or "indirect object" of a verb, which cannot be oblique
---
When a verb has two unmarked arguments in addition to having an `arg1` argument,
then we classify it as a three-place predicate with no obliques. For example:

~~~ ann
ངེད་མ་སྨད་ཨ་ཁུ་དང་ཨ་ནེས་གཤའ་མ་རང་མ་བཅོལ་
T924    PRON 0 4        ངེད་
A924a   PronType T924 Prs
T925    NOUN 4 10       མ་སྨད་
A925a   Number T925 Sing
T926    NOUN 10 15      ཨ་ཁུ་
A926a   Number T926 Sing
T927    ADP 15 18       དང་
A927a   Case T927 Com
T928    NOUN 18 22      ཨ་ནེ
A928a   Number T928 Sing
T929    ADP 22 24       ས་
A929a   Case T929 Agn
T930    NOUN 24 30      གཤའ་མ་
A930a   Number T930 Sing
T931    PRON 30 33      རང་
A931a   Reflex T931 Yes
T932    PART 33 35      མ་
A932a   Polarity T932 Neg
T933    VERB 35 40      བཅོལ་
A933a   Tense T933 Past
R53     arg1 Arg1:T933 Arg2:T928
R54     arg2 Arg1:T933 Arg2:T930
R55     arg3 Arg1:T933 Arg2:T925
~~~
> Uncle and aunt did not return to us (mother and children), what was rightfully ours. ([Mila 12a](http://tibetanverbs.soas.ac.uk/~badw/#/mila/012a?focus=T933))

