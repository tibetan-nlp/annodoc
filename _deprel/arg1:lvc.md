---
layout: entry
title: arg1:lvc
shortdef: the first argument or "subject" of a verb, with which it forms a complex predicate
---
In most cases that we are aware of, the `NOUN` in a light verb construction is in the `arg2` or "object" position. However, an `arg1` can also be a light noun, as in the following example with ཡོད་. This is likely because the oblique possessor can be considered an argument (`obl:arg`).

~~~ ann
ཞལ་ཆེམས་ཀྱི་ཡི་གེ་རྒྱས་ཡོད་པ་
T110  NOUN 0 8  ཞལ་ཆེམས་
A110a Number T110 Sing
T111  ADP 8 12  ཀྱི་
A111a Case T111 Gen
T112  NOUN 12 18  ཡི་གེ་
A112a Number T112 Sing
T113  NOUN 18 24  རྒྱུས་
A113a Number T113 Sing
T114  VERB 24 30  ཡོད་པ་
A114a VerbForm T114 Vnoun
R35 arg1:lvc Arg1:T114 Arg2:T113
R70 arg2 Arg1:T114 Arg2:T112
~~~
> _[They] had knowledge of the written testament._ (CT - Mila 11a)

Here, `arg1:lvc` is རྒྱུས་ "knowledge" and `arg2` is ཡི་གེ་ "letter".
