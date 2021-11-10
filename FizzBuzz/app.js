// Creeaza intr-un folder oarecare un script alaturat unui HTML care sa numere in consola de la 1 la 100 si daca numarul se divide cu 3 scrie Fizz, daca se divide cu 5 scrie Buzz si daca se divide cu ambele, scrie FizzBuzz
// (atunci cand scrii cuvintele, omite numerele)

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}
