// var DATA = {"a" : "b", "c" : "d"};

var Instructions_Dic = new Array();
var Connections_Dic = new Array();

//Define a dictionary to store the corresponding prompt of the edge
// the "0" of path_instruction_dic0 refers to the prompt when placeid=0
// the "1" of path_instruction_dic0 refers to the prompt when placeid=1
var path_instruction_dic0 = new Array(); 
path_instruction_dic0['A_B'] = 'Go straight along the aisle and turn left at the corner.'
path_instruction_dic0['B_C'] = 'Go straight along the aisle until you reach the glass aisle.'
path_instruction_dic0['C_D'] = 'Take the stairs down to the next floor.'
path_instruction_dic0['C_B'] = 'Go straight along the aisle and turn right when you reach the corner.'
path_instruction_dic0['B_A'] = 'Keep walking until you see the rest table.'
path_instruction_dic0['D_C'] = 'Take the stairs upstairs to the upper floor.'


var path_instruction_dic1 = new Array(); 
path_instruction_dic1['A_B'] = 'Go straight along the aisle and turn left at the corner.'
path_instruction_dic1['B_C'] = 'Go straight along the aisle until you reach the glass aisle.'
path_instruction_dic1['C_D'] = 'Take the stairs down to the next floor.'
path_instruction_dic1['C_B'] = 'Go straight along the aisle and turn right when you reach the corner.'
path_instruction_dic1['B_A'] = 'Keep walking until you see the rest table.'
path_instruction_dic1['D_C'] = 'Take the stairs upstairs to the upper floor.'



var connection0 = [
            ['A', [['B', 20], ['D', 150]] ], 
            ['B', [['A', 20], ['C', 40]] ], 
            ['C', [['B', 40], ['D', 20]] ], 
            ['D', [['A', 150],['C', 20]] ]
        ];


var connection1 = [
            ['A', [['B', 20]] ], 
            ['B', [['A', 20]] ], 
            ['C', [['D', 10] ] ], 
            ['D', [['C', 10] ]]
        ];

Instructions_Dic[0] = path_instruction_dic0;
Instructions_Dic[1] = path_instruction_dic1;

Connections_Dic[0] = connection0;
Connections_Dic[1] = connection1;