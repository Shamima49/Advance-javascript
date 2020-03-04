const students = [
    {id: 21, name: 'omar Sunny'},
    {id: 30, name: 'Maaanaaaaa'},
    {id: 40, name: 'Moyuri'},
    {id: 70, name: 'Depjol'}
];
  

const name = students.map(students => students.name);
const ids = students.map( students => students.id);
console.log(name);
console.log(ids);

const nam = students.filter(students => students.id > 30);
console.log(nam);

const id = students.find(students => students.id >30);
console.log(id);
