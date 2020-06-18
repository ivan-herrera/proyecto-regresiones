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

function sumarX() {
    var suma = 0;

    for (i = 0; i < valueX.length; i++) {
        suma = suma + parseFloat(valueX[i].value);
    }

    return suma;
}

function sumarY() {
    var suma = 0;

    for (i = 0; i < valueY.length; i++) {
        suma = suma + parseFloat(valueY[i].value);
    }

    return suma;
}

function sumalnY() {
    var suma = 0;

    for (i = 0; i < valueY.length; i++) {
        suma = suma + parseFloat(Math.log(valueY[i].value));
    }

    return suma;
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
    var res = 0;

    for (i = 0; i < valueY.length; i++) {
        res = res + parseFloat((valueX[i].value) * Math.log(valueY[i].value));
    }

    return res;
}

function calcularA0() {
    var a = 0;

    a = parseFloat(((elevarX()) * (sumalnY()) - (sumarX()) * (multiplicarXY())) / ((valueX.length) * (elevarX()) - (Math.pow(sumarX(), 2))));

    return a;
}

function calcularA1() {
    var a = 0;

    a = parseFloat((valueX.length * (multiplicarXY()) - (sumarX() * sumalnY())) / ((valueX.length * elevarX()) - (Math.pow(sumarX(), 2))));

    return a;
}

function hallarY() {
    var a = new Array(valueX.length);

    var a0 = calcularA0();
    var a1 = calcularA1();

    for (i = 0; i < valueX.length; i++) {
        a[i] = parseFloat(Math.exp(a0) * (Math.exp(a1 * valueX[i].value)));
    }

    return a;
}

function multXY() {
    res = 0;

    for (i = 0; i < valueX.length; i++) {
        res = res + parseFloat(valueX[i].value * valueY[i].value);
    }

    return res;
}

function r() {
    var res = 0;

    res = parseFloat( ( (valueX.length) * (multXY()) - (sumarX()*sumarY()) ) / ( ( Math.sqrt( ( (valueX.length * elevarX()) - Math.pow(sumarX(),2) ) * ((valueX.length * elevarY()) - (Math.pow(sumarY(),2) ) ) )  ) ));

    return res
}

function crearArray() {
    res = new Array(valueX.length);

    for (i = 0; i < valueX.length; i++) {
        res[i] = parseFloat(valueX[i].value);
    }

    return res;
}

function crearArray2() {
    res = new Array(valueY.length);

    for (i = 0; i < valueY.length; i++) {
        res[i] = parseFloat(valueY[i].value);
    }

    return res;
}


function pruebas() {
    console.clear();
    console.log('Suma X: ' + sumarX());
    console.log('Suma Y: ' + sumarY());
    console.log('Mul XY: ' + multiplicarXY());
    console.log('Suma LN(Y)' + sumalnY());
    console.log('ElevarX: ' + elevarX());
    console.log('A0: ' + calcularA0());
    console.log('A1: ' + calcularA1());
    console.log('A (EXP(A0)): ' + Math.exp(calcularA0()));
    console.log('Array Y: ' + hallarY());
    console.log('r: ' + r());
    console.log('r^2: ' + Math.pow(r(),2));

    var a0 = calcularA0();
    var a1 = calcularA1();

    var varR = r();
    var r2 = Math.pow(r(),2);

    document.getElementById("valueY").innerHTML = "<strong>Y:</strong> "+ Math.exp(a0).toFixed(3) + " * Exp(" + a1.toFixed(3) + " * x)";
    document.getElementById("valueR").innerHTML = "<strong>R:</strong> "+ varR.toFixed(6) + "";
    document.getElementById("valueR2").innerHTML = "<strong>R²:</strong> "+ r2.toFixed(6) + "";
    document.getElementById("viewR").style.display = "block";

    var y1 = hallarY();
    var arreglo1 = crearArray();
    var arreglo2 = crearArray2();

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
                    label: 'Exponencial',
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
                    name: 'Exponencial',
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