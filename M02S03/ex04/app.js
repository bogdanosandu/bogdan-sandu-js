// load image & p element from DOM
const imageElement = document.getElementsByTagName('img')[0];
const messageElement = document.querySelector('.message');

console.log(imageElement.complete);

// bind event to image
// imageElement.addEventListener('load', () => {
//   messageElement.textContent = 'Imaginea s-a incarcat.';
// });

// v2
imageElement.onload = () => {
  messageElement.textContent = 'Imaginea s-a incarcat.';

  console.log(imageElement.complete);
};

imageElement.onclick = () => {
  alert(
    `Imaginea cu URL:https://placeholder.com/wp-content/uploads/2018/10/placeholder-1.webp s-a incarcat`,
  );
};
