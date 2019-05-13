const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// let cta_img = document.getElementById("cta-img");
// cta_img.setAttribute('src', siteContent["cta"]["img-src"])
// let cta_h1 = document.querySelector(".cta-text h1");
// cta_h1.innerHTML = siteContent["cta"]["h1"];

// let cta_button = document.querySelector(".cta-text button");
// cta_button.innerHTML = siteContent["cta"]["button"];
let nav_elments = document.querySelectorAll("header nav > a, header img");
// console.log(Object.entries(Object.entries(siteContent["nav"])));
for(let [i, [key, value]] of Object.entries(Object.entries(siteContent["nav"]))) {
  if(i == 6){
    nav_elments[i].setAttribute('src', value);
  }
  nav_elments[i].innerHTML = value;
}

let cta_elments = document.querySelectorAll(".cta .cta-text > *, .cta img");
for(let [i, [key, value]] of Object.entries(Object.entries(siteContent["cta"]))) {
  if(i == 2){
    cta_elments[i].setAttribute('src', value);
  }
  cta_elments[i].innerHTML = value;
}

let main_content_elments = document.querySelectorAll(".main-content > div > div > *, .main-content img");
console.log(main_content_elments);
for(let [i, [key, value]] of Object.entries(Object.entries(siteContent["main-content"]))) {
  if(i == 4){
    main_content_elments[i].setAttribute('src', value);
  }
  main_content_elments[i].innerHTML = value;
}

let contact_elments = document.querySelectorAll(".contact > *");
// console.log(contact_elments);
for(let [i, [key, value]] of Object.entries(Object.entries(siteContent["contact"]))) {
  contact_elments[i].innerHTML = value;
}

let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];

document.querySelectorAll("nav a").forEach(item => item.style.cssText = "color: green");

let insert_in = [["a", "sauvage"], ["a", "idea"]]

for(let [index, value] of Object.entries(insert_in))
{
  let newA = document.createElement(value[0]); // Create anchor node
  let newContent = document.createTextNode(value[1]); // Create Text node
  newA.appendChild(newContent); // Append the text node to the new element (node)
  newA.style.cssText = "color: green"; // style node before appending to nav
  document.querySelector("nav").appendChild(newA); // append new anchor node at the end of nav
  // console.log(value[0]);
}

// Add button at the top of the first section with the class of .main-content
(function addFirstButton(){
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Duplicate Section");
  button.appendChild(buttonText);

  button.addEventListener("click", duplicateMainContent)
  document.querySelector(".main-content").append(button);
})();

function duplicateMainContent(){
  // console.log(this);
  // Get button's parent (section)
  // var p = document.getElementById("para1");
// var p_prime = p.cloneNode(true);
  let original_section = this.parentElement;
  let section_cloned = original_section.cloneNode(true);
  let cloned_button = section_cloned.querySelector("button");
  cloned_button.innerHTML = "Delete section";
  cloned_button.addEventListener("click", deleteMainContent);

  let button = document.createElement("button");
  let buttonText = document.createTextNode("Duplicate Section");
  button.appendChild(buttonText);

  button.addEventListener("click", duplicateMainContent)
  section_cloned.append(button);
  original_section.parentNode.insertBefore(section_cloned, original_section.nextSibling);
}

function deleteMainContent(){
  let original_section = this.parentElement;
  original_section.remove();
}