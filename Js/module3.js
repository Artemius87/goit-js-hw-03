const houses = ["Arryn", "Frey", "Greyjoy", "Stark", "Lannister", "Tyrell"];

// Вертикальная запись удобнее для чтения
const updatedHouses = [...houses.slice(2)];

console.log(updatedHouses);
// ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']
