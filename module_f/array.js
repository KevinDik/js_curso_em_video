let num = [5, 2, 8, 9, 3];
num.push(1);
console.log(`nosso vetor é o ${num.length}`);
console.log(`nosso vetor é o ${num.sort()}`);

for (let index = 0; index < num.length; index++) {
    console.log(num[index])   
}

for (let index in num) {
    console.log(num[index])
}
let pos = num.indexOf(8)
console.log('posição', pos);