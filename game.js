document.getElementById("si").onclick = function() {
  document.getElementById("gif").style.display = "block";
  document.getElementById("mensaje").style.display = "none"; 
};

document.getElementById("no").onclick = function() {
  this.style.display = "none"; 
  document.getElementById("mensaje").style.display = "block";
};