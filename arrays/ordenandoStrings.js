let names = ['Ana', 'ana', 'john', 'John'];
function compareFunction(a, b){
    if(a.toLowerCase() < b.toLowerCase()) return -1;
    if(a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
}

console.log(names.sort(compareFunction));

// para que as letras minúsculas venham primeiro
console.log(names.sort((a,b)=>a.localeCompare(b)))