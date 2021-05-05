// var DATA = {"a" : "b", "c" : "d"};

var Instructions_Dic = new Array();
var Connections_Dic = new Array();

//定义一个字典 存储边对应的 提示操作语句
// path_instruction_dic0 中的0 代表是 placeid=0的提示语
// path_instruction_dic0 中的1 代表是 placeid=1的提示语
//var path_instruction_dic0 = new Array(); 
//path_instruction_dic0['A_B'] = 'Go straight along the aisle and turn left at the corner.'
//path_instruction_dic0['B_C'] = 'Go straight along the aisle until you reach the glass aisle.'
//path_instruction_dic0['C_D'] = 'Take the stairs down to the next floor.'
//path_instruction_dic0['C_B'] = 'Go straight along the aisle and turn right when you reach the corner.'
//path_instruction_dic0['B_A'] = 'Keep walking until you see the rest table.'
//path_instruction_dic0['D_C'] = 'Take the stairs upstairs to the upper floor.'

var path_instruction_dic0 = new Array(); 
path_instruction_dic0['Entrance_D424'] = 'Go downstairs and go straight. It is the first room on the right'
path_instruction_dic0['D424_Entrance'] = 'Go straight ahead and go upstairs'
path_instruction_dic0['Entrance_D401(D403 D404)'] = 'Go straight and turn left.'
path_instruction_dic0['D401(D403 D404)_Entrance'] = 'Go straight and turn right.'
path_instruction_dic0['D424_D401(D403 D404)'] = 'Go straight.'
path_instruction_dic0['D401(D403 D404)_D424'] = 'Go straight.'
path_instruction_dic0['D424_D437(D405 D406 D414)'] = 'Go through the door'
path_instruction_dic0['D437(D405 D406 D414)_D424'] = 'Go through the door. D424 is on your left'
path_instruction_dic0['D437(D405 D406 D414)_D416(D417 D434A D444)'] = 'Go straight from room D414.'
path_instruction_dic0['D416(D417 D434A D444)_D437(D405 D406 D414)'] = 'Go Straight.'
path_instruction_dic0['D416(D417 D434 D444)_StaffToilet(D433 D419 D431)'] = 'Turn left from D444 and go straight.'
path_instruction_dic0['StaffToilet(D433 D419 D431)_D416(D417 D434A D444)'] = 'Go straight and you will see D444 in the corner and turn right you will see other rooms.'
path_instruction_dic0['StaffToilet(D433 D419 D431)_D426(D420 D421 D413 D422 D428)'] = 'Go straight from Staff Toilet and you will see a door. Go through the door, you will see the room D428 on your right anf other romms on your left.'
path_instruction_dic0['D426(D420 D421 D413 D422 D428)_StaffToilet(D433 D419 D431)'] = 'There is a door near the room D428. You need to go through the door.'
path_instruction_dic0['D426(D420 D421 D413 D422 D428)_D410(D412)'] = 'Go through the door.'
path_instruction_dic0['D410(D412)_D426(D420 D421 D413 D422 D428)'] = 'Go through the door.'
path_instruction_dic0['D407(D410A D411)_D410(D412)'] = 'Go straight.'
path_instruction_dic0['D410(D412)_D407(D410A D411)'] = 'Go straight.'



var path_instruction_dic1 = new Array(); 
path_instruction_dic1['Entrance1_StudentServices'] = 'Entrance1_Student Services.'
path_instruction_dic1['Entrance1_ChangingRoom1'] = 'Entrance1_Changing Room1.'
path_instruction_dic1['Entrance1_FirstFloor1'] = 'Entrance1_First Floor1.'
path_instruction_dic1['StudentServices_Entrance1'] = 'Student Services_Entrance1.'
path_instruction_dic1['StudentServices_MedicalSuites'] = 'Student Services_Medical Suites.'
path_instruction_dic1['StudentServices_ChangingRoom1'] = 'Student Services_Changing Room1.'
path_instruction_dic1['ChangingRoom1_StudentServices'] = 'Changing Room1_Student Services.'
path_instruction_dic1['ChangingRoom1_FemaleWC'] = 'Changing Room1_Female WC.'
path_instruction_dic1['ChangingRoom1_StudentsUnion'] = 'Changing Room1_Students Union(F106).'
path_instruction_dic1['ChangingRoom2_FemaleWC'] = 'Changing Room2_Female WC.'
path_instruction_dic1['ChangingRoom2_SportHall'] = 'Changing Room2_Sport Hall(F150).'
path_instruction_dic1['FemaleWC_ChangingRoom1'] = 'Female WC_Changing Room1'
path_instruction_dic1['FemaleWC_ChangingRoom2'] = 'Female WC_Changing Room2.'
path_instruction_dic1['FemaleWC_StudentsUnion'] = 'Female WC_Students Union(F106).'
path_instruction_dic1['StudentsUnion_ChangingRoom1'] = 'Students Union(F106)_Changing Room1.'
path_instruction_dic1['StudentsUnion_MaleWC'] = 'Students Union(F106)_Male WC.'
path_instruction_dic1['StudentsUnion_FemaleWC'] = 'Students Union(F106)_Female Wc.'
path_instruction_dic1['StudentsUnion_CarreersOffice'] = 'Students Union(F106)_Carreers Office.'
path_instruction_dic1['MaleWC_StudentsUnion'] = 'Male WC_Students Union(F106).'
path_instruction_dic1['MaleWC_ChangingRoom3'] = 'Male WC_Changing Room3.'
path_instruction_dic1['ChangingRoom3_MaleWC'] = 'Changing Room3_Male WC.'
path_instruction_dic1['ChangingRoom3_SportsHall'] = 'Changing Room3_Sports Hall(F150).'
path_instruction_dic1['SportsHall_ChangingRoom2'] = 'Sports Hall(F150)_Changing Room2.'
path_instruction_dic1['SportsHall_ChangingRoom3'] = 'Sports Hall(F150)_Changing Room3.'
path_instruction_dic1['SportsHall_SportsOffice'] = 'Sports Hall(F150)_Sports Office.'
path_instruction_dic1['SportsOffice_SportsHall'] = 'Sports Office_Sports Hall(F150).'
path_instruction_dic1['SportsOffice_Entrance2SportsOffice_Entrance2'] = 'Sports Office_Entrance2.'
path_instruction_dic1['Entrance2_SportsOffice'] = 'Entrance2_Sports Office.'
path_instruction_dic1['Entrance2_CareersOffice'] = 'Entrance2_Careers Office.'
path_instruction_dic1['Entrance2_Chaplin'] = 'Entrance2_Chaplin.'
path_instruction_dic1['Entrance2_FirstFloor2'] = 'Entrance2_First Floor2.'
path_instruction_dic1['Chaplin_Entrance2'] = 'Chaplin_Entrance2.'
path_instruction_dic1['Chaplin_CareersOffice'] = 'Chaplin_Careers Office.'
path_instruction_dic1['CareersOffice_StudentsUnion'] = 'Careers Office_Students Union(F106).'
path_instruction_dic1['CareersOffice_Chaplin'] = 'Careers Office_Chaplin.'
path_instruction_dic1['CareersOffice_Entrance2'] = 'Careers Office_Entrance2.'
path_instruction_dic1['MedicalSuites_StudentServices'] = 'Medical Suites_Student Services.'
path_instruction_dic1['FirstFloor1_Entrance1'] = 'First Floor1_Entrance1.'
path_instruction_dic1['FirstFloor2_Entrance2'] = 'First Floor2_Entrance2.'

//var path_instruction_dic1 = new Array(); 
//path_instruction_dic1['A_B'] = 'Go straight along the aisle and turn left at the corner.'
//path_instruction_dic1['B_C'] = 'Go straight along the aisle until you reach the glass aisle.'
//path_instruction_dic1['C_D'] = 'Take the stairs down to the next floor.'
//path_instruction_dic1['C_B'] = 'Go straight along the aisle and turn right when you reach the corner.'
//path_instruction_dic1['B_A'] = 'Keep walking until you see the rest table.'
//path_instruction_dic1['D_C'] = 'Take the stairs upstairs to the upper floor.'




var path_instruction_dic2 = new Array(); 
path_instruction_dic2['A_B'] = 'Entrance1_ChangingRoom1.'
path_instruction_dic2['B_A'] = 'StudentService_MedicalSuits'
path_instruction_dic2['A_D'] = 'ChangingRoom1_Entrance1'
path_instruction_dic2['D_A'] = 'MedicalSuits_StudentService.'
path_instruction_dic2['C_B'] = 'Entrance1_ChangingRoom1.'
path_instruction_dic2['B_C'] = 'StudentService_MedicalSuits'
path_instruction_dic2['C_D'] = 'ChangingRoom1_Entrance1'
path_instruction_dic2['D_C'] = 'MedicalSuits_StudentService.'



var connection2 = [
            ['A', [['B', 20], ['D', 150]] ], 
            ['B', [['A', 20], ['C', 40]] ], 
            ['C', [['B', 40], ['D', 20]] ], 
            ['D', [['A', 150],['C', 20]] ]
        ];

var connection0 = [
  ['Entrance', [['D424', 5],['D401(D403 D404)', 10]] ], 
  ['D424', [['Entrance', 5],['D401(D403 D404)', 8],['D437(D405 D406 D414)', 5]] ], 
  ['D401(D403 D404)', [['Entrance', 10],['D424', 8]] ], 
  ['D437(D405 D406 D414)', [['D424', 5],['D416(D417 D434A D444)', 10]]],
  ['D416(D417 D434A D444)', [['D437(D405 D406 D414)', 10], ['StaffToilet(D433 D419 D431)', 10]] ], 
  ['StaffToilet(D433 D419 D431)', [['D416(D417 D434A D444)', 10], ['D426(D420 D421 D413 D422 D428)', 10]] ], 
  ['D426(D420 D421 D413 D422 D428)', [['StaffToilet(D433 D419 D431)', 10], ['D410(D412)', 10]] ], 
  ['D410(D412)', [['D426(D420 D421 D413 D422 D428)', 10]] ]
  
];
        
var connection1 = [
            ['Entrance1', [['StudentServices', 5], ['ChangingRoom1', 20], ['FirstFloor1',30]] ], 
            ['StudentServices', [['Entrance1', 5], ['MedicalSuites', 20], ['ChangingRoom1', 15]] ], 
            ['ChangingRoom1', [['StudentServices', 15], ['FemaleWC', 20], ['StudentsUnion', 15]] ], 
            ['ChangingRoom2', [['FemaleWC', 5], ['SportHall', 8]] ],
            ['FemaleWC', [['ChangingRoom1', 20], ['ChangingRoom2', 5], ['StudentsUnion', 10]] ],
            ['StudentsUnion', [['ChangingRoom1', 15], ['MaleWC', 10], ['FemaleWC', 10], ['CarreersOffice', 15]] ],
            ['MaleWC', [['StudentsUnion', 10], ['ChangingRoom3', 5]] ],
            ['ChangingRoom3', [['MaleWC', 5], ['SportsHall', 5]] ],
            ['SportsHall', [['ChangingRoom2', 8], ['ChangingRoom3', 5], ['SportsOffice', 10]] ],
            ['SportsOffice', [['SportsHall(F150)', 10], ['Entrance2', 15]] ],
            ['Entrance2', [['SportsOffice', 15], ['CareersOffice', 10], ['Chaplin', 20], ['FirstFloor2', 30]] ],
            ['Chaplin', [['Entrance2', 20], ['CareersOffice', 20]] ],
            ['CareersOffice', [['StudentsUnion', 15], ['Chaplin', 20], ['Entrance2', 10]] ],
            ['MedicalSuites', [['StudentServices', 20]] ],
            ['FirstFloor1', [['Entrance1', 30]] ],
            ['FirstFloor2', [['Entrance2', 30]] ],
        ];


//var connection2 = [
  //        ['Entrance1', [['ChangingRoom1', 20]] ], 
   //       ['StudentServices', [['MedicalSuites', 20]] ], 
     //     ['ChangingRoom1', [['Entrance1', 10]] ], 
       //   ['MedicalSuites', [['StudentServices', 10]]]
       //];
Instructions_Dic[0] = path_instruction_dic0;
Instructions_Dic[1] = path_instruction_dic1;

Instructions_Dic[2] = path_instruction_dic2;

Connections_Dic[0] = connection0;

Connections_Dic[1] = connection1;

Connections_Dic[2] = connection2;