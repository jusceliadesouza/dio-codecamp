let offset = 7;
let limit = 9;
let personFind = false;

const info = [
    {
        nome: "Caique Andrade", 
        idade: 23, 
        cargo: "Trainee", 
        email: "caiqueandrade@hotmail.com", 
        tempoDeEmpresa: "3 meses"
    },
    {
        nome: "Júlio Cesar", 
        idade: 65, 
        cargo: "Diretoria", 
        email: "julio.cesar@oilcorp.com.br", 
        tempoDeEmpresa: "44 anos"
    },
    {
        nome: "Enzo Gaben", 
        idade: 25, 
        cargo: "Auxiliar Administrativo", 
        email: "enzogaben@oilcorp.com", 
        tempoDeEmpresa: "1 ano"
    },
    {
        nome: "Lenite Longo", 
        idade: 70, 
        cargo: "Diretoria", 
        email: "lenite@oilcorp.com.br", 
        tempoDeEmpresa: "50 anos"
    },
    {
        nome: "Renan Oliveira", 
        idade: 35, 
        cargo: "Liderança", 
        email: "renan@oilcorp.com", 
        tempoDeEmpresa: "10 anos"
    },
    {
        nome: "Renato Linhares", 
        idade: 32, 
        cargo: "Liderança", 
        email: "renatolinhares@oilcorp.com.br", 
        tempoDeEmpresa: "5 anos"
    },
    {
        nome: "Emerson Junior", 
        idade: 22, 
        cargo: "Tech lead", 
        email: "emersonjunior@oilcorp.com.br", 
        tempoDeEmpresa: "5 anos"
    },
    {
        nome: "Igor Alves", 
        idade: 26, 
        cargo: "DBA", 
        email: "igor.alves@hotmail.com", 
        tempoDeEmpresa: "Terceirizado"
    },
    {
        nome: "Marcela Kawakame", 
        idade: 28, 
        cargo: "Liderança", 
        email: "marcela@oilcorp.com.br", 
        tempoDeEmpresa: "6 anos"
    },
    {
        nome: "Eric Velloso", 
        idade: 29, 
        cargo: "Diretoria", 
        email: "e.velloso@oilcorp.com.br", 
        tempoDeEmpresa: "11 anos"
    }
];

for(let i = offset; i <= limit; i++) {
  let pessoa = info[i]
  
  if(pessoa.cargo == "Liderança" || pessoa.cargo == "Diretoria") {
    if(pessoa.email.endsWith("@oilcorp.com.br")) {
      personFind = true
      print(`Nome: ${pessoa.nome}, Cargo: ${pessoa.cargo}, Email: ${pessoa.email}`)
    }
  }  
}
  
if(!personFind) print("Não existem registros encontrados")
