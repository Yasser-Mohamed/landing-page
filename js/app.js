const allSections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");
const frag = document.createDocumentFragment();
// build the nav
allSections.forEach(section =>{
   const secID = section.getAttribute("id");
   const secData =section.getAttribute("data-nav");
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
        if (secHighy > 0 && secHighy < 250) {
            section.classList.add("your-active-class");
            links_item.forEach(link=>{
                if (link.textContent === secTit) {
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
