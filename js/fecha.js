 ///Fecha//////
 let elementFecha = document.querySelector('.fecha');

 let year, month, day, dayNum, calendario, fechaDehoy;

 let  arrayMonth = ["enero","febrero","marzo","abril","mayo","junio",
 "julio","agosto","septiembre","octubre","noviembre","diciembre"];

 let arrayDays = ['domingo','lunes','martes','miercoles','jueves', 'viernes', 'sabado'];


 function fechaActual(){
     fechaDehoy = new Date();

     day = fechaDehoy.getDay();
     dayNum = fechaDehoy.getDate(); //Forma de obtener el dia del mes
     month = fechaDehoy.getMonth();
     year = fechaDehoy.getFullYear();

     calendario = `Hoy es ${arrayDays[day]} ${dayNum} de ${arrayMonth[month]} del ${year}`;

     elementFecha.innerHTML = calendario;
} setInterval( fechaActual,1000);

