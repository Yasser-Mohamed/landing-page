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
const frag = document.createDocumentFragment()

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


    allSections.forEach(section =>{
        var secID = section.getAttribute("id");
        var secData =section.getAttribute("data-nav");
        const liTem = document.createElement("li")
        const a = document.createElement("a");
        a.classList.add("menu__link");
        a.href = `#${secID}`;
        a.textContent = secData;
        a.addEventListener("click" , ev=>{
            ev.preventDefault();
            section.scrollIntoView({
                behavior : "smooth"
            });
        });
        liTem.appendChild(a);
        frag.appendChild(liTem);
    })
    navList.appendChild(frag);
    
// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", scrolling);
const links_item = document.querySelectorAll("a.menu__link") 
   function scrolling(){
    allSections.forEach(section=>{
        const secHighy = section.getBoundingClientRect().top;
        const secTit =section.getAttribute("data-nav");
        if(secHighy > 0 && secHighy < 250) {
            section.classList.add("your-active-class");
            links_item.forEach(link=>{
                if(link.textContent === secTit) {
                    link.classList.add("activation")
                }
                else {
                    link.classList.remove("activation")
                }
            })
        }
        else {
            section.classList.remove("your-active-class");
        }
       })
   }



// Scroll to anchor ID using scrollTO event






/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
// Set sections as active
// var arr =["home","section1","section2","section3"];

