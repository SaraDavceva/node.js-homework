const students = [
  { name: "Alice", scores: [85, 92, 78] },
  { name: "Bob", scores: [59, 63, 70] },
  { name: "Charlie", scores: [100, 95, 98] },
  { name: "David", scores: [45, 52, 60] },
  { name: "Eve", scores: [75, 80, 82] },
];

function calculateGrades() {
  const results = [];
  for (let i = 0; i < students.length; i++) {
    const score = students[i].scores;
    const sum = score.reduce((acc, curr) => acc + curr, 0);
    // console.log(sum);
    let total = sum / score.length;
    // console.log(total)
    let grade;
    if (total >= 90) {
      grade = "A";
    } else if (total >= 80) {
      grade = "B";
    } else if (total >= 70) {
      grade = "C";
    } else if (total >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
    results.push({ name: students[i].name, grade: grade });
  }
  console.log(results);
}
calculateGrades();
