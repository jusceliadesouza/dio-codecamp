let lista1 = ["ClO2", "B2H6", "C2H40", "F2"];
let lista2 = ["CO2", "N3", "O2"];
let lista3 = ["HCN", "HCl"];

let arr = [lista1, lista2, lista3];

let qualFiltro = false;
let qualMolecula;

let gases = ["NO2", "SO2", "CO", "FHO"]; //lista de gases prejudiciais

for (lista of arr) {
  for (gas of gases) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === gas) {
        qualFiltro = true;
        qualMolecula = lista[i];
      }
    }
  }
}

qualFiltro
  ? print(`Filtro Específico para a Molécula ${qualMolecula}`)
  : print("Filtro Simples");
