const facultyTable = document.querySelector("#faculty-table tbody");
const facultyForm = document.getElementById("faculty-form");
const datalist = document.getElementById("faculty-names");
const formContainer = document.getElementById("form-container");
const showFormBtn = document.getElementById("show-form-btn");

let facultyList = JSON.parse(localStorage.getItem("facultyList")) || [
  { name: "Dr. A. Sharma", department: "CSE", email: "asharma@univ.edu" },
  { name: "Prof. R. Verma", department: "ECE", email: "rverma@univ.edu" }
];

const excelFacultyNames = [
  "Dr. Bh Y S Rama Krishnas Raju",
  "Dr. M Srih",
  "Dr. 6 Mahesh",
  "Dr. G N V 6 Sirisho",
  "Dr. K Aru",
  "Dr. K Romaprasada Raju",
  "Dr. K V Krishnas Raju",
  "Dr. M S V S Bhadri Raju",
  "Dr. P Bhoro†",
  "Dr. R N V Jogon Cohen",
  "Dr. N K Kameswara Rao",
  "Dr. V MNSS",
  "Dr. V Chandra Sekhar",
  "Mr. I Roj"
];

function renderFacultyTable() {
  facultyTable.innerHTML = "";
  facultyList.forEach((faculty, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${faculty.name}</td>
      <td>${faculty.department}</td>
      <td>${faculty.email}</td>
      <td><button class="delete-btn" data-index="${index}">Delete</button></td>
    `;
    facultyTable.appendChild(row);
  });

  document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", deleteFaculty);
  });
}

function populateDatalist() {
  const allNames = new Set([
    ...facultyList.map(f => f.name),
    ...excelFacultyNames
  ]);
  datalist.innerHTML = "";
  allNames.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    datalist.appendChild(option);
  });
}

function deleteFaculty(e) {
  const index = e.target.getAttribute("data-index");
  facultyList.splice(index, 1); 
  localStorage.setItem("facultyList", JSON.stringify(facultyList));
  renderFacultyTable(); 
}

showFormBtn.addEventListener("click", () => {
  formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
  showFormBtn.textContent = formContainer.style.display === "block" ? "− Hide Form" : "+ Add Faculty";
});

facultyForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("faculty-name").value;
  const department = document.getElementById("department").value;
  const email = document.getElementById("email").value;

  facultyList.push({ name, department, email });
  localStorage.setItem("facultyList", JSON.stringify(facultyList));
  renderFacultyTable();
  populateDatalist();
  facultyForm.reset();
  formContainer.style.display = "none";
  showFormBtn.textContent = "+ Add Faculty";
});

renderFacultyTable();
populateDatalist();