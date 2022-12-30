// A json file containing all the objects to show
const characters = [
  {
    id: 1,
    name: "Madara Uchiha",
    title: "ghost of the uchiha",
    village: "The hidden leaf",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32b8f7d9-0d6c-4e2f-b737-eea02c841b00/deo8pg7-d9539697-f5a8-4e09-a5ff-e9b73f829512.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyYjhmN2Q5LTBkNmMtNGUyZi1iNzM3LWVlYTAyYzg0MWIwMFwvZGVvOHBnNy1kOTUzOTY5Ny1mNWE4LTRlMDktYTVmZi1lOWI3M2Y4Mjk1MTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1Grgns0aCw7M8tX6Yq40-dPpxMvy5Ccp3O1w4suLv8U",
    line: "Wake up to reality!",
  },
  {
    id: 2,
    name: "Jiraya Ogata",
    title: "The pervy sage",
    village: "The hidden leaf",
    image:
      "https://i.pinimg.com/originals/1a/f9/47/1af947818b494921b83a251b49328f4f.png",
    line: "A Ninjas life is not measured by how they live but what they manage to accomplish before they die.",
  },
  {
    id: 3,
    name: "Sasori",
    title: "Sasori of the red sand",
    village: "The hidden sand",
    image: "https://i.ytimg.com/vi/5Yeg0Hr84pk/maxresdefault.jpg",
    line: "Fine art is something wonderful thats left long into the future ... eternal beauty.",
  },
  {
    id: 4,
    name: "Kisame Hoshigaki",
    title: "Tailed Beast without a tail",
    village: "The hidden mist",
    image:
      "https://staticc.sportskeeda.com/editor/2022/07/c02d6-16589157875583.png",
    line: "Impressive! is what I would normally say.",
  },
  {
    id: 5,
    name: "Ohnoki",
    title: "The fence sitter",
    village: "The hidden stone",
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-eed4223ee1c20097a8d6234538218171-pjlq",
    line: "Never give up without even trying",
  },
  {
    id: 6,
    name: "Hidan",
    title: "The pervy sage",
    village: "The hidden stone",
    image:
      "https://sportshub.cbsistatic.com/i/2021/03/17/6b7b5c40-44d5-4423-b209-021a16de60e2/boruto-naruto-hidan-1174517.jpg",
    line: "Lets savour the utmost of suffering",
  },
];

// Get all the target elements
const prev = document.querySelector("#prev");
const next = document.querySelector("#nxt");
const rand = document.querySelector("#rand");

//get all the places change the text
const nameo = document.querySelector("#name");
const title = document.querySelector("#title");
const village = document.querySelector("#village");
const quote = document.querySelector("#quote");
const image = document.querySelector("#image");

//Set a default value for page loading up
let currentValue = 0;

//declare a function to switch the values
function switchVals(currentVal) {
  newVal = characters[currentVal];
  nameo.innerText = newVal["name"];
  title.innerText = newVal["title"];
  village.innerText = newVal["village"];
  quote.innerText = newVal["line"];
  image.src = newVal["image"];
}

//event handlers to previous and next buttons
prev.addEventListener("click", function () {
  currentValue--;
  if (currentValue < 0) {
    currentValue = characters.length - 1;
  }
  switchVals(currentValue);
});

next.addEventListener("click", function () {
  currentValue++;
  if (currentValue > characters.length - 1) {
    currentValue = 0;
  }
  switchVals(currentValue);
});

//Load the first value as the window is loaded
window.addEventListener("DOMContentLoaded", function () {
  switchVals(currentValue);
});

//add the random functionality
rand.addEventListener("click", function () {
  randVal = Math.floor(Math.random() * characters.length);
  switchVals(randVal);
});
