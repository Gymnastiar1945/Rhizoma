window.addEventListener("load", () => {
  document.querySelector(".js-page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".js-page-loader").style.display = "none";
  }, 600);
});

/*-------------------------------------------------------------
slider
-------------------------------------------------------------*/
function productSlider() {
  const carouselOne = document.getElementById("carouselOne");
  if (carouselOne) {
    /* if the element exists */
    carouselOne.addEventListener("slid.bs.carousel", function () {
      const activeItem = this.querySelector(".active");
      document.querySelector(".js-product-img").src = activeItem.getAttribute("data-js-product-img");
    });
  }
}
productSlider();
/*-------------------------------------------------------------
slider video
-------------------------------------------------------------*/
// function companyPreviewVideo() {
//   const companyPreviewModal = document.querySelector(".js-company-preview-modal");
//   if (companyPreviewModal) {
//     companyPreviewModal.addEventListener("shown.bs.modal", function () {
//       this.querySelector(".js-company-preview-video").play();
//       this.querySelector(".js-company-preview-video").currenTime = 0;
//     });
//     companyPreviewModal.addEventListener("hide.bs.modal", function () {
//       this.querySelector(".js-company-preview-video").pause();
//     });
//   }
// }
// companyPreviewVideo();
/*-------------------------------------------------------------
header menu
-------------------------------------------------------------*/

// function headerMenu() {
//   const menu = document.querySelector(".js-header-menu"),
//     backdrop = document.querySelector(".js-header-backdrop"),
//     menuCollapseBreakPoint = 991;

//   menu.addEventListener("click", (event) => {
//     const { target } = event;

//     function toggleMenu() {
//       console.log("huahwu");
//     }

//     document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
//       item.addEventListener("click", toggleMenu);
//     });

//     function collapse() {
//       menu.querySelector(".active").classList.remove(".active");
//     }

//     if (target.parentelement.classList.contains(".active")) {
//       collapse();
//       return;
//     }

//     if (menu.querySelector(".active")) {
//       collapse();
//     }
//   });
// }
// headerMenu();

// function headerMenu() {
//   const menu = document.querySelector(".js-header-menu"),
//     backdrop = document.querySelector(".js-header-backdrop"),
//     menuCollapseBreakPoint = 991;

//   // const menu = document.querySelector(".js-header-menu"),
//   //   backdrop = document.querySelector(".js-header-backdrop"),
//   //   menuCollapseBreakPoint = 991;

//   function toggleMenu() {
//     menu.classList.toggle("open");
//     backdrop.classList.toggle("active");
//     document.body.classList.toggle("overflow-hiden");
//   }

//   document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
//     item.addEventListener("click", toggleMenu);
//   });
//   backdrop.addEventListener("click", toggleMenu);
// }

// function collapse() {
//   menu.querySelector(".active .js-sub-menu").removeAttribute("style");
//   menu.querySelector(".active").classList.remove("active");
// }

// menu.addEventListener("click", (event) => {
//   const { target } = event;

//   if (target.classList.contains("js-toggle-sub-menu") && window.innerWidth <= menuCollapseBreakPoint) {
//     // prevent default anchor click behavior
//     event.preventDefault();

//     //collapse the other expanded menu-item if exists
//     if (menu.querySelector(".active")) {
//       collapse();
//     }

//     // expand new menu-item
//     target.parentElement.classList.add(".active");
//     target.nextElementSibling.style.maxHeight = target.nextElementSibling.style.scrollHeight + "px";
//   }
// });

// headerMenu();
function headerMenu() {
  const menu = document.querySelector(".js-header-menu"),
    backdrop = document.querySelector(".js-header-backdrop"),
    menuCollapseBreakPoint = 991;

  function toggleMenu() {
    menu.classList.toggle("open");
    backdrop.classList.toggle("active");
    document.body.classList.toggle("overflow-hiden");
  }

  document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });
  backdrop.addEventListener("click", toggleMenu);

  window.addEventListener("resize", function () {
    if (this.innerWidth > menuCollapseBreakPoint && menu.classList.contains("open")) {
      toggleMenu();
    }
  });
}
headerMenu();

/*-------------------------------------------------------------
slider img
-------------------------------------------------------------*/
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById("gallery-modal"));
    myModal.show();
  }
});

/*-------------------------------------------------------------
Style Switcher
-------------------------------------------------------------*/
function styleSwitcherToggle() {
  const styleSwitcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

  styleSwitcherToggler.addEventListener("click", function () {
    styleSwitcher.classList.toggle("open");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-cog");
  });
}
styleSwitcherToggle();
/*-------------------------------------------------------------
theme colors
-------------------------------------------------------------*/
function themeColors() {
  const colorStyle = document.querySelector(".js-color-style"),
    themeColorsContainer = document.querySelector(".js-theme-colors");

  themeColorsContainer.addEventListener("click", ({ target }) => {
    if (target.classList.contains("js-theme-color-item")) {
      localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
      setColor();
    }
  });

  function setColor() {
    let path = colorStyle.getAttribute("href").split("/");
    path = path.slice(0, path.length - 1);
    colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

    if (document.querySelector(".js-theme-color-item.active")) {
      document.querySelector(".js-theme-color-item.active").classList.remove("active");
    }
    document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
  }
  if (localStorage.getItem("color") !== null) {
    setColor();
  } else {
    const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
    document.querySelector("[data-js-theme-color=" + defaultColor + "]").classList.add("active");
  }
}
themeColors();
/* theme light & dark*/
function themeLightDark() {
  const darkModekCheckbox = document.querySelector(".js-dark-mode");

  darkModekCheckbox.addEventListener("click", function () {
    if (this.checked) {
      localStorage.setItem("theme-dark", "true");
    } else {
      localStorage.setItem("theme-dark", "false");
    }
    themeMode();
  });
  function themeMode() {
    if (localStorage.getItem("theme-dark") == "false") {
      document.body.classList.remove("t-dark");
    } else {
      document.body.classList.add("t-dark");
    }
  }
  if (localStorage.getItem("theme-dark") !== null) {
    themeMode();
  }
  if (document.body.classList.contains("t-dark")) {
    darkModekCheckbox.checked = true;
  }
}
themeLightDark();

/*theme glass effect*/
function themeGlassEfect() {
  const glassEfectCheckbox = document.querySelector(".js-glass-effect"),
    glassStyle = document.querySelector(".js-glass-style");

  glassEfectCheckbox.addEventListener("click", function () {
    if (this.checked) {
      localStorage.setItem("glass-effect", "true");
    } else {
      localStorage.setItem("glass-effect", "false");
    }
    glass();
  });

  function glass() {
    if (localStorage.getItem("glass-effect") === "true") {
      glassStyle.removeAttribute("disabled");
    } else {
      glassStyle.disabled = true;
    }
  }
  if (localStorage.getItem("glass-effect") !== null) {
    glass();
  }
  if (!glassStyle.hasAttribute("disabled")) {
    glassEfectCheckbox.checked = true;
  }
}
themeGlassEfect();
/*scroll up*/

const scrollUpButton = document.querySelector(".js-scroll-up");

scrollUpButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
