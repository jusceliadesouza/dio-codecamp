const arr = ["HO3FNO4OH6Cl", "H2O"];
let qualFiltro = 0;


let aux = 0

for(let item of arr) {
  aux = 0
  
  item.length <= 5 ? aux = 1
  : item.length > 5 && item.length <=10 ? aux = 2
  : aux = 3
  
  if(aux > qualFiltro) qualFiltro = aux
}

qualFiltro == 1 ? print("O filtro deve ser: Filtro Normal")
: qualFiltro == 2 ? print("O filtro deve ser: Filtro Específico")
: print("O filtro deve ser: Filtro Duplo Específico")