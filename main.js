/**Start Of Show Link Button */
const showLinkButton = document.querySelector(".con");
//console.log(showLinkButton);
showLinkButton.addEventListener("click", function () {
  const links = document.querySelector(".links");
  links.classList.toggle("toggle-links");
});
/**End Of Show Link Button */

/**Start Of Main Page*/
const introPage = document.querySelector(".intro");
const showIntroPage = () => {
  introPage.classList.add("show-intro");
};
document.body.onload = setTimeout(showIntroPage, 2000);
/**End Of Main Page */

/**Start of Client Page */
const clientPage = document.querySelector(".client-to-me");
const showClientPage = () => {
  clientPage.classList.add("show-client");
};
document.body.onload = setTimeout(showClientPage, 3000);
/**End Of Client Page */

/**Start Of Top Button */
const topButton = document.querySelector("#top-btn");
//console.log(topButton);

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
/**End Of top Button */

