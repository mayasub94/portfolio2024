$(function () {
  var mainNavigation = `<div class="  flex  justify-between">
    <div><a href="./"><img src="./images/Logo.svg" alt=""></a></div>
    <ul class="flex text-gray-on-black text-base gap-x-5 font-light">
        <li><a href="./work.html">Work</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./contact.html">Contact</a></li>
    </ul>
</div>`;

  var footer = ` <div class="bg-primary-dark">
<div class="py-8">
    <div class="flex text-gray-on-black justify-center items-start gap-x-8">
        <div>Coded with ❤️️</div>
        <div>© 2024 All rights reserved</div>
    </div>
</div>
</div>`;

  $("#footerDiv").html(footer);

  $("#mainNav").html(mainNavigation);
});
