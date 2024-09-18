let numero = parseInt(prompt('Digite um número entre 1 e 20:'))
if (numero < 1 || numero > 20) {
    alert('digite um número válido entre 1 e 20.');
} else {
    let tabuada = ''

    for (let n = 1; n <= 20; n++) {
        tabuada += `${numero} x ${n} = ${numero * n}\n`
    }

    alert(tabuada)
}