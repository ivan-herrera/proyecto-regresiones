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

function multiplicarXY() {
    res = 0;

    for (i = 0; i < valueX.length; i++) {
        res = res + parseFloat(valueX[i].value * valueY[i].value);
    }

    return res;
}

function xPrima(){
    var suma = 0;

    for(i = 0; i < valueX.length; i++){
        suma = suma + parseFloat(1/valueX[i].value);
    }

    return suma;
}

function xPrimaPorY(){
    res = 0;

    for(i = 0; i < valueX.length; i++){
        res = res + parseFloat(((1/valueX[i].value))*(valueY[i].value));
    }

    return res;
}

function xPrimaElevado(){
    res = 0;

    for(i = 0; i < valueX.length; i++){
        res = res + parseFloat(Math.pow((1/valueX[i].value), 2));
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

function a0(){
    res = 0;

    res = parseFloat((((xPrimaElevado()*sumarY())-(xPrima()*xPrimaPorY()))/((valueX.length*xPrimaElevado())-Math.pow(xPrima(),2))));

    return res;
}

function a1(){
    res = 0;

    res = parseFloat(((valueX.length*xPrimaPorY())-(xPrima()*sumarY()))/((valueX.length*xPrimaElevado())-Math.pow(xPrima(),2)));

    return res;
}

function hallarY(){
    var res = new Array(valueX.length);

    var valueA0 = a0();
    var valueA1 = a1();
    
    for(i = 0; i < valueX.length; i++){
        res[i] = parseFloat(valueA0 + (valueA1/valueX[i].value));
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
    console.log("Mul X'Y: " + xPrimaPorY());
    console.log("Suma X'" + xPrima());
    console.log('ElevarX: ' + xPrimaElevado());
    console.log('A0: ' + a0());
    console.log('A1: ' + a1());
    console.log('r: ' + r());
    console.log('r^2: ' + Math.pow(r(),2));

    var y1 = hallarY();
    var arreglo1 = crearArray();
    var arreglo2 = crearArray2();
    console.log('Y: ' + y1);

    var varR = r();
    var r2 = Math.pow(r(),2);

    var valueA0 = a0();
    var valueA1 = a1();

    document.getElementById("valueY").innerHTML = "<strong>Y:</strong> "+ valueA0.toFixed(2) + " + (" + valueA1.toFixed(2) + " / x)";
    document.getElementById("valueR").innerHTML = "<strong>R:</strong> "+ varR.toFixed(6) + "";
    document.getElementById("valueR2").innerHTML = "<strong>R²:</strong> "+ r2.toFixed(6) + "";
    document.getElementById("viewR").style.display = "block";

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
               label: 'Hiperbólico',
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
               name: 'Hiperbólico',
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