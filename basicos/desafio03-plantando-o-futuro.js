let distancia = parseInt(gets());

(distancia == 10) ? console.log("Plantar!")
: (distancia > 10) ? console.log(`O buraco deve retroceder ${(distancia-10)} metros`)
: console.log(`O buraco deve avançar ${(10-distancia)} metros`)