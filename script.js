let red = document.getElementById("red");
let violet = document.getElementById("violet");
let yellow = document.getElementById("yellow");
let game1 = document.querySelector(".game1");
let game2 = document.querySelector(".game2");
let BtnRules = document.getElementById("rules");
let rules = document.querySelector(".rules");
let close = document.getElementById("close");
let content = document.querySelector(".contentt");
let picked = document.querySelectorAll(".picked");
let plus = document.querySelector(".plus");
let WinLose = document.getElementById("WinLose");
let score = document.getElementById("score");
let play = document.querySelector(".play");
let playAgain = document.getElementById("playAgain")
let boch = document.querySelector(".boch");
let first = document.querySelector(".first")
let game = true ;
let mat = [red,violet,yellow] ;
let matt = ["red","violet","yellow"];
let choix ;
let house ;
let win;
let result = 0 ;
let retur;
let contre;
BtnRules.onclick = function() {
   rules.style.visibility ="visible";
   content.style.opacity = "0.2";
   content.style.background = "rgba(0,0,0,0.1)"
   rules.style.top ="30%"
   BtnRules.style.visibility ="hidden";
}
close.onclick = function() {
   rules.style.visibility ="hidden";
   content.style.opacity ="1";
   content.style.background = "none";
   rules.style.top ="-40%"
   BtnRules.style.visibility ="visible";
}

 for(let i=0 ; i<3 ; i++){
   mat[i].onclick = function() {
      if(game){
         game = false ;
       choix = mat[i].id ;
       retur = mat[i];
       setTimeout(function(){
         game1.style.display="none";
       },400);
       game1.style.opacity ="0";
       setTimeout(function(){
         game2.style.display="flex";
       },500);
       game2.style.opacity ="1";
       let rotate = setInterval(() => {
          retur.style.transform = "rotate(360deg)";
       }, 100);
         setTimeout(()=> {
            clearInterval(rotate);
            retur.style.transform = "rotate(0deg)";
         },700);
         picked[0].appendChild(retur);
         
       
       
       
       
       verifier();
        
       let tour = setInterval(function(){
            picked[1].innerHTML = `<h2>the house picked</h2>`;
            picked[1].innerHTML += mat[0].outerHTML;
            setTimeout(function(){
               picked[1].innerHTML = `<h2>the house picked</h2>`;
               picked[1].innerHTML += mat[1].outerHTML;
            },100);
            setTimeout(function(){
               picked[1].innerHTML = `<h2>the house picked</h2>`;
               picked[1].innerHTML += mat[2].outerHTML;
            },200);
    }, 400);
       setTimeout(function(){
         clearInterval(tour);
       },1450);
       setTimeout(function(){
         
       for(let j=0 ; j<3 ; j++){
         if(house === mat[j].id){
            picked[1].innerHTML = `<h2>the house picked</h2>`;
            contre = mat[j];
            picked[1].innerHTML += mat[j].outerHTML ;
            
         }
      } },1650);
       winner(choix,house);
       setTimeout(function(){
          play.style.visibility = "visible";
          play.style.opacity ="1";
          WinLose.style.fontSize = "35px";
          WinLose.style.color = "red";
         if( choix === win ){
            retur.classList.add("winner");
            WinLose.innerHTML = "you win";
            result += 1 ;
            score.innerHTML = `${result}`;
         }
         else{
            contre.classList.add("winner");
            picked[1].innerHTML = `<h2>the house picked</h2>`;
            picked[1].innerHTML += contre.outerHTML ;
            WinLose.innerHTML = "you lose";
            result -= 1 ;
            score.innerHTML = `${result}`;
         }
       },1650);
       
   }
}
 }

 function getRandomElement(array) {
   const index = Math.floor(Math.random() * array.length);
   return array[index];
}

 function verifier() {
   house = getRandomElement(matt) ;
   while(house === choix){
      house = getRandomElement(matt);
   }

 }

 function winner(one,two) {
   
    if( one === "red" && two === "yellow" || one === "yellow" && two === "violet" || one === "violet" && two === "yellow"){
       win = one ;
    }
    if( one === "yellow" && two === "red" || one === "violet" && two === "yellow" || one === "red" && two === "violet" ){
      win = two ;
   }
   
 }

 playAgain.onclick = function() {
   setTimeout(function(){
      game2.style.display="none";
    },500);
    game2.style.opacity ="0";
    setTimeout(function(){
      game1.style.display="flex";
      game1.style.opacity ="1";
    },600);
    
      if(retur === mat[0] ){
         retur.classList.remove("winner");
         game1.appendChild(retur);
      }
      if( retur === mat[1] ){
         retur.classList.remove("winner");
         first.removeChild(mat[2]);
         first.appendChild(retur);
         first.appendChild(mat[2]);
      }
      if (retur === mat[2]){ first.appendChild(retur); retur.classList.remove("winner");
      }
      picked[1].innerHTML = `<h2>the house picked</h2>
                          <div class="circle2 plus" ></div>`;
                          play.style.visibility = "visible";
          play.style.opacity ="0";
          WinLose.style.fontSize = "63px";
          WinLose.style.color = "white";
    game = true ;
    contre.classList.remove("winner");
 }

 