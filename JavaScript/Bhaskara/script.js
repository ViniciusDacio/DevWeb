function calcular(){
    const valor_a = document.getElementById("a").value;
    const valor_b = document.getElementById("b").value;
    const valor_c = document.getElementById("c").value;

    let bh = calcular_bhaskara(valor_a, valor_b, valor_c);

    if(bh === -1){
        document.getElementById("x1").innerHTML = 'Raiz negativa';
        document.getElementById("x2").innerHTML = 'Raiz negativa';
        document.getElementById("d").innerHTML = 0;
    }else{
        let x1 = parseFloat(bh[0].toFixed(2));
        let x2 = parseFloat(bh[1].toFixed(2));
        exibe(calcular_delta(valor_a, valor_b, valor_c), x1, x2);
    }
}

function calcular_delta(a, b, c){
    let d;
    d = (b*b) -4*a*c;
    return d;
}

function calcular_bhaskara(a, b, c){
    let delta = calcular_delta(a, b, c);
    let x1, x2, s;

    if(d < 0){
        return -1;
    }

    x1 = (-b + Math.sqrt(delta)) / (2*a);
    x2 = (-b - Math.sqrt(delta)) / (2*a);
    
    s = [x1 , x2];

    return s;
}

function exibe(d, x1, x2){
    document.getElementById("x1").innerHTML = x1;
    document.getElementById("x2").innerHTML = x2;
    document.getElementById("d").innerHTML = d;
}