const student = {
  name: "John Smith",
  age: 22,
  enrolled: true,
  courses: ["History", "Biology", "Philosophy"],



 addCourse: function(newCourse) {
    this.courses.push(newCourse);
    console.log(`Course "${newCourse}" added.`);
  },


  displayInfo: function () {
    console.log(`Student Name: ${this.name}`);
    console.log(`Student Age: ${this.age}`);
    console.log(`Enrolled: ${this.enrolled ? "Yes" : "No"}`);
    console.log(`Courses: ${this.courses.join(", ")}`);
  }
};


const { name, courses } = student;

console.log("Name:", name);
console.log("Courses:", courses);

const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;

console.log("First score:", firstScore);
console.log("Second score:", secondScore);
const clonedStudent = { ...student };
console.log(clonedStudent);

clonedStudent.graduationYear = 2025;
console.log(clonedStudent);

const newCourses = ["Math", "Language"];
const allCourses = [...student.courses, ...newCourses];