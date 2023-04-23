const start = document.querySelector('.btn')
console.log(start);

let hour = document.querySelector('.hrs')


let Minute = document.querySelector('.mins')
console.log(Minute)

let second = document.querySelector('.sec')
console.log(second);

let setTime = 0.1;
let time = setTime*60
let ID

start.addEventListener("click" , function(e){

     function countDown(){

      let mins = Math.floor(time/60);

      let sec = time%60;

      time--

      if(mins<10){
        Minute.textContent =  "0"+mins;
      }
      else{
        Minute.textContent = mins;
      }

      if(sec<10){
        second.textContent =  "0"+sec;
      }
      else{
        second.textContent = sec;
      }


      console.log(time)

      if(time == -1){
      clearInterval(ID)
      start.classList.add("off")
      }
    }
    
    ID= setInterval(countDown, 1000);



})




// let time = 0.2;

// console.log(`Total time in mins = ${time} Mins`)

// let hours = Math.floor(time/60)

// console.log( `Hours = ${hours} hrs`);

// let Mins = Math.floor(time%60)

// console.log( `Minutes = ${Mins} Mins`)

// let sec = 0;


// console.log(`Seconds = ${sec} Seconds`)





