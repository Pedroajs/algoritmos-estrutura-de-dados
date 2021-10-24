//ordenando um array que contém qualquer tipo de objeto

const friends = [
    {name: 'Pedro', age: 28},
    {name: 'Julia', age: 24},
    {name: 'Roberto', age: 20}
];

function compareByAge(a, b){
    if(a.age < b.age) return -1;
    if(a.age > b.age) return 1;
    return 0;
}

console.log(friends.sort(compareByAge));