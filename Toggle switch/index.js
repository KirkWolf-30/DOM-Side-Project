const toggleBtn = document.querySelector(".toggleBtn");
console.log(toggleBtn)

const bgContainer = document.querySelector(".bgContainer")
console.log(bgContainer)

toggleBtn.addEventListener("click", function(e){
    toggleBtn.classList.toggle("active");
    bgContainer.classList.toggle("bgLight")
})