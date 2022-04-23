const showLinkButton = document.querySelector(".con");
const introPage = document.querySelector(".intro");
const clientPage = document.querySelector(".client-to-me");
const form = document.querySelector('form');
const topButton = document.querySelector("#top-btn");


const showIntroPage = () => {
  introPage.classList.add("show-intro");
};


const showClientPage = () => {
  clientPage.classList.add("show-client");
};


showLinkButton.addEventListener("click", function () {
  const links = document.querySelector(".links");
  links.classList.toggle("toggle-links");
});


window.onscroll = () => scrollFunction();

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

topButton.onclick = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.onload = setTimeout(showIntroPage, 2000);
window.onload = setTimeout(showClientPage, 3000);