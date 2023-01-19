function parImpar(n) {
    if(n % 2 == 0) {
        return 'par'
    }
    return 'impar'
}

function soma(n1=0, n2=0) {
    return `a soma entre ${n1} e ${n2} é: ${n1+n2}`
}

let v = function(x) {
    return x*2
}

function fatorial(n) {
    let fat = 1;
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

function fator(n) {
    if(n == 1) {
        return 1
    } else {
        return n * fator(n-1)
    }
}

console.log(parImpar(3))

console.log(soma(1, 1))

console.log(fatorial(5))

console.log(fator(5))