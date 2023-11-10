import home from "./homeTab";
import menu from "./menuTab";
import contact from "./contactTab";

displayNav();

function displayNav(){

  const nav = document.getElementById("nav");
  // let content = document.getElementById("content");

  const homeTab = document.createElement("div");
    homeTab.id = "home";
    homeTab.classList.add("tab","active");
  const menuTab = document.createElement("div");
    menuTab.id = "menu";
    menuTab.classList.add("tab");
  const contactTab = document.createElement("div");
    contactTab.id = "contact";
    contactTab.classList.add("tab");

  const homeH1 = document.createElement("h1"); 
    homeH1.textContent = "Home";
  const menuH1 = document.createElement("h1"); 
    menuH1.textContent = "Menu";
  const contactH1 = document.createElement("h1"); 
    contactH1.textContent = "Contact";


  homeTab.append(homeH1);
  menuTab.append(menuH1);
  contactTab.append(contactH1);

  nav.append(homeTab,menuTab,contactTab);


  const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => {
      tab.addEventListener("click", (e) => {
        let target = e.currentTarget;
        page = target.id;

        tabs.forEach (tab => {
          tab.classList.remove('active')
        });

        target.classList.add('active')

        loadPage(page);
      });

      let page = "home";
      loadPage(page);
    });  
}

function loadPage(page){
  if (page === "home"){
    home()
  } else if (page === "menu"){
    menu()  
  } else if (page === "contact"){
    contact()
  }  
};

