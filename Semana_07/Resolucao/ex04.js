//EX04
var saldo = 1000;
var limiteCredito = 500;
var valorCompras = [200, 800, 300, 400, 600];

for (var i = 0; i < valorCompras.length; i++) {
    var valorCompra = valorCompras[i];

    if (valorCompra <= saldo) {
        console.log("Compra " + (i+1) + " aprovada. Saldo restante: " + (saldo - valorCompra));
        saldo -= valorCompra;
    } else if (valorCompra <= saldo + limiteCredito) {
        console.log("Compra " + (i+1) + " aprovada com limite de crédito. Saldo restante: " + ((saldo + limiteCredito) - valorCompra));
        saldo = 0;
        limiteCredito -= (valorCompra - saldo);
    } else {
        console.log("Compra " + (i+1) + " negada. Saldo insuficiente e limite de crédito excedido.");
    }
}

/*Saída do código
Compra 1 aprovada. Saldo restante: 800
Compra 2 aprovada. Saldo restante: 0
Compra 3 aprovada com limite de crédito. Saldo restante: 200
Compra 4 negada. Saldo insuficiente e limite de crédito excedido.
Compra 5 negada. Saldo insuficiente e limite de crédito excedido.
*/

/* Alternativa correta: D) */
