//Dice 1 
var random1= Math.floor(Math.random()*6)+1;
var diceimg="images/"+"dice"+random1+".png";
var imgc1=document.querySelectorAll("img")[0];
imgc1.setAttribute("src",diceimg);

//Dice 2
var random2=Math.floor(Math.random()*6)+1;
var diceimg1="images/"+"dice"+random2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",diceimg1);

if(random1>random2){
    document.querySelector("h1").innerHTML ="😊 BOOYAH Player 1 Wins!!!";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML ="CONGRATS!!! Player 2 Wins 😊";
}
else{
    document.querySelector("h1").innerHTML="Its a DRAW "
}

