let plastico = 10;
let diasNecessarios = 0;

while (plastico != 1) {
  plastico = Math.round(plastico / 2);
  diasNecessarios++;
}

print(`Serão necessários ${diasNecessarios} dias`);
