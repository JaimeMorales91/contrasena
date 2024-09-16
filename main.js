let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');

const cadenaCaracteres ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
   
    let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 7");
    }

    let password = '';

    for(let i= 0; i < numeroDigitado; i++){

        let caracteraleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracteraleatorio);

        password+=caracteraleatorio;

    }

    contraseña.value = password;
    validacion()


}

function limpiar() {
    document.getElementById('contrasena').value = "";
}

