let arr = ["Reflorestamento", "EsgotoTratado", "EmissaoDeCarbono", "EnergiaSustentavel"]

const list = {
    Reflorestamento: "Feito",
    EsgotoTratado: "Não feito",
    EmissaoDeCarbono: "Em progresso",
    EnergiaSustentavel: "Feito",
}

const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);

arr.forEach(function(currentValue) {
  const chave = findItem(list, currentValue)
  const situacao = list[chave]
  
  situacao == "Feito" ? print("Não multar")
  : situacao == "Em progresso" ? print("Avaliação de progresso")
  : print("Multar")
}) 