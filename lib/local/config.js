// -*- Mode: JavaScript; tab-width: 4; indent-tabs-mode: nil; -*-
// vim:set ft=javascript ts=4 sw=4 sts=4 cindent:

var Config = (function(window, undefined) {

    var bratCollData = {
	'entity_types': [
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
            'type': 'ADJ',
            'labels': [ 'A' ],
	    'bgColor': '#ffcc00'
        },
        {
            'type': 'ADP',
            'labels': [ 'c' ],
            'bgColor': '#999999'
        },
        {
            'type': 'ADV',
            'labels': [ 'AV' ],
            'bgColor': '#00cc99'
        },
        {
            'type': 'AUX',
            'labels': [ 'x' ],
            'bgColor': '#0099ff'
        },
        {
            'type': 'DET',
            'labels': [ 'd' ],
            'bgColor': '#ffcc00'
        },
        {
            'type': 'INTJ',
            'labels': [ 'i' ],
            'bgColor': '#999999'
        },
        {
            'type': 'NOUN',
            'labels': [ 'N' ],
            'bgColor': '#cc9900'
        },
        {
            'type': 'NUM',
            'labels': [ 'n' ],
            'bgColor': '#ffcc00'
        },
        {
            'type': 'PART',
            'labels': [ 'p' ],
            'bgColor': '#999999'
        },
        {
            'type': 'PRON',
            'labels': [ 'pr' ],
            'bgColor': '#cc9900'
        },
        {
            'type': 'PROPN',
            'labels': [ 'PN' ],
            'bgColor': '#cc9900'
        },
        {
            'type': 'PUNCT',
            'labels': [ '.' ]
        },
        {
            'type': 'SCONJ',
            'labels': [ 's' ],
            'bgColor': '#999999'
        },
        {
            'type': 'VERB',
            'labels': [ 'V' ],
            'bgColor': '#0099ff'
        },  
        {   
            'type': 'X',
            'labels': [ '?' ],
            'bgColor': '#999999'
        }
	],
  'event_attribute_types': [],
  'entity_attribute_types': [
        {
            'type':   'AdvType',
            'values': { 
                'Name' : { 'position' : 'right' },
             },
	},
	{
	    'type': 'Case',
	    'values': {
		'Number' : { 'position' : 'right' }
	    }
	},
        {
            'type': 'Mood',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        },
        {
            'type': 'NounType',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        },
        {
            'type': 'Number',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        },
        {
            'type': 'NumForm',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        },
        {
            'type': 'NumType',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        },
        {
            'type': 'Polarity',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        },
        {
            'type': 'PronType',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        },
        {
            'type': 'Reflex',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        },
        {
            'type': 'Tense',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        },
        {
            'type': 'VerbForm',
            'values': {
                'Number' : { 'position' : 'right', 'glyph': 'n' }
            }
        },
        {
            'type': 'VerbType',
            'values': {
                'Number' : { 'position' : 'right' }
            }
        }
	],
	'relation_types': [
         {
             'type': 'advmod',
             'labels': [ 'advmod' ],
             'dashArray': '-',
             'color': '#00804D',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'ADV', 'VERB' ]
                 }
             ]
         },
         {
             'type': 'arg1',
             'labels': [ 'arg1' ],
             'dashArray': '-',
             'color': '#001A80',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'ADJ', 'DET', 'NOUN', 'NUM', 'PRON', 'PROPN', 'VERB' ]
                 }
             ]
         },
         {   
             'type': 'arg1-lvc',
             'labels': [ 'arg1:lvc' ],
             'dashArray': '-',
             'color': '#001A80',
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
                     'targets': [ 'ADJ', 'DET', 'NOUN', 'NUM', 'PRON', 'PROPN', 'VERB' ]
                 }
             ]
         },
         {
             'type': 'arg2-hon',
             'labels': [ 'arg2:hon' ],
             'dashArray': '-',
             'color': '#003399',
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
             'type': 'arg2-lvc',
             'labels': [ 'arg2:lvc' ],
             'dashArray': '-',
             'color': '#003399',
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
             'type': 'arg3',
             'labels': [ 'arg3' ],
             'dashArray': '-',
             'color': '#004DB3',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'ADJ', 'DET', 'NOUN', 'NUM', 'PRON', 'PROPN', 'VERB' ]
                 }
             ]
         },
         {
             'type': 'argcl',
             'labels': [ 'argcl' ],
             'dashArray': '-',
             'color': '#004DB3',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'ADJ', 'DET', 'NOUN', 'NUM', 'PRON', 'PROPN', 'VERB' ]
                 }
             ]
         },
         {
             'type': 'advcl',
             'labels': [ 'advcl' ],
             'dashArray': '-',
             'color': '#00804D',
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
             'color': '#000000',
             'args': [
                 {
                     'role': 'Arg1',
                     'targets': [ 'AUX|VERB' ]
                 },
                 {
                     'role': 'Arg2',
                     'targets': [ 'AUX|VERB' ]
                 }
             ]
         },
         {
             'type': 'cop',
             'labels': [ 'cop' ],
             'dashArray': '3-3',
             'color': '#000000',
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
         },
         {
             'type': 'obl-arg',
             'labels': [ 'obl:arg' ],
             'dashArray': '-',
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
