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

function x2(){
    var res = 0;

    for(i = 0; i < valueX.length; i++){
        res = res + Math.pow(valueX[i].value, 2);
    }

    return res;
}

function x3(){
    var res = 0;

    for(i = 0; i < valueX.length; i++){
        res = res + Math.pow(valueX[i].value, 3);
    }

    return res;
}

function x4(){
    var res = 0;

    for(i = 0; i < valueX.length; i++){
        res = res + Math.pow(valueX[i].value, 4);
    }

    return res;
}

function multiplicarXY() {
    var res = 0;

    for (i = 0; i < valueX.length; i++) {
        res = res + parseFloat(valueX[i].value * valueY[i].value);
    }

    return res;
}

function multiplicarX2Y() {
    var res = 0;

    for (i = 0; i < valueX.length; i++) {
        res = res + parseFloat(Math.pow(valueX[i].value, 2) * valueY[i].value);
    }

    return res;
}

let gauss = function (mat) {
    function getRow (mat, i0) {
      for (let i = i0; i < mat.length; i++) {
        if (mat[i][i0] === 0) continue
        let tempRow = mat[i0]
        mat[i0] = mat[i]
        mat[i] = tempRow
        return mat[i0]
      }
    }
  
    function eliminateDown (mat, i0) {
      let row0 = mat[i0]
      for (let i = i0 + 1; i < mat.length; i++) {
        let row = mat[i]
        if (row[i0] === 0) continue
        let mul = row[i0] / row0[i0]
        for (let j = i0 + 1; j < row0.length; j++) { row[j] -= row0[j] * mul }
        row[i0] = 0
      }
    }
  
    function eliminateUp (mat, i0) {
      let row0 = mat[i0]
      for (let i = i0 - 1; i >= 0; i--) {
        let row = mat[i]
        if (row[i0] === 0) continue
        let mul = row[i0] / row0[i0]
        for (let j = i0 + 1; j < row0.length; j++) { row[j] -= row0[j] * mul }
        row[i0] = 0
      }
    }
  
    mat = mat.slice()
    for (let i = 0; i < mat.length; i++) mat[i] = mat[i].slice()
  
    for (let i = 0; i < mat.length - 1; i++) {
      getRow(mat, i)
      eliminateDown(mat, i)
    }
    let res = new Array(mat.length)
    for (let i = mat.length - 1; i > 0; i--) {
      eliminateUp(mat, i)
    }
    for (let i = 0; i < res.length; i++) {
      res[i] = mat[i][mat[i].length - 1] / mat[i][i]
    }
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

function elevarX() {
  res = 0;

  for (i = 0; i < valueY.length; i++) {
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

function r() {
  var res = 0;

  res = parseFloat(((valueX.length) * (multiplicarXY()) - (sumarX() * sumarY())) / ((Math.sqrt(((valueX.length * elevarX()) - Math.pow(sumarX(), 2)) * ((valueX.length * elevarY()) - (Math.pow(sumarY(), 2)))))));

  return res
}

function pruebas(){
    var tam = valueX.length;
    let x = sumarX();
    let x22 = x2();
    let y = sumarY();
    let mulXY = multiplicarXY();
    let mulX2Y = multiplicarX2Y();
    let x33 = x3();
    let x44 = x4();

    console.log("X: " + x);
    console.log("X^2 : " + x22);
    console.log("y : " + y);
    console.log("X^3 : " + x33);
    console.log("X^4 : " + x44);
    console.log("XY : " + mulXY);
    console.log("X^2Y : " + mulX2Y);
    console.log("tam : " + tam);

    var varR = r();
    var r2 = Math.pow(r(), 2);

    let arr = [[tam, x, x22, y],
            [x, x22, x33,mulXY],
            [x22, x33, x44, mulX2Y]];

    let res = gauss(arr);
    console.log(res);

    function hallarY(){
        var resultado =  new Array(valueX.length);

        for(i = 0; i < valueX.length; i++){
            resultado[i] =  parseFloat(res[2]*Math.pow(valueX[i].value, 2) + res[1]*valueX[i].value + res[0]);
        }

        return resultado;
    }

    console.log("Y: " + hallarY())

    document.getElementById("valueY").innerHTML = "<strong>Y:</strong> (" + res[2].toFixed(2) + ") * x^2 + (" + res[1].toFixed(2) + ") * x + (" + res[0].toFixed(2) + ")";
    document.getElementById("valueR").innerHTML = "<strong>R:</strong> " + varR.toFixed(6) + "";
    document.getElementById("valueR2").innerHTML = "<strong>R²:</strong> " + r2.toFixed(6) + "";
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
               label: 'Polinomica',
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
               name: 'Polinomica',
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

