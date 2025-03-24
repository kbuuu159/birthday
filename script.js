const pages = [
  { img: "assets/img1.jpg", text: "You in this one?? Literally illegal levels of cuteness. How are you real? 😭💕" },
  { img: "assets/img2.jpg", text: "I swear, every picture of you makes my heart explode 💥💖" },
  { img: "assets/img3.jpg", text: "If perfection had a face, it would be YOU 🥹❤️" },
  { img: "assets/img4.jpg", text: "How did I get so lucky?? You're my favorite everything! 😍" },
  { img: "assets/img5.jpg", text: "Every time I see you, I fall in love all over again 😭💘" },
  { img: "assets/img6.jpg", text: "No matter what, you'll always be my best decision ever 💖" },
  { img: "assets/img7.jpg", text: "You're the cutest, hottest, sweetest, funniest person I know 🥰" },
  { img: "assets/img8.jpg", text: "Forever yours, forever obsessed, forever us. ❤️" }
];

let currentPage = 0;
const imgElement = document.getElementById("photo");
const textElement = document.getElementById("text");
const pageNumElement = document.getElementById("pageNum");
const continueBtn = document.getElementById("continueBtn");

function updatePage(direction) {
  if (direction === "next" && currentPage < pages.length - 1) {
    currentPage++;
    textElement.style.animation = "slideNext 0.6s ease-out";
    imgElement.style.animation = "slideNext 0.6s ease-out";
  } else if (direction === "prev" && currentPage > 0) {
    currentPage--;
    textElement.style.animation = "slidePrev 0.6s ease-out";
    imgElement.style.animation = "slidePrev 0.6s ease-out";
  } else {
    return;
  }

  setTimeout(() => {
    imgElement.src = pages[currentPage].img;
    textElement.textContent = pages[currentPage].text;
    textElement.style.animation = "";
    imgElement.style.animation = "";
    pageNumElement.textContent = `${currentPage + 1} / ${pages.length}`;
    
    if (currentPage === pages.length - 1) {
      continueBtn.style.display = "block";
    } else {
      continueBtn.style.display = "none";
    }
  }, 500);
}

function nextPage() {
  updatePage("next");
}

function prevPage() {
  updatePage("prev");
}

