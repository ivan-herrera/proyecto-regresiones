/**
 * Variables globales
 */

var i = 0;

var valueX = document.getElementsByName("x");
var valueY = document.getElementsByName("y");

function lineal() {
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

        a = parseFloat(((elevarX()) * (sumarY()) - (sumarX()) * (multiplicarXY())) / ((valueX.length) * (elevarX()) - (Math.pow(sumarX(), 2))));

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

    return hallarY();
}

function exponencial(){
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

    return hallarY();

}

function hiperbolico(){
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

    return hallarY();
}

function logaritmica(){
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

    function xPrimaElevado(){
        res = 0;

        for(i = 0; i < valueX.length; i++){
            res = res + parseFloat(Math.pow(Math.log(valueX[i].value), 2));
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

    function xPrimaPorY(){
        res = 0;

        for(i = 0; i < valueX.length; i++){
            res = res + parseFloat((Math.log(valueX[i].value))*(valueY[i].value));
        }

        return res;
    }

    function a0(){
        res = 0;

        res = parseFloat(((xPrimaElevado()*sumarY())-(xPrima()*xPrimaPorY()))/((valueX.length*xPrimaElevado())-(Math.pow(xPrima(), 2))));

        return res;
    }

    function a1(){
        res = 0;

        res = parseFloat(((valueX.length*xPrimaPorY())-(xPrima()*sumarY()))/((valueX.length*xPrimaElevado())-(Math.pow(xPrima(),2))));

        return res;
    }

    function hallarY(){
        var res = new Array(valueX.length);

        var valueA0 = a0();
        var valueA1 = a1();
        
        for(i = 0; i < valueX.length; i++){
            res[i] = parseFloat((valueA0) + (valueA1)*Math.log(valueX[i].value));
        }

        return res;
    }

    return hallarY();
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

function pontencial(){
   
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

    return hallarY();
}

function polinomica(){

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
      
    var tam = valueX.length;
    let x = sumarX();
    let x22 = x2();
    let y = sumarY();
    let mulXY = multiplicarXY();
    let mulX2Y = multiplicarX2Y();
    let x33 = x3();
    let x44 = x4();

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

      return hallarY();
}

function pruebas(){

    var valoresLineales = lineal();
    var valoresExp = exponencial();
    var valoresHip = hiperbolico();
    console.log(valoresHip);
    var valoresLog = logaritmica();
    var valoresPot = pontencial();
    var valoresPol = polinomica();

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
               label: 'Lineal',
               yAxesGroup: 'Valor',
               data: valoresLineales,
               fill: false,
               borderColor: '#033F63'
             },
             {
                label: 'Exponencial',
                yAxesGroup: 'Valor',
                data: valoresExp,
                fill: false,
                borderColor: '#FF6700'
              },
              {
                label: 'Hiperbólico',
                yAxesGroup: 'Valor',
                data: valoresHip,
                fill: false,
                borderColor: '#35FF69'
              },
              {
                label: 'Logaritmico',
                yAxesGroup: 'Valor',
                data: valoresLog,
                fill: false,
                borderColor: '#F6F930'
              },
              {
                label: 'Potencial',
                yAxesGroup: 'Valor',
                data: valoresPot,
                fill: false,
                borderColor: '#2DC7FF'
              },
              {
                label: 'Polinomica',
                yAxesGroup: 'Valor',
                data: valoresPol,
                fill: false,
                borderColor: '#000000'
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
             },
             {
                name: 'Exponencial',
                type: 'linear',
                position: 'right',
                scalePositionLeft: false,
                min: 0,
                max: 1
              },
              {
                name: 'Hiperbólico',
                type: 'linear',
                position: 'right',
                scalePositionLeft: false,
                min: 0,
                max: 1
              },
              {
                name: 'Logaritmica',
                type: 'linear',
                position: 'right',
                scalePositionLeft: false,
                min: 0,
                max: 1
              },
              {
                name: 'Potencial',
                type: 'linear',
                position: 'right',
                scalePositionLeft: false,
                min: 0,
                max: 1
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