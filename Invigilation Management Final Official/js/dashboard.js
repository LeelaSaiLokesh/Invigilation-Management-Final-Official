
document.getElementById("faculty-count").innerText = localStorage.getItem("facultyList") 
  ? JSON.parse(localStorage.getItem("facultyList")).length 
  : 0;
