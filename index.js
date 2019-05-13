// using a data attribute means that we can see that the element
// has a JS script attached to it and it prevents CSS Mutations
const ul = document.querySelector("[data-js=list]");
const clickCatcher = document.querySelector("[data-js=sidebar-click-catcher]");
const openButton = document.querySelector("[data-js=open-sidebar]");
const themeButton = document.querySelector("[data-js=theme-button]");
const sidebar = document.querySelector("[data-js=sidebar]");

// if element is not there the rest of the script will still work
openButton && //<--This is Guarding
  openButton.addEventListener("click", e => {
    e.preventDefault();
    sidebar.classList.toggle("sidebar--open");
  });
// if element is not there the rest of the script will still work
// Click Catcher is necesssary if we want to catch a user clicking outside of the narbar list area
clickCatcher && //<--This is Guarding
  clickCatcher.addEventListener("click", e => {
    e.preventDefault();
    sidebar.classList.toggle("sidebar--open");
  });
// if element is not there the rest of the script will still work
themeButton && //<--This is Guarding
  themeButton.addEventListener("click", e => {
    e.preventDefault();
    document.body.classList.toggle("body--themed");
  });

if (!ul) throw new Error("Could not find [data-js=list]");
if (!clickCatcher) throw new Error("Could not find [data-js=sidebar-click-catcher]");
if (!openButton) throw new Error("Could not find [data-js=open-sidebar]");
if (!themeButton) throw new Error("Could not find [data-js=theme-button]");
if (!sidebar) throw new Error("Could not find [data-js=sidebar]");
