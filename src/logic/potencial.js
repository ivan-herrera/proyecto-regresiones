document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
    document.getElementById("viewR").style.display='none';
});

/**
 * Variables globales
 */

var i = 0;

var valueX = document.getElementsByName("x");
var valueY = document.getElementsByName("y");

/**
 * Funciones
 */

function sumarX(){
    var suma = 0;

    for(i = 0; i < valueX.length; i++){
        suma = suma + parseFloat(valueX[i].value);
    }

    return suma;
}

function sumarY(){
    var suma = 0;

    for(i = 0; i < valueY.length; i++){
        suma = suma + parseFloat(valueY[i].value);
    }

    return suma;
}

function xPrima(){
    res = 0;

    for(i = 0; i < valueX.length; i++){
        res = res + parseFloat(Math.log(valueX[i].value));
    }

    return res;
}


function elevarX() {
    res = 0;

    for (i = 0; i < valueX.length; i++) {
        res = res + parseFloat(Math.pow(valueX[i].value, 2));
    }

    return res;
}

function elevarY() {
    res = 0;

    for (i = 0; i < valueY.length; i++) {
        res = res + parseFloat(Math.pow(valueY[i].value, 2));
    }

    return res;
}

function multiplicarXY() {
    res = 0;

    for (i = 0; i < valueX.length; i++) {
        res = res + parseFloat(valueX[i].value * valueY[i].value);
    }

    return res;
}

function yPrima(){
    res = 0;

    for(i = 0; i < valueY.length; i++){
        res = res + parseFloat(Math.log(valueY[i].value));
    }

    return res;
}

function xPrimaElevado(){
    res = 0;

    for(i = 0; i < valueX.length; i++){
        res = res + parseFloat(Math.pow(Math.log(valueX[i].value), 2));
    }

    return res;
}

function xPrimaPorYPrima(){
    res = 0;

    for(i = 0; i < valueX.length; i++){
        res = res + parseFloat((Math.log(valueX[i].value))*(Math.log(valueY[i].value)));
    }

    return res;
}

function a0(){
    res = 0;

    res = parseFloat((((xPrimaElevado()*yPrima())-(xPrima()*xPrimaPorYPrima()))/(valueX.length*xPrimaElevado()-Math.pow(xPrima(),2))));

    return res;
}

function a1(){
    res = 0;

    res = parseFloat(((valueX.length*xPrimaPorYPrima())-(xPrima()*yPrima()))/((valueX.length*xPrimaElevado())-Math.pow(xPrima(),2)));

    return res;
}

function hallarY(){
    var res = new Array(valueX.length);

    var valueA0 = a0();
    var valueA1 = a1();
    
    for(i = 0; i < valueX.length; i++){
        res[i] = parseFloat(((Math.exp(valueA0)) * Math.pow(valueX[i].value, valueA1)));
    }

    return res;
}

function r() {
    var res = 0;

    res = parseFloat( ( (valueX.length) * (multiplicarXY()) - (sumarX()*sumarY()) ) / ( ( Math.sqrt( ( (valueX.length * elevarX()) - Math.pow(sumarX(),2) ) * ((valueX.length * elevarY()) - (Math.pow(sumarY(),2) ) ) )  ) ));

    return res
}

function crearArray(){
    res = new Array(valueX.length);

    for(i = 0; i < valueX.length; i++){
        res[i] = parseFloat(valueX[i].value);
    }

    return res;
}

function crearArray2(){
    res = new Array(valueY.length);

    for(i = 0; i < valueY.length; i++){
        res[i] = parseFloat(valueY[i].value);
    }

    return res;
}

function pruebas(){
    console.clear();
    console.log('Suma X: ' + sumarX());
    console.log('Suma Y: ' + sumarY());
    console.log("Mul X'Y': " + xPrimaPorYPrima());
    console.log('Suma LN(X)' + xPrima());
    console.log('Suma LN(Y)' + yPrima());
    console.log('ElevarX: ' + xPrimaElevado());
    console.log('A0: ' + a0());
    console.log('A1: ' + a1());
    console.log('r: ' + r());
    console.log('r^2: ' + Math.pow(r(),2));

    var varR = r();
    var r2 = Math.pow(r(),2);
    var valueA0 = a0();
    var valueA1 = a1();

    document.getElementById("valueY").innerHTML = "<strong>Y:</strong> "+ Math.exp(valueA0).toFixed(3) + " * x^" + valueA1.toFixed(3);
    document.getElementById("valueR").innerHTML = "<strong>R:</strong> "+ varR.toFixed(6) + "";
    document.getElementById("valueR2").innerHTML = "<strong>R²:</strong> "+ r2.toFixed(6) + "";
    document.getElementById("viewR").style.display = "block";

    var y1 = hallarY();
    var arreglo1 = crearArray();
    var arreglo2 = crearArray2();
    console.log('Y: ' + y1);

    var canvas = document.getElementById('myChart');
    new Chart(canvas, {
         type: 'line',
         data: {
           labels: arreglo1,
           datasets: [
             {
               label: 'Original',
               yAxesGroup: 'Valor',
               data: arreglo2,
               fill: false,
               borderColor: '#C03221'
             },
             {
               label: 'Potencial',
               yAxesGroup: 'Valor',
               data: y1,
               fill: false,
               borderColor: '#033F63'
             }
           ]
         },
         options: {
           yAxes: [
             {
               name: 'Normal',
               type: 'linear',
               position: 'left',
               scalePositionLeft: true,

             },
             {
               name: 'Potencial',
               type: 'linear',
               position: 'right',
               scalePositionLeft: false,
               min: 0,
               max: 1
             }
           ]
         }
    });

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Ajuste realizado correctamente'
    })
    
}