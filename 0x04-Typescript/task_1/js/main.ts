interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allows additional properties
}

// Example  usage of the Teacher interface
const teacher3: Teacher = {
    firstName: "Francis",
    lastName: "Okoyee",
    fullTimeEmployee: true,
    yearsOfExperience: 9,
    location: "China",
    age: 30, // Additional property
}

console.log(teacher3);

// Extend the Teacher interface for Directors
interface Director extends Teacher {
    numberOfReports: number;
}

// Example usage of the Director interface
const director1: Director = {
    firstName: "ousmane",
    lastName: "Dembele",
    fullTimeEmployee: true,
    location: "France",
    numberOfReports: 6,
}

console.log(director1); 

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage
console.log(printTeacher("Francis", "Okoyee")); // Output: F. Okoyee

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage
const student = new StudentClass("Junet, "Mulwa");
console.log(student.displayName());      // Output: Junet
console.log(student.workOnHomework());  // Output: Currently working
