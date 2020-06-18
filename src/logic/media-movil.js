
/**
 * Variables globales
 */

var i = 0;

var valueX = document.getElementsByName("x");
var valueY = document.getElementsByName("y");
var periodo = document.getElementsByName("p");

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

function ma(source,period) {
    var sum = 0;
    var sma = new Array(source.length);
    for (var i=0; i<source.length; i++)
    {
        if (i >= period)
        {
            for (var j=0;j<period-1;j++)
            {
                sum = sum + source[i-j];
            }
            sma[i] = Math.round(sum/period);
            sum = 0;
        }
        else
        {
            sma[i] = null;
        }
    }
    return sma;
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

    arreglo1 = crearArray();
    arreglo2 = crearArray2();

    console.log(periodo[0].value);
    var resY = ma(arreglo1, periodo[0].value);

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
                    label: 'Media Móvil',
                    yAxesGroup: 'Valor',
                    data: resY,
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
                    name: 'Media Móvil',
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
