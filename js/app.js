/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuilder = ()=>{
    let navUI = "";
    allSections.forEach(section =>{
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    })
    navList.innerHTML= navUI;
}
navBuilder();

// Add class 'active' to section when near top of viewport
const offset = (section)=>{
    return Math.floor(section.getBoundingClientRect().top);
}
const removeActive = (section) =>{
    section.classList.remove("your-active-class");
};
const addActive = (condition, section)=>{
    if(condition){
    section.classList.add("your-active-class");
    }
};
const sectionActivation =()=>{
    allSections.forEach(section =>{
        const elementOffSet =offset(section);
        inViewPort =() => elementOffSet <150 && elementOffSet >= -150;
        removeActive(section);
        addActive(inViewPort(),section);
    });
};
window.addEventListener("scroll",sectionActivation);
// Scroll to anchor ID using scrollTO event
const scrolling =()=>{
    const links = document.querySelectorAll("navbar__list a");
    links.forEach(link=>{
        link.addEventListener("click",()=>{
            for(i = 0 ; i< allSections ; i++){
                allSections[i].addEventListener("click",sectionScroll(link));

            }
        });
    });
};
scrolling();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
// Set sections as active
// var arr =["home","section1","section2","section3"];

