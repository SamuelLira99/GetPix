let copyPaste = prompt('Pix Copia e Cola:');

// chaves aleatórias possuem 36 dígitos (incluindo '-' (traços))
const keyLength = 36;

// determina o início da chave pix utilizando regex
let keyFirstCharPos = copyPaste.search(/[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/);

// verifica se a chave foi encontrada
if(keyFirstCharPos < 0) {
    alert('O código informado não contém uma chave pix aleatória')
} else {

    // extrai a chave de [posição encontrada pelo regex] até [36 dígitos após a posição]
    let key = copyPaste.substr(keyFirstCharPos, keyLength);

    console.log(key);
    alert('Sua chave Pix:\n\n'+key);
}
