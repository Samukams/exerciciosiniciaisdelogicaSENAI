function salarioJunin(salarioMensal, diasTrabalhados) {
  const valorDia = diasTrabalhados === 0 ? 0 : salarioMensal / diasTrabalhados;
  const salarioSemanal = valorDia * 5;

  return {
    valorDia: Number(valorDia.toFixed(2)),
    salarioSemanal: Number(salarioSemanal.toFixed(2))
  };
}

module.exports = salarioJunin;