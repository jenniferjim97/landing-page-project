
// Global Variables
const navHeader = document.querySelector('.page__header')
const nav = document.getElementsByClassName('navbar__menu');
const ul = document.getElementById('navbar__list');
const divSections = document.getElementsByClassName('landing_page');
const sectionTags = document.getElementsByTagName('section');
//



// building the navBar


for(let i = 0; i<divSections.length; i++) {
  
  const sectionId = sectionTags[i].id
  const sectionAttributes = divSections[i].childNodes[1].textContent.trim()
  const li = document.createElement('li') ;
  const a = document.createElement('a');
  
  
  
  a.innerHTML = `${sectionAttributes}`
  a.href=`#${sectionId}`
  
  
  li.appendChild(a);
  ul.appendChild(li); 
}

//


// Scroll to anchor ID using scrollTO event
const navBarLinks = document.querySelectorAll('li a')
navBarLinks.forEach(element => element.addEventListener('click', navBarscroll))

function navBarscroll(event){
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")
  // console.log(targetId)
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: "smooth"
  })

}