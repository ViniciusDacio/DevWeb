function calcular_delta(a, b, c){
    var d;
    d = (b*b) -4*a*c
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

function calcular_bhaskara(a, b, c){
    let d = calcular_delta(a, b, c);
    let x1 = parseFloat(calcular_x1(a, b, d).toFixed(2));
    let x2 = parseFloat(calcular_x2(a, b, d).toFixed(2));
    let s = [x1 , x2];
    return s;
}
export {calcular_delta, calcular_x1, calcular_x2, calcular_bhaskara}