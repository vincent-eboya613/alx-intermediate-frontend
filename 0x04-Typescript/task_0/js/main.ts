// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "jema",
  lastName: "atoya",
  age: 22,
  location: "zanzibqr"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Odoyoo",
  age: 24,
  location: "kenya"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Create a table and append to body
const table = document.createElement("table");
table.style.border = "1px solid black";

// Add rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "4px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "4px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
