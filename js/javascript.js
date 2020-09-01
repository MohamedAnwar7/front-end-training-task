////////loader////////////////////////
var load;


function myFunction() {
    load = setTimeout(showPage,2000);
    
}
function showPage() {
  document.getElementById("preloader").style.display = "none";
    document.getElementById("mydiv").style.display = "block";
}