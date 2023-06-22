class CuentaBancaria {
    constructor(saldoInicial) {
      this._saldo = saldoInicial;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    depositar(cantidad) {
      this._saldo += cantidad;
    }
  
    retirar(cantidad) {
      if (cantidad <= this._saldo) {
        this._saldo -= cantidad;
      } else {
        console.log("Saldo insuficiente");
      }
    }
  }
  
  const cuenta = new CuentaBancaria(100);
  console.log(cuenta.saldo); // Output: 100
  cuenta.depositar(50);
  console.log(cuenta.saldo); // Output: 150
  cuenta.retirar(30);
  console.log(cuenta.saldo); // Output: 120
  