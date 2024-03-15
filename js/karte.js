var plus = $(".plus");
var minus = $(".minus");
var kolicinaText = $(".kolicina");
var kolicina = 1;
var cenaText = $(".cena");
var button = $("button");
var prizeOdr = null;
var prizeDeca = null;
var prizePorodica = null;
plus.click(increasing);
minus.click(decreasing);

function increasing(){
    kolicina++;
    kolicinaText.text(
        `${kolicina}`
    );
    cena()
}

function decreasing(){
    if(kolicina === 1){
        alert("Minimalna broj karte jeste jedna karta");
        return;
    }
    kolicina--;
    kolicinaText.text(
        `${kolicina}`
    );
    cena()
}

var btnOdr = $("#btnOdr");
btnOdr.click(cenaOdr);
function cenaOdr(){
    prizeOdr = 400;
    prizeDeca = null;
    prizePorodica = null;
    cena()
}

var btnDeca = $("#btnDeca");
btnDeca.click(cenaDeca);
function cenaDeca(){
    console.log("radi")
    prizeOdr = null;
    prizePorodica = null;
    prizeDeca = 259;
    cena()
}
var btnPorodica = $("#btnPorodica");
btnPorodica.click(cenaPorodica);
function cenaPorodica(){
    console.log("radu")
    prizeOdr = null;
    prizePorodica = 1000;
    prizeDeca = null;
    cena()
}


function cena(){
    if(prizeOdr !== null){
        var rez = kolicina * prizeOdr;
        cenaText.text(
            `${rez}`
        )
    }
    else if(prizeDeca !== null){
        var rez = kolicina * prizeDeca;
        cenaText.text(
            `${rez}`
        )
    }
    else if(prizePorodica !== null){
        console.log(prizePorodica);
        var rez = kolicina * prizePorodica;
        cenaText.text(
            `${rez}`
        )
    }
}
/* Poruka o uspešnom poručivanju */
var btnBuyDeca = $("#poruciDeca");
btnBuyDeca.click(buyDeca);
function buyDeca(){
    var modalBody = $(".modal-body");
    modalBody.html(`<p>Uspešno ste poručili ${kolicina} karata po ceni od ${prizeDeca} dinara</p>`);
    modalBody.css("background", "#d4edda")
    modalBody.css("color", "#155724")
}

var btnBuyOdr = $("#poruciOdr");
btnBuyOdr.click(buyOdr);
function buyOdr(){
    var modalBody = $(".modal-body");
    modalBody.html(`<p>Uspešno ste poručili ${kolicina} karata po ceni od ${prizeOdr} dinara</p>`);
    modalBody.css("background", "#d4edda")
    modalBody.css("color", "#155724")
}

var btnBuyPorodica = $("#poruciPorodica");
btnBuyPorodica.click(buyPorodica);
function buyPorodica(){
    var modalBody = $(".modal-body");
    modalBody.html(`<p>Uspešno ste poručili ${kolicina} karata po ceni od ${prizePorodica} dinara</p>`);
    modalBody.css("background", "#d4edda")
    modalBody.css("color", "#155724")
}
