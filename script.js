const student = {
  name: "John Smith",
  age: 22,
  enrolled: true,
  courses: ["History", "Biology", "Philosophy"],
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