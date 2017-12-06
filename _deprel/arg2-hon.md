---
layout: entry
title: arg2-hon 
---

Complex honorific verbs in Tibetan are formed by prepending an honorific `NOUN`
to a `VERB`. Given our present understanding of Tibetan grammar,
these constructions cannot be formally distinguished from
other `arg2` constructions. However, it is important to for them to be
catalogued so that they can be entered into the verb lexicon.

In the following example, we code the honorific noun སྐུ་ as a subtyped
`arg2:hon` of the verb གཤེགས་. This distinguishes such cases from other
`arg2` or light verb constructions.

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




