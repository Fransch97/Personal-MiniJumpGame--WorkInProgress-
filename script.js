console.log("let's make a game");
const ostacolo = document.querySelector('.ostacolo');
console.log(ostacolo);
const giocatore = document.querySelector('.giocatore');
let position_Ost_Right = 0;
const btn = document.querySelector('button')
console.log(btn)
let bottom = 0;
console.log(bottom)
let score = 0

const container = document.querySelector('.container')

alert("Work in progress-> mancano altri ostacoli e per adesso funziona su un monitor a 32 pollici da controllare modifiche per")


const play = setInterval(()=>{
    console.log(ostacolo)
    position_Ost_Right++
    console.log(position_Ost_Right)
    ostacolo.style.cssText = `right: ${position_Ost_Right}%; transition: 0.1s`;
    if(position_Ost_Right === 120){
        position_Ost_Right=0;
        ostacolo.style.cssText = `right: ${-100}%; `
    }
    if(position_Ost_Right>86 && position_Ost_Right<90 && bottom === 0){
        clearInterval(play);
        document.querySelector('h1').innerHTML = `GAME OVER <br> Youre score ${score/3}`
    }
    if(position_Ost_Right>86 && position_Ost_Right<90 && !(bottom === 0)){
        score+=Math.ceil(0.5)
    }

 },30)



btn.addEventListener('click', function(){
    bottom = "10vh";
    giocatore.style.cssText = `bottom: ${bottom}; transition: 0.3s`;
    setTimeout(()=>{
        bottom = 0;

        giocatore.style.cssText = `bottom:  ${bottom}; transition: 0.3s`;
        
        }, 400)
})