console.warn(`
  Folosind functia calculateRectangleArea()
  afiseaza suprafata unui dreptunghi de 4 pe 3
`);
console.log(calculateRectangleArea(4, 3));

console.warn(`
  Afiseaza suprafata totala a unor dreptunghiuri de 5 pe 3,
  respectiv 3 pe 2. Foloseste variabile.
`);
const rectangle1Surface = calculateRectangleArea(5, 3);
const rectangle2Surface = calculateRectangleArea(3, 2);
console.log(rectangle1Surface + rectangle2Surface);

function calculateRectangleArea(L, l) {
  return L * l;
}

console.warn(`
  Calculeaza intr-o variabila numita squareSurface aria unui patrat de 3 pe 3.
`);
let squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);

console.warn(
  `4. Folosind functia calculateRectangleArea()
  afiseaza suprafata unui dreptunghi de 12 pe 9`,
);
console.log(calculateRectangleArea(12, 9));

console.warn(`
  5. Afiseaza suprafata totala a trei dreptunghiuri
  de 15 pe 31, 8 pe 9, respectiv 10 pe 5. Foloseste
  variabile.
`);
rectangleSurface1 = calculateRectangleArea(15, 31);
rectangleSurface2 = calculateRectangleArea(8, 9);
rectangleSurface3 = calculateRectangleArea(10, 5);
totalSurface = rectangleSurface1 + rectangleSurface2 + rectangleSurface3;
console.log(totalSurface);

console.warn(`
  6. Calculeaza intr-o variabila numita anotherSquare aria unui patrat de 8 pe 8.
`);
let anotherSquare = calculateRectangleArea(8, 8);
console.log(anotherSquare);

console.log(15, 6);
