var formBox = $(".form-box");
var formBtn = $("#formBtn");
formBtn.click(send);
function send(){
    console.log("radi")
    formBox.html("");
    formBox.css("background-color", "#d4edda");
    formBox.html(`
        <div class="form-box-okvir"><p>Uspešno ste poslali poruku, u najkraćem periodu ćemo Vas kontaktirati!</p></div>
    `)
}

