console.log("Inicio del Programa");

alert("Bienvenidos a la nomina de Estudiantes.!!!");



var nombres=[
{nombres:"Andrea Stefania", edad: 26, genero:"femenino", arregloNotas:[9,9,9], cuidad:"Playas", lenguajeFavorito:"html",estaTrabajando:true},
{nombres:"Glenda Bohorquez",edad: 30, genero:"femenino", arregloNotas:[8,9,8], cuidad:"San Antonio", lenguajeFavorito:"java",estaTrabajando:false},
{nombres:"Angel Morales",edad: 29, genero:"masculino", arregloNotas:[9,9,9], cuidad:"Playas", lenguajeFavorito:"JS",estaTrabajando:true},
{nombres:"Eleana Borbor",edad: 28, genero:"femenino", arregloNotas:[9,9,9], cuidad:"Playas", lenguajeFavorito:"html",estaTrabajando:true},
{nombres:"Richard de la A",edad: 28, genero:"masculino", arregloNotas:[9,9,9], cuidad:"Playas", lenguajeFavorito:"html",estaTrabajando:true},
];



function printHTML(mensaje, tag);
var outputDiv = document.getElementById(tag);
outputDiv.innerHTML = mensaje;

function buscarPersona(list, nombre);{
var existe = '-1';
for(var i=0; i<list.length; i++);
if(list[i].nombre.toLowerCase() == nombre);
existe = i;
}
return existe;

while (true)
{
var nombreEstudiante = prompt("Ingrese el Nombre de un Estudiante, S para salir o L para listar y salir");
if(nombreEstudiante != '' && nombreEstudiante !=null)
if(nombreEstudiante.toLowerCase() =='s')
alert("Programa terminado");
printHTML('', "info-estudiantes");
break;
}
else if(nombreEstudiante.toLowerCase() =='l')
printList(persona, -1); 
break;
else
	{	
var posicion = buscarPersona(persona, nombreEstudiante.toLowerCase());
if(posicion >=0)
printList(persona, posicion); 
else
{
alert('La persona/estudiante no existe');
}
}