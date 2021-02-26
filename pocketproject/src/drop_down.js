
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/"
};

const dogLinkCreator = () => {
  let dogLinks = [];

  for(let key in dogs) {
    let atag = document.createElement('a');
    atag.innerHTML = key;
    atag.href = dogs[key];
    let litag = document.createElement('li');
    litag.classList.add('dog-link');
    litag.appendChild(atag);

    dogLinks.push(litag);
  };
  return dogLinks;
};

const attachDogLinks = () => {
  let dogLinks = dogLinkCreator();

  let ul = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach((dogLink) => {
    ul.appendChild(dogLink);
  });
};

attachDogLinks();

const handleEnter = () => {
  let dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach((dog) => {
    dog.classList.add('entered');
  });
};

const handleLeave = () => {
  let dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach((dog) => {
    dog.classList.remove('entered');
  });
};

let nav = document.querySelector('.drop-down-dog-nav');
nav.addEventListener('mouseenter', handleEnter);
nav.addEventListener('mouseleave', handleLeave);
