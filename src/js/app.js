$(function () {
  var mainNavigation = `<div class="  flex  justify-between items-center">
    <div><a href="./"><img src="./images/Logo.svg" alt=""></a></div>
    <ul class="flex text-gray-on-black text-base gap-x-5 font-light">
        <li><a href="./work.html">Work</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./contact.html">Contact</a></li>
    </ul>
</div>`;

  var footer = `  <div class="bg-primary-dark">
  <div class="bg-primary-dark">
  <div class="py-8 space-y-6">

      <div class="flex justify-center items-center gap-x-2 text-gray-on-bg text-sm item-middle">
          <button type="button"
              class="rounded-md bg-primary-dark px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-white/5">Back
              to the top</button>
          •
          <a href="./work.html" type="button"
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
