function calcular(){
const valor_a = document.getElementById("a").value;
const valor_b = document.getElementById("b").value;
const valor_c = document.getElementById("c").value;

let a = valor_a;
let b = valor_b;
let c = valor_c;

    let d = calcular_delta(a, b, c);
    let x1 = parseFloat(calcular_x1(a, b, d).toFixed(2));
    let x2 = parseFloat(calcular_x2(a, b, d).toFixed(2));
    
    document.getElementById("x1").innerHTML = x1;
    document.getElementById("x2").innerHTML = x2;
    document.getElementById("d").innerHTML = d;


function calcular_delta(a, b, c){
    var d;
    d = (b*b) -4*a*c;
    return d;
}

function calcular_x1(a, b, delta){
    var x1;
    x1 = (-b + Math.sqrt(delta)) / (2*a);
    return x1;
}

function calcular_x2(a, b, delta){
    var x2;
    x2 = (-b - Math.sqrt(delta)) / (2*a);
    return x2;
}

// function calcular_bhaskara(a, b, c){
//     let d = calcular_delta(a, b, c);
//     let x1 = parseFloat(calcular_x1(a, b, d).toFixed(2));
//     let x2 = parseFloat(calcular_x2(a, b, d).toFixed(2));
//     let s = [x1 , x2];
//     return s;
// }


}