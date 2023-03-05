let amostra = [2, 50, 75, 90];

for (let item of amostra) {
  item >= 75
    ? print("Descartar da lista")
    : item >= 50 && item < 75
    ? print("Manter sob observação")
    : item < 50
    ? print("Isolar e iniciar protocolo de cuidados")
    : print("")
}
