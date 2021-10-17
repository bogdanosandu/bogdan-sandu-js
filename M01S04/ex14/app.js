var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};
console.warn(
  'Afiseaza in consola folosind metoda forEach() numele fiecarui animal.',
);
person.pets.forEach((pet) => {
  const { name } = pet;

  console.log(name);
});

console.warn('Folosind o bucla for afiseaza suma anilor animalelor.');
let petAgeSum = 0;

person.pets.forEach((pet) => {
  const { age } = pet;

  petAgeSum += age;
});
console.log(petAgeSum);

console.warn(
  'Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are... etc”.',
);
person.pets.forEach((pet) => {
  const { name, age, species } = pet;

  console.log(`${name} este ${species} si are ${age} ani.`);
});

console.warn(
  'Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars... ” (repeta pentru toate intrarile din array).',
);
const personFirstName = person.firstName;
const personBirthYear = person.birthYear;
const personAge = new Date().getFullYear() - personBirthYear;

person.pets.forEach((pet) => {
  const { age, name } = pet;
  const ageDiff = personAge - age;

  console.log(
    `Intre ${personFirstName} si ${name} este o diferenta de ${ageDiff} ani.`,
  );
});

console.warn(
  'Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.',
);
const petsOwned = person.pets.length;
for (let i = petsOwned - 1; i >= 0; i--) {
  const { name } = person.pets[i];

  console.log(`Animalul meu se numeste ${name}`);
}

console.warn(
  'Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”',
);
for (let i = 0; i < petsOwned; i++) {
  const { name, age } = person.pets[i];
  const ageDiff = personAge - age;

  if (i === petsOwned - 1) {
    console.log(
      `${name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
    );
  }
}

console.warn(
  'Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.',
);
sentence = 'Am ';
person.pets.forEach((pet, i) => {
  const { species } = pet;
  let punctuation = ', ';

  if (i === petsOwned - 1) {
    punctuation = '.';
  } else if (i === petsOwned - 2) {
    punctuation = ' si ';
  }

  sentence += `${species}${punctuation}`;
});
console.log(sentence);
