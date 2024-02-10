let numeroMaximo = 10;
let numerosSorteados = [];
let numerosecreto = generarNumero();


let nDeIntentos = 1;
asignarTextoAElemento('h1','Juego del numero secreto!');
asignarTextoAElemento('p',`Escoge un numero del 1 al ${numeroMaximo}. Este es tu intento # ${nDeIntentos}`);

console.log(numerosecreto);



function verificarIntento(){
    //alert('Click desde el boton intentar ');

    let prueba = parseInt(document.getElementById('valorUsuario').value);

   // console.log(prueba);//retorna un string el document.getElementById
    

    if(prueba === numerosecreto){

        asignarTextoAElemento('p','Acertaste el numero en '+nDeIntentos+(nDeIntentos>1?' intentos':' intento'));
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{

        if(prueba > numerosecreto){

            asignarTextoAElemento('p',`El numero secreto es menor (intento #${nDeIntentos})`);

        }else{
            
            asignarTextoAElemento('p',`El numero secreto es mayor (intento #${nDeIntentos})`);

        }
        limpiarCaja();
        nDeIntentos+=1;
    }
}

function asignarTextoAElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}



function generarNumero(){
   let numeroGenerado = (Math.floor(Math.random() * numeroMaximo)+1);


   if(numerosSorteados.length == numeroMaximo){
    //si el arreglo esta lleno
    asignarTextoAElemento('p','Ya se han sorteado todos los numeros');

   }else{

    if(numerosSorteados.includes(numeroGenerado)){

    return generarNumero();

   }else{
    
    numerosSorteados.push(numeroGenerado);
    return numeroGenerado;

     }
  }

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    //numerosSorteados = []; reiniciar array
    console.log(numerosSorteados);
    nDeIntentos = 1;
    asignarTextoAElemento('h1','Juego del numero secreto!');
    asignarTextoAElemento('p',`Escoge un numero del 1 al ${numeroMaximo}. Este es tu intento # ${nDeIntentos}`);
    numerosecreto = generarNumero();
    console.log(numerosecreto);
    limpiarCaja();
    
    
    document.getElementById('reiniciar').setAttribute('disabled','true');
}