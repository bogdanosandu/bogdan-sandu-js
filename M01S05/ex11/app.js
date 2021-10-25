console.warn(
  'Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface. Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi. Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.',
);

const calculateSurface = function (L, l, h) {
  switch (arguments.length) {
    case 1:
      return L ** 2;

      break;

    case 2:
      return L * l;

      break;

    case 3:
      const parallelipipedSurface = 2 * (L * l + L * h + l * h);
      return parallelipipedSurface;

      break;
  }
};

console.warn(
  'Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16.',
);

const calculateCircleArea = (circleRadius) => {
  const circleArea = Math.PI * circleRadius ** 2;

  return circleArea;
};

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(
  'Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge. a. Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.” b. Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”',
);

const pet = {
  getName: () => {
    return 'Aussie';
  },
  getSpecies: () => {
    return 'cat';
  },
  getAge: () => {
    return 11;
  },
};

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
