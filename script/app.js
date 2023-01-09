/* Guardamos la informacion de los objetos */
nombreUsuario = document.getElementById('usuario');
correoUsuario = document.getElementById('email');
contraseñaUsuario = document.getElementById('contraseña');


btnInicioSesion = document.getElementById('btn-Registro');
cardInicio = document.getElementById('Loggin');

btnRegistrate = document.getElementById('btn-Inicio');
cardRegistrate = document.getElementById('Register');


ingresoUsuario = document.getElementById('IngresoUsuario');
ingresoContraseña = document.getElementById('IngresoContraseña');
cerrarSesion = document.getElementById('cerrarSesion');

cajaUser = document.getElementById('user');
nombreUser = document.getElementById('user-nombre');
correoUser = document.getElementById('user-correo');
contraseñaUser = document.getElementById('user-contraseña');

labelNombre = document.getElementById('label-user');
labelPass = document.getElementById('label-pass');

let GuardarlocalUsuarios = [];
let localUsuarios = [];
let guardarArray;
var cuenta;
let verificacion ;
let i = 0;


function Registrate(){
        btnInicioSesion.style.display="none";
        cardInicio.style.display="none";

        btnRegistrate.style.display="block";
        cardRegistrate.style.display="block";   
}
function InicioSesion(){
        btnRegistrate.style.display="none";
        cardRegistrate.style.display="none";    

        btnInicioSesion.style.display="block";
        cardInicio.style.display="block";
}
/* Cuando precinamos el boton Registrar, guardamos la info 
de los inputs dentro del LocalStorage y limpiamos los campos para 
volver a registrar otros usuarios*/
function guardar(){


        /* Gurdamos los 3 datos dentro de un array */
        GuardarlocalUsuarios.push(nombreUsuario.value);
        GuardarlocalUsuarios.push(correoUsuario.value);
        GuardarlocalUsuarios.push(contraseñaUsuario.value); 

        /* Transformamos el array en un string */
        /* Lo guardamos en una variable como string*/
        guardarArray = GuardarlocalUsuarios.toString();

        /* Borramos los datos del primer array para que luego
        guarde la nueva informacion sin repetirla. */
        GuardarlocalUsuarios.splice(0);

        /* Por ultimo guardamos el string que guardamos anteriormente
        dentro del array  usuarios */
        localUsuarios.push(guardarArray);
        /* Seguidamente lo almacenamos en el localStorage */
        localStorage.setItem('cuentas', JSON.stringify(localUsuarios));
        cuenta = localStorage.getItem('cuentas');
        /* Tansformamos la informacion guardada en el LocalStorage como array 
        ya que para este caso hay que hacer una conversion */
        cuenta = JSON.parse(cuenta);
        /* Una ves que guardamos el primer dato dentro de nuestra base de datos, se muestra el boton iniciar sesion */
        btnRegistrate.style.display ="block";

        nombreUsuario.value = '';
        contraseñaUsuario.value = '';
        correoUsuario.value = '';
}       

function iniciar(){

         /* Paso 1: Buscamos desde la primer cuenta registrada si existen los datos correspondientes */
         for(i = 0; i < cuenta.length; i++){
                verificacion = cuenta[i].split(',');
                /* Separamos el array guardado en el LocalStorage por ' , ' */
                /* Teniendo en cuenta que el primer valor que se almaceno es el usuario y el tercero es la contraseña */
                /* Con un condicional , corroboramos que los datos sean validos. */
                if(verificacion[0] == ingresoUsuario.value && verificacion[2] == ingresoContraseña.value){
                        /* Si los datos son validos, para que el bucle no siga consultado, simplemente hacemos el indice
                        valga el total de las cuentas cargadas. */
                        i = cuenta.length;  
                        btnRegistrate.style.display="none";
                        cardRegistrate.style.display="none";    
                        btnInicioSesion.style.display="none";
                        cardInicio.style.display="none";

                        cajaUser.style.display ="block";
                        cerrarSesion.style.display = "block";

                        /* Por ultimo, una ves que el usuario esta logeado, el programa simplemente lo saluda. */
                        nombreUser.textContent = "Bienvenido " + verificacion[0] + "😀";

                }
                else{
                        /* Si son incorrectos los datos del cliente, este pinta los campos de color rojo marcando un error */
                        ingresoUsuario.style.backgroundColor = "red"; 
                        ingresoContraseña.style.backgroundColor = "red";
                }

        }
        i = 0;
}
/* Cuando precionamos el boton cerrar Sesion, nos vuelve a la ventana de Registro */
function cerrar(){
        
        btnRegistrate.style.display="block";
        cardRegistrate.style.display="block"; 
        cajaUser.style.display ="none";

        
        ingresoUsuario.value = '';
        ingresoContraseña.value = '';

}
