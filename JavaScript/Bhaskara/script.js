function calcular(){
    const valor_a = document.getElementById('a').value;
    const valor_b = document.getElementById('b').value;
    const valor_c = document.getElementById('c').value;

    let bh = calcular_bhaskara(valor_a, valor_b, valor_c);

    if(bh[1] == null){
        exibe(bh[0], 'Raiz Negativa', 'Raiz Negativa');
    }else{
        let d = parseFloat(bh[0].toFixed(2));
        let x1 = parseFloat(bh[1].toFixed(2));
        let x2 = parseFloat(bh[2].toFixed(2));
        exibe(d, x1, x2);
    }
}

function calcular_delta(a, b, c){
    let d;
    d = (b*b) -4*a*c;
    return d;
}

function calcular_bhaskara(a, b, c){
    let delta = calcular_delta(a, b, c);
    let s = [];

    if((a && b && c) == 0){
        s = [0,0,0];
    }
    else if(delta < 0){
        s[0] = delta;
    }else{
        let x1, x2;
        x1 = (-b + Math.sqrt(delta)) / (2*a);
        x2 = (-b - Math.sqrt(delta)) / (2*a);
        
        s = [delta, x1 , x2];
    }
    return s;
}

function exibe(d, x1, x2){
    document.getElementById('d').innerHTML = d;
    document.getElementById('x1').innerHTML = x1;
    document.getElementById('x2').innerHTML = x2;
}