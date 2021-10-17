var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 34,
  skills: {
    html: true,
    css: true,
    javaScript: false,
    driving: true,
  },
  petOwner: false,
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`
  Folosind Object.keys() pe proprietatea skills,
  afiseaza abilitatile persoanei daca acestea sunt true.
  Folosind propozitii de forma: “person.name cunoaste: html.”
   “person.name cunoaste: javaScript.”
`);
Object.keys(person.skills).forEach(function (skillName) {
  // iteratia 0 -> person.skills.html
  // iteratia 1 -> person.skills.css
  // iteratie 2 -> person.skills.javaScript
  var knownSkill = person.skills[skillName];

  if (knownSkill === true) {
    console.log(`${person.name} cunoaste: ${skillName}.`);
  }
});

console.warn(`
  Prin aceeasi metoda, afiseaza o lista inversata cu numele
  complet inversat al prietenilor.
`);
// ['carol', 'steven', 'larry']
var reversedFriendsList = Object.keys(person.friends).reverse();
var i;
for (i = 0; i < reversedFriendsList.length; i++) {
  var friendProperty = reversedFriendsList[i];
  var friend = person.friends[friendProperty];
  var { name, surname } = friend;

  console.log(`${surname} ${name}`);
}

console.warn(`
  Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.”
  folosind Object.keys()
`);
var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (
  friendProperty,
  index,
  friendKeys,
) {
  var friend = person.friends[friendProperty];
  var punctuation = ', ';
  var arrLength = friendKeys.length;

  if (index === arrLength - 1) {
    punctuation = '.';
  }

  if (index === arrLength - 2) {
    punctuation = ' si ';
  }

  message = `${message}${friend.name}${punctuation}`;
});
console.log(message);

console.warn(`
  Folosind bucla, afiseaza mai multe propozitii
  (cate una per console.log()) care sa afiseze:
  “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…
`);
// ['larry', 'steven', 'carol']
var friendsKeys = Object.keys(person.friends);
// delete this i
// var i = 0;

while (i < friendsKeys.length) {
  var friendKey = friendsKeys[i];
  var friend = person.friends[friendKey];
  var { name, age } = friend;
  var ageDiff = Math.abs(person.age - age);

  console.log(
    `Diferenta de varsta intre ${name} si ${person.name} este de ${ageDiff} ani.`,
  );

  i++;
}
console.warn(
  'Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei.',
);
Object.keys(person.skills).forEach(function (skillName, i, skills) {
  console.log(skillName.toLocaleLowerCase());
});

console.warn(
  'Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.',
);
Object.keys(person.friends).forEach(function (friendKey) {
  var friend = person.friends[friendKey];
  console.log(`${friend.name} ${friend.surname}`);
});
console.warn(
  `Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()`,
);

var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (
  friendProperty,
  index,
  friendKeys,
) {
  var friend = person.friends[friendProperty];
  var punctuation = ', ';
  var arrLength = friendKeys.length;

  if (index === friendKeys.length - 1) {
    punctuation = '.';
  }

  if (index === friendKeys.length - 2) {
    punctuation = ' si ';
  }

  message = `${message}${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);
