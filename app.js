/*$(document).ready(function () {

  $('.navbar .dropdown-item').on('click', function (e) {
      var $el = $(this).children('.dropdown-toggle');
      var $parent = $el.offsetParent(".dropdown-menu");
      $(this).parent("li").toggleClass('open');

      if (!$parent.parent().hasClass('navbar-nav')) {
          if ($parent.hasClass('show')) {
              $parent.removeClass('show');
              $el.next().removeClass('show');
              $el.next().css({"top": -999, "left": -999});
          } else {
              $parent.parent().find('.show').removeClass('show');
              $parent.addClass('show');
              $el.next().addClass('show');
              $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
          }
          e.preventDefault();
          e.stopPropagation();
      }
  });

  $('.navbar .dropdown').on('hidden.bs.dropdown', function () {
      $(this).find('li.dropdown').removeClass('show open');
      $(this).find('ul.dropdown-menu').removeClass('show open');
  });

});
*/
/*
$(document).ready(function(){
    $('.dropdown-submenu a.dropdown-item').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });

  */

/***  Add the toggle funvtionality ***/
 const toggle = document.querySelector(".toggle");
 const menu = document.querySelector(".menu");
  
 /* Toggle mobile menu */
 function toggleMenu() {
     if (menu.classList.contains("active")) {
         menu.classList.remove("active");
          
         // adds the menu (hamburger) icon
         toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
     } else {
         menu.classList.add("active");
          
         // adds the close (x) icon
         toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
     }
 }
  


/***  Add the dropdown funvtionality ***/
 const items = document.querySelectorAll(".item");
 
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}
 
/* Event Listeners 
for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}*/

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);
   
    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
   
 
  /* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);