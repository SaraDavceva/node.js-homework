const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
let skopjeStudents = studenti
  .filter((student) => student.grad === "Skopje")
  .filter((student) => student.ime.slice(-1) === "a" && student.prosek > 7)
  .sort((a, b) => a.ime - b.ime);
console.log(skopjeStudents);

// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
let prosekNadDevet = studenti
  .filter((student) => student.prosek > 9 && student.grad !== "Skopje")
  .sort((a, b) => b.prosek - a.prosek);
console.log(prosekNadDevet);

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
let imeOdPetKarakteri = studenti
  .filter((student) => student.ime.length === 5)
  .slice(0, 3)
  .sort((a, b) => a.prosek - b.prosek);
console.log(imeOdPetKarakteri);

// 4. Градови подредени по групна висина на просек.
let sum1
let sum2
let sum3
let sum4
let sum5
let sum6

const skopje = studenti.filter((student) => student.grad === "Skopje");
sum1 = skopje.reduce((acc, curr) => acc + curr.prosek, 0);
const prosekSkopje = sum1 / skopje.length;

console.log(prosekSkopje.toFixed(2));

const bitola = studenti.filter((student) => student.grad === "Bitola");
sum2 = bitola.reduce((acc, curr) => acc + curr.prosek, 0);
const prosekBitola = sum2 / skopje.length;

console.log(prosekBitola.toFixed(2));

const kumanovo = studenti.filter((student) => student.grad === "Kumanovo");
sum3 = kumanovo.reduce((acc, curr) => acc + curr.prosek, 0);
const prosekKumanovo = sum3 / skopje.length;

console.log(prosekKumanovo.toFixed(2));

const tetovo = studenti.filter((student) => student.grad === "Tetovo");
sum4 = tetovo.reduce((acc, curr) => acc + curr.prosek, 0);
const prosekTetovo = sum4 / skopje.length;

console.log(prosekTetovo.toFixed(2));

const ohrid = studenti.filter((student) => student.grad === "Ohrid");
sum5 = ohrid.reduce((acc, curr) => acc + curr.prosek, 0);
const prosekOhrid = sum5 / skopje.length;

console.log(prosekOhrid.toFixed(2));

const strumica = studenti.filter((student) => student.grad === "Strumica");
sum6 = strumica.reduce((acc, curr) => acc + curr.prosek, 0);
const prosekStrumica = sum6 / skopje.length;

console.log(prosekStrumica.toFixed(2));

// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.
function prosekStudentsWithA() {
  let studentsWtihA = studenti.filter(
    (student) => student.ime.slice(-1) === "a"
  );
  const sum = studentsWtihA.reduce((acc, curr) => acc + curr.prosek, 0);
  const prosek = sum / studentsWtihA.length;
  return `Prosek na studenti cii iminja zavrzuvaat na a: ${prosek}`;
}
console.log(prosekStudentsWithA());

function prosekStudentsWithoutA() {
  let studentsWtihoutA = studenti.filter(
    (student) => student.ime.slice(-1) !== "a"
  );
  const sum = studentsWtihoutA.reduce((acc, curr) => acc + curr.prosek, 0);
  const prosek = sum / studentsWtihoutA.length;
  return `prosek na studenti cii iminja ne zavrsuvaat na a: ${prosek.toFixed(
    2
  )}`;
}

console.log(prosekStudentsWithoutA());
