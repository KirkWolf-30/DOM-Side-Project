const card = document.querySelector(".card");
console.log(card)

const cardContainer = document.querySelector(".cardContaienr");
console.log(cardContainer)

const title = document.querySelector(".title");
console.log(title)

const shoe = document.querySelector(".Shoe");
console.log(shoe)

const price = document.querySelector(".price");
console.log(price)

const labek = document.querySelector(".label");

const purchase = document.querySelector(".large");


const sizes = document.querySelectorAll(".small")
console.log(sizes)


cardContainer.addEventListener("mousemove", function(e){
    let x = (window.innerWidth / 2 - e.pageX) / 25

    let Y = (window.innerHeight / 2 - e.pageX) / 25
    // console.log(`rotateY(${Y}deg)  rotateX(${x}deg)`)
    card.style.transform = `rotateY(${-Y}deg)  rotateX(${x}deg)`;
})

cardContainer.addEventListener("mouseover" , function(e){
    card.style.transition = "none";
    shoe.style.transform = "rotateZ(30deg) translateZ(170px)";
    title.style.transform = "translateZ(150px)";
    price.style.transform = "translateZ(150px)"
    labek.style.transform = "translateZ(120px)";
    Array.from(sizes).forEach((size)=>{
        
        size.style.transform = "translateZ(120px)";
    })

    purchase.style.transform = "translateZ(100px)";
    
})

cardContainer.addEventListener("mouseout" , function(e){
    card.style.transform = `rotateY(0deg)  rotateX(0deg)`;
    card.style.transition = "all .5s ease-in-out";
    shoe.style.transform = "rotateZ(0) translateZ(0px)";

    title.style.transform = "translateZ(0)";
    price.style.transform = "translateZ(0)";
    labek.style.transform = "translateZ(0)";


    Array.from(sizes).forEach((size)=>{  
        size.style.transform = "translateZ(0px)";
    })


    purchase.style.transform = "translateZ(0)";

})