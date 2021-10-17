console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);
var person = {
  firstName: 'Bogdan',
  lastName: 'Sandu',
  email: 'bogdan@mail.com',
  birthYear: 1979,
  pets: [
    {
      name: 'Aussie',
      species: 'cat',
      age: 11,
    },
    {
      name: 'Betty',
      species: 'dog',
      age: 2,
    },
    {
      name: 'Lady',
      species: 'cat',
      age: 7,
    },
  ],
  zipCode: '11220',
};
var petName = person.pets[0];

console.warn(
  'Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.',
);

console.log(
  `Numele meu este: ${person.firstName} si ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.');

console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  'Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”',
);

console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

console.warn(
  'Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.',
);

console.log((2021 - person.pets[2].age).toString());

console.warn(`
Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`);

console.log((2021 - person.birthYear - person.pets[0].age).toString());

console.warn(`Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
`);

var difference = 2021 - person.birthYear - person.pets[0].age;
console.log(difference.toString());

console.warn(`Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
`);

console.log(
  `Intre ${person.firstName} si ${person.pets[0].name} este o diferenta de ${difference} ani.`,
);

var prop01 = document.getElementById('prop01');
var prop02 = document.getElementById('prop02');
var prop03 = document.getElementById('prop03');
var prop04 = document.getElementById('prop04');
var prop05 = document.getElementById('prop05');

console.warn(
  'Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)',
);

var messageElement1 = document.getElementById('prop01');
var message1 = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;

messageElement1.innerText = message1;

console.log(message1);
console.warn(
  'Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2 ',
);

var messageElement2 = document.getElementById('prop02');
var message2 = person.pets[0].age - person.pets[2].age;

messageElement2.innerText = message2;

console.log(message2);

console.warn(
  'Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”',
);

var messageElement3 = document.getElementById('prop03');

var message3 = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}`;

messageElement3.innerText = message3;

console.log(message3);
