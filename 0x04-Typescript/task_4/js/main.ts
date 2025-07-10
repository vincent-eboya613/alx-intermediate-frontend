/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Export constants
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

// Export teacher object
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// C++
console.log('C++'); // Output: C++
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements()); // output: Here is the list of requirements for Cpp
console.log(cpp.getAvailableTeacher()); // OutputAvailable Teacher: John

// Java
console.log('Java'); // Output: Java
java.setTeacher(cTeacher);
console.log(java.getRequirements()); // Here is the list of requirements for Java
console.log(java.getAvailableTeacher()); // No available teacher

// React
console.log('React'); // Output: React
react.setTeacher(cTeacher);
console.log(react.getRequirements()); // Here is the list of requirements for React
console.log(react.getAvailableTeacher()); // No available teacher
