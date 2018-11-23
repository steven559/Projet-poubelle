var verte = [

    "bouteilles de vin",
    "pots de confiture",
    "bouteilles en verre",
    "bouteilles en verre",
    "bouteilles d'huile",



];

var jaune = [
    "bouteille plastique",
    "bouteilles de lait",
    "flacons plastiques ",
    "bidons plastiques ",
    "boîtes en carton",
    "boites de conserve en fer",
    "désodorisants",
    "mousses à raser",

];

var bleue = [
    " journaux",
    " magazines",
    "prospectus",
    "feuilles de papier",
    "emballages papier",
    " les sacs en papier",
    "les enveloppes",

];
var marron = [
    "restes de repas",
    "couches-culottes",
    "pots de yaourts",

];
var fau=document.getElementById("faux");
var text=document.getElementById("vrais");
var reponse=document.getElementById("reponse");
var random = document.getElementById("block");
var vrai = 0;
var faux = 0;
var essaie=10;
var randJ = jaune[Math.floor(Math.random() * jaune.length)];

var rand = verte[Math.floor(Math.random() * verte.length)];

var randM = marron[Math.floor(Math.random() * marron.length)];

var randB = bleue[Math.floor(Math.random() * bleue.length)];

var rando = [Math.floor(Math.random() * 4)];
var newgame=document.getElementById("but6");
function demarre() {
    randJ = jaune[Math.floor(Math.random() * jaune.length)];
    rand = verte[Math.floor(Math.random() * verte.length)];
    randM = marron[Math.floor(Math.random() * marron.length)];
    randB = bleue[Math.floor(Math.random() * bleue.length)];
    document.getElementById("but5").disabled = true;
    document.getElementById("stat").style.visibility="hidden";
    rando = [Math.floor(Math.random() * 4)];
    document.getElementById("block").style.visibility="visible";
    if (rando == 0) {
        document.getElementById("block").innerHTML = rand;

    }
    if (rando == 1) {
        document.getElementById("block").innerHTML = randJ;

    }
    if (rando == 2) {
        document.getElementById("block").innerHTML = randM;

    }
    if (rando == 3) {
        document.getElementById("block").innerHTML = randB;

    }
    if(essaie<=0){
        document.getElementById("stat").style.visibility="visible";
        document.getElementById("jeux").style.visibility="hidden";
        document.getElementById("but6").disabled = false;
        document.getElementById("block").style.visibility="hidden";
    }


    console.log(essaie);
}

demarre();
document.getElementById("but6").disabled = true;
var but = document.getElementById("but");

var but2 = document.getElementById("but2");

var but3 = document.getElementById("but3");

var but4 = document.getElementById("but4");

var jaun = document.getElementById("jaune");

var vers = document.getElementById("verte");

var marro = document.getElementById("marron");

var bleu = document.getElementById("bleue");

var but5 = document.getElementById("but5");

but.addEventListener("click", function () {


    document.getElementById('block').style.marginTop = 380 + "px";

    document.getElementById('block').style.marginLeft = 55 + "px";

    document.getElementById("but2").disabled = true;

    document.getElementById("but").disabled = true;

    document.getElementById("but3").disabled = true;

    document.getElementById("but4").disabled = true;
    document.getElementById("but5").disabled = false;
    setTimeout(disparait, 1000);
    if (rando == 0) {


        vrai++;

        console.log(vrai);
        essaie--;
        text.innerHTML="tu a "+" "+vrai+" "+ "bonne réponse";
    }
    if(rando==1){
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ randJ+" "+"etais dans la poubelle jaune"+"<br>";
        faux++;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
        essaie--;
    }
   if(rando==2) {
       reponse.innerHTML+="<br>"+"la reponse pour"+" "+ randM+" "+"etais dans la poubelle marron"+"<br>";
        faux++;
       essaie--;
       fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
    }
    if(rando==3){
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ randB+" "+"etais dans la poubelle bleue"+"<br>";
        faux++;
        essaie--;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
    }
     document.getElementById("but5").disabled = true;
    setTimeout(dede,1500);


});

but2.addEventListener("click", function () {
    document.getElementById("but2").disabled = true;
    document.getElementById("but").disabled = true;
    document.getElementById("but3").disabled = true;
    document.getElementById("but4").disabled = true;
    document.getElementById("but5").disabled = false;
    window.document.getElementById('block').style.marginTop = 360 + "px";
    window.document.getElementById('block').style.marginLeft = 285 + "px";
    setTimeout(disparait, 1000);
    if (rando == 1) {


        vrai++;
        essaie--;
        text.innerHTML="tu a "+" "+vrai+" "+ "bonne réponse";
    }
    if(rando==2) {
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ randM+" "+"etais dans la poubelle marron"+"<br>";
        faux++;
        essaie--;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
    }
    if(rando==3){
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ randB+" "+"etais dans la poubelle bleue"+"<br>";
        faux++;
        essaie--;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
    }
    if(rando==0){
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ rand+" "+"etais dans la poubelle verte"+"<br>";
        faux++;
        essaie--;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";

    }
    document.getElementById("but5").disabled = true;
    setTimeout(dede,2000);
});
but3.addEventListener("click", function () {
    document.getElementById("but2").disabled = true;
    document.getElementById("but").disabled = true;
    document.getElementById("but3").disabled = true;
    document.getElementById("but4").disabled = true;
    document.getElementById("but5").disabled = false;
    window.document.getElementById('block').style.marginTop = 300 + "px";
    window.document.getElementById('block').style.marginLeft = 530 + "px";
    setTimeout(disparait, 1500);
    if (rando == 2) {

        essaie--;
        vrai++;
        text.innerHTML="tu a "+" "+vrai+" "+ "bonne réponse";
    }

    if(rando==3){
        essaie--;
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ randB+" "+"etais dans la poubelle bleue"+"<br>";
        faux++;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
    }
    if(rando==0){
        essaie--;
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ rand+" "+"etais dans la poubelle verte"+"<br>";
        faux++;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
    }
    if(rando==1){
        essaie--;
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ randJ+" "+"etais dans la poubelle jaune"+"<br>";
        faux++;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";

    }
    document.getElementById("but5").disabled = true;
    setTimeout(dede,1500);


});
but4.addEventListener("click", function () {
    document.getElementById("but2").disabled = true;
    document.getElementById("but").disabled = true;
    document.getElementById("but3").disabled = true;
    document.getElementById("but4").disabled = true;
    document.getElementById("but5").disabled = false;
    window.document.getElementById('block').style.marginTop = 330 + "px";
    window.document.getElementById('block').style.marginLeft = 750 + "px";
    setTimeout(disparait, 1000);
    if (rando == 3) {

        essaie--;
        vrai++;
        text.innerHTML="tu a "+" "+vrai+" "+ "bonne réponse";
    }
    if(rando==0){
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ rand+" "+"etais dans la poubelle verte"+"<br>";
        faux++;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
        essaie--;
    }
    if(rando==1){
        reponse.innerHTML+="<br>"+"la reponse pour"+" "+ randJ+" "+"etais dans la poubelle jaune"+"<br>";
        faux++;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
        essaie--;
    }
    if(rando==2) {
        reponse.innerHTML +="<br>"+ "la reponse pour" + " " + randM + " " + "etais dans la poubelle marron" + "<br>";
        faux++;
        fau.innerHTML ="tu a "+" "+ faux+" " +"mauvaise répone";
        essaie--;
    }
    document.getElementById("but5").disabled = true;
    setTimeout(dede,1500);
});
but5.addEventListener("click", function () {
    document.getElementById("block").style.visibility = "visible";

    document.getElementById("but2").disabled = false;
    document.getElementById("but").disabled = false;
    document.getElementById("but3").disabled = false;
    document.getElementById("but4").disabled = false;
    document.getElementById("but5").disabled = true;

    clearTimeout(disparait);
    demarre();

    window.document.getElementById('block').style.marginTop = 100 + "px";
    window.document.getElementById('block').style.marginLeft = 180 + "px";


});


function disparait() {
    document.getElementById("block").style.visibility = "hidden";
}

newgame.addEventListener("click", function () {
    vrai = 0;
    faux = 0;
  essaie=10;
    demarre();
    document.getElementById("jeux").style.visibility="visible";

});
function dede(){
    document.getElementById("but5").disabled = false;


}

