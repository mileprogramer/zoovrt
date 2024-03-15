/* Ligth and Dark theme */
var input = $("#input");
var label = $(".label");
var img = $(".label-span-img");
var wrapper = $(".wrapper");
var bodyQuiz = $(".hero-quiz");
input.click("click", Changetheme)
function Changetheme(){
    if(input.is(":checked")){
        img.attr('src', 'img/half-moon.png');
        label.css('background-color', 'black');
        wrapper.css('background', 'url("img/zooWorkersDark.jpg") center center /cover');
        bodyQuiz.toggleClass("bg-light");
        bodyQuiz.addClass("bg-dark");
        bodyQuiz.css("color" , "white")
    }else{
        label.css('background-color', 'rgb(255, 187, 11, 0.5)')
        img.attr('src', 'img/sunny.png');
        wrapper.css('background', 'url(img/zooWorkersLigth.jpg) center center /cover');
        bodyQuiz.toggleClass("bg-dark");
        bodyQuiz.addClass("bg-light");
        bodyQuiz.css("color" , "black")
    }
}
/* Anketa */
var button = $("#btn");
var btnForm = $("#btnForm");
button.click(quiz);
var rez = 0;
function quiz(){
    var Bodyquestions = $(".Bodyquestions");
    var pitanja = $("select");
    var ocenaBody = $(".hero-ocena");
    for(let i = 0; i<pitanja.length; i++){
        if(pitanja[i].value !== "Oceni nas"){
            rez += parseInt(pitanja[i].value);
            if(i === pitanja.length-1){
                Bodyquestions.css("display", "none");
                ocenaBody.removeClass("d-none");
                ocena();
            }
        }else if(pitanja[i].value === "Oceni nas"){
            alert("Molim Vas popunite sva pitanja");
            return;
        }
    }  
}
function ocena(){
    var h2 = $(".hero-ocena-h2");
    var p = $(".hero-ocena-p");
    var ocena = (rez/3);
    if(ocena <= 2.5){
        p.text("Žao nam je što Vam se poseta nije svidela da li nam možete reći kako da unapredimo našu uslugu")
        h2.css("color", "#D72151");
    } else if(ocena > 2.5 && ocena <= 3.5){
        p.text("Drano nam je što Vam se svidela poseta, molim Vas recite nam kako da unapredimo našu uslugu i otklonimo zamerke")
        h2.css("color", "#FFBB0B");
    } else if(ocena > 3.5){
        p.text("Super! Drago nam je što ste uživali u poseti ako imate predlog kako da unapredimo naše poslovanje pišite nam slobodno")
        h2.css("color", "#B2BB1E")
    }
    ocena = ocena.toFixed(2);
    h2.html(`${ocena}`);
    button.css("display", "none");
    btnForm.removeClass("d-none");
}
/* Slanje odgovora ili primedbi */
btnForm.click(form);
var textarea = $("#textarea");
function form(){
    console.log("radi");
    if(textarea.val() === ""){
        alert("Unesite poruku");
        return;
    }else {
        bodyQuiz.addClass("alertGreen");
        bodyQuiz.html(`
            <p class="blackGreen">Hvala na savetima i primedbama, uskoro ćemo ih rešiti</p>        
        `)
    }
}
