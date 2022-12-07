export const normalizarTextoParaComparacao = (texto) => {
    return texto.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  }

export const formatarPreco = (preco) => {
  preco = parseFloat(preco);
  preco = preco.toFixed(2).toString();
  preco = preco.replace('.', ',');
  return preco;
};
