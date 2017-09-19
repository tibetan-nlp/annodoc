// -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*-
// vim:set ft=javascript ts=4 sw=4 sts=4 cindent:

var Config = (function(window, undefined) {

    var bratCollData = {
	'entity_types': [
// this is optional
        {
            'type': 'SPAN_DEFAULT',
            'bgColor': '#7fa2ff',
            'borderColor': 'darken'
        },
        {
            'type': 'ARC_DEFAULT',
            'color': 'black',
            'arrowHead': 'triangle,5',
            'labelArrow': 'triangle,3,5',
        },
        {
            'type': 'token',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        },
        {
            'type': '-',
            'labels': [ '\u00A0\u00A0' ], // non-breaking space for empty
        }
	],
  'event_attribute_types': [],
  'entity_attribute_types': [
        {
            'type':   'Name',
            'values': { 
                'Name' : { 'glyph': '(N)' },
             },
         },
         ],
	'relation_types': [
         {
             'type': 'arg1',
             'labels': [ 'arg1' ],
             'dashArray': '-',
             'color': '#003399',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'ADJ', 'DET', 'NOUN', 'NUM', 'PRON', 'PROPN' ]
                 }
             ]
         },
         {
             'type': 'arg2',
             'labels': [ 'arg2' ],
             'dashArray': '-',
             'color': '#003399',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'ADJ', 'DET', 'NOUN', 'NUM', 'PRON', 'PROPN' ]
                 }
             ]
         },
         {
             'type': 'argcl',
             'labels': [ 'argcl' ],
             'dashArray': '-',
             'color': '#003399',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'VERB' ]
                 }
             ]
         },
         {
             'type': 'advcl',
             'labels': [ 'advcl' ],
             'dashArray': '3-3',
             'color': '#006633',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'VERB' ]
                 }
             ]
         },
         {
             'type': 'aux',
             'labels': [ 'aux' ],
             'dashArray': '3-3',
             'color': '#999999',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'VERB' ]
                 }
             ]
         },
         {
             'type': 'compound',
             'labels': [ 'compound' ],
             'dashArray': '-',
             'color': '#999999',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'NOUN' ]
                 }
             ]
         },
         {
             'type': 'cop',
             'labels': [ 'cop' ],
             'dashArray': '3,3',
             'color': '#999999',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'ADJ', 'DET', 'NOUN', 'NUM', 'PRON', 'PROPN' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'AUX' ]
                 }
             ]
         },
         {
             'type': 'obl',
             'labels': [ 'obl' ],
             'dashArray': '3-3',
             'color': '#006633',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'ADJ', 'DET', 'NOUN', 'NUM', 'PRON', 'PROPN' ]
                 }
             ]
         }
        ],
	'event_types': [],
    };

    return {
        bratCollData: bratCollData,
    };
})(window);
