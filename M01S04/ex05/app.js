var i;
var testNumber = prompt('Introdu un numar');
var upperLimit = prompt('Introdu limita superioara');

for (i = 0; i <= upperLimit; i++) {
  console.log(i);

  if (i % testNumber !== 0) {
    // jump to next iteration
    continue;
  }

  console.log(`Acest numar este multiplu de ${testNumber}.`);
}
