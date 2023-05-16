const whatCareer = document.getElementById("career");
const phrases = ["Pharmacobiology engineer", "Front-End Developer"];
const waitTime = 100;
let curPhraseIndex = 0;

let articles = document.querySelectorAll("article");
let navLinks = document.querySelectorAll("header nav a");

/* Function change my career */

//typew = career
function changeCareer(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const loop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      whatCareer.innerText = curWord.substring(0, i + 1);
      await changeCareer(waitTime);
    }
    await changeCareer(1000);

    for (let i = curWord.length; i > 0; i--) {
      whatCareer.innerText = curWord.substring(0, i - 1);
      await changeCareer(waitTime);
    }
    await changeCareer(1000);

    if (curPhraseIndex == phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};
loop();

/* Function for navigation */
window.onscroll = () => {
  articles.forEach((art) => {
    let top = window.scrollY;
    let offset = art.offsetTop - 250;
    let height = art.offsetHeight;
    let id = art.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};


