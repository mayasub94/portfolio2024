$(function () {
  var mainNavigation = `<div class="  flex md:flex-row flex-col gap-3   justify-between items-center">
    <div><a href="./"><img src="./images/Logo.svg" alt=""></a></div>
    <ul class="flex text-gray-on-black text-base gap-x-5 font-light menu">
        <li class="menu-work"><a href="./index.html#work">Work</a></li>
        <li class="menu-about"><a href="./about.html">About</a></li>
        <li class="menu-contact"><a href="./contact.html">Contact</a></li>
        <li class="t"><a href="Maya_Subramanian-Resume.pdf" target="_blank">Resume</a></li>
    </ul>
</div>`;

  var footer = `  <div class="bg-primary-dark">
  <div class="bg-primary-dark">
  <div class="py-8 space-y-6">

      <div class="flex justify-center items-center gap-x-2 text-gray-on-bg text-sm item-middle">
          <button type="button" id="scrollToTopBtn"
              class="rounded-md bg-primary-dark px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-white/5">Back
              to the top</button>
          •
          <a href="./index.html#work" type="button"
              class="rounded-md bg-primary-dark px-2.5 py-1.5 text-sm  text-white shadow-sm hover:bg-white/5">Work</a>
          •
          <a href="./about.html" type="button"
              class="rounded-md bg-primary-dark px-2.5 py-1.5 text-sm  text-white shadow-sm hover:bg-white/5">About</a>
          •
          <a href="./contact.html" type="button"
              class="rounded-md bg-primary-dark px-2.5 py-1.5 text-sm  text-white shadow-sm hover:bg-white/5">Contact</a>

      </div>

      <div class="flex text-sm text-gray-on-black justify-center items-start gap-x-2">
          <div> Copyright © 2024 Maya Subramanian.</div>
          <div>Coded with ❤️️</div>

      </div>
  </div>
</div>
`;

  $("#footerDiv").html(footer);

  $("#mainNav").html(mainNavigation);
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("scrollToTopBtn")
    .addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const menuMap = {
    "work.html": "menu-work",
    "about.html": "menu-about",
    "contact.html": "menu-contact",
  };
  const activeMenuClass = menuMap[currentPage];
  if (activeMenuClass) {
    document.querySelector("." + activeMenuClass).classList.add("active");
  }
});
