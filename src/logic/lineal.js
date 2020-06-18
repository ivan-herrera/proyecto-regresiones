document.addEventListener('DOMContentLoaded', function () {
    console.log("ready!");
    document.getElementById("viewR").style.display = 'none';
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

function multiplicarXY() {
    res = 0;

    for (i = 0; i < valueX.length; i++) {
        res = res + parseFloat(valueX[i].value * valueY[i].value);
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

/* Funcion a0*/

function calcularA0() {
    var a = 0;

    a = parseFloat((((elevarX()) * (sumarY())) - ((sumarX()) * (multiplicarXY()))) / (((valueX.length) * (elevarX())) - (Math.pow(sumarX(), 2))));

    return a;
}

function calcularA1() {
    var a = 0;

    a = parseFloat((valueX.length * (multiplicarXY()) - (sumarX() * sumarY())) / ((valueX.length * elevarX()) - (Math.pow(sumarX(), 2))));

    return a;
}

function hallarY() {
    var y = new Array(valueX.length);

    var a = calcularA0();
    var b = calcularA1();


    for (i = 0; i < valueX.length; i++) {
        y[i] = parseFloat(a) + parseFloat(b) * valueX[i].value;
        console.log('Desde hallarY(): ' + valueX[i].value);
    }

    return y;
}

function r() {
    var res = 0;

    res = parseFloat(((valueX.length) * (multiplicarXY()) - (sumarX() * sumarY())) / ((Math.sqrt(((valueX.length * elevarX()) - Math.pow(sumarX(), 2)) * ((valueX.length * elevarY()) - (Math.pow(sumarY(), 2)))))));

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

arrayyy = crearArray();

function pruebas() {
    console.clear();
    console.log('Suma X: ' + sumarX());
    console.log('Suma Y: ' + sumarY());
    console.log('Mul XY: ' + multiplicarXY());
    console.log('ElevarX: ' + elevarX());
    console.log('a0: ' + calcularA0());
    console.log('a1: ' + calcularA1());
    console.log('r: ' + r());
    console.log('r^2: ' + Math.pow(r(), 2));

    var varR = r();
    var r2 = Math.pow(r(), 2);

    document.getElementById("valueY").innerHTML = "<strong>Y:</strong> " + calcularA0().toFixed(3) + " + " + calcularA1().toFixed(3) + " * " + "x";
    document.getElementById("valueR").innerHTML = "<strong>R:</strong> " + varR.toFixed(6) + "";
    document.getElementById("valueR2").innerHTML = "<strong>R²:</strong> " + r2.toFixed(6) + "";
    document.getElementById("viewR").style.display = "block";

    var prueba = calcularA0() + (calcularA1() * 69.7);

    console.log('Variable prueba: ' + prueba);
    var y1 = hallarY();
    console.log('Grafica Y: ' + y1);
    var arreglo1 = crearArray();
    var arreglo2 = crearArray2();
    console.log(arreglo1);

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
                    label: 'Lineal',
                    yAxesGroup: 'Valor',
                    data: y1,
                    fill: false,
                    borderColor: '#033F63',
                    lineTension: 0
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
                    name: 'Lineal',
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




/**
 * GRAFICO CON CHART
 */

