const toggleBtn = document.querySelector(".toggleCircle");
const Body = document.querySelector("body");

const HomeLight = document.querySelector(".HomeLight");


console.log(Body);

toggleBtn.addEventListener("click", (e)=>{
    toggleBtn.classList.toggle("toggleCircle")
    toggleBtn.classList.toggle("toggleActive")

    Body.classList.toggle("light")
    Body.classList.toggle("Dark")

    HomeLight.classList.toggle("HomeLight")
    Body.classList.toggle("HomeDark")
})