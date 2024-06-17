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
    for (let j = 0; j < score.length; j++) {
      const num = score[j];
      let grade;
      if (num >= 90) {
        grade = "A";
      } else if (num >= 80) {
        grade = "B";
      } else if (num >= 70) {
        grade = "C";
      } else if (num >= 60) {
        grade = "D";
      } else {
        grade = "F";
      }
      results.push({ name: students[i].name, grade: grade });
    }
  }
  console.log(results);
}
calculateGrades();
