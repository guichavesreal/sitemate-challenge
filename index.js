
var modal = document.getElementById("modal");
var btn = document.getElementById("modal_opener");
var closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}


function getInputValue(value){
    document.getElementById('html_text').innerHTML = `You just clicked "${value}"`;
    modal.style.display = "none"
}

