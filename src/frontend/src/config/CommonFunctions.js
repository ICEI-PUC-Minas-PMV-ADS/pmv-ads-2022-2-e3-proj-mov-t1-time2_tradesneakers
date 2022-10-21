export const normalizarTextoParaComparacao = (texto) => {
    return texto.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  }