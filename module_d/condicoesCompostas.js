var idade = 70;

if (idade < 18) {
    console.log("Não vota");
} else if(idade < 18 || idade > 65) {
     console.log("Voto opcional");
} else {
    console.log("Voto obrigatorio");
}

switch (idade) {
    case 0:
        console.log("Teste")
        break;

    default:
        console.log("Testando")
        break;
}