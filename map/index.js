const map = new Map();

map.set("chave1", "valor1");
map.set("chave2", "valor2");
map.set("chave3", "valor3");
map.set("chave4", "valor4");

console.log(map.get("chave1"));
console.log(map.has("chave2"));

map.forEach((valor, chave) => {
    console.log(`${chave} = ${valor}`);
});

const mapConvertArray = map.keys();
console.log("map convertido " + mapConvertArray.next().value);

map.clear();
console.log(map.size);