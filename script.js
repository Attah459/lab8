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