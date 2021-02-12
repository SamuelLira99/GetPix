let copyPaste = prompt('Pix Copia e Cola:');

// chaves aleatórias possuem 36 dígitos (incluindo '-' (traços))
const keyLength = 36;

// usado para determinar o início da chave pix (8 dígidos antes do primeiro traço)
let pos = copyPaste.indexOf('-');
let keyFirstCharPos = pos - 8;

// extrai a chave de [8 dígitos antes do 1° traço] até [36 dígitos após o primeiro]
let key = copyPaste.substr(keyFirstCharPos, keyLength);


console.log(key);
alert('Sua chave Pix:\n\n'+key);
