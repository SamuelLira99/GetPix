# GetPix

GetPix é um pequeno snippet em javascript para extrair sua `chave pix` a partir do recurso `Pix Copia e Cola`, ou do `QR Code`. O objetivo são as **chaves aleatórias**

### Como usar

Você pode simplesmente acessar a [página do script](http://bit.ly/minha-chave-aleatoria?src=github) (mobile ou desktop). Ou utilizar o código do arquivo [getpix.js](https://github.com/SamuelLira99/GetPix/blob/master/getpix.js) a partir do console do navegador (desktop)

Informando a string do `Pix Copia e Cola`, ou do `QR Code`, o código vai extrair a parte exata que contém sua chave pix

### Como funciona

A chave aleatória fica embutida dentro da string completa do `Pix Copia e Cola` ou do `QR Code`, como no exemplo abaixo:

`00000000000000BR.GOV.BCB.PIXxxxx12345678-1234-1234-1234-123456789abc000000000000000000000000BR0000FULANO DA SILVA SANTOS0000SAO.PAULO00000000***xxxxxxxx`

onde dentro da string acima, a partir do caractere 33(neste caso) começa a chave pix `12345678-1234-1234-1234-123456789abc`

visto que as chaves aleatórias seguem um padrão de 36 caracteres: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`, o script busca este padrão utilizando [regex](https://www.wikiwand.com/pt/Express%C3%A3o_regular)

### Onde conseguir a string completa

Se o app de seu banco não oferece o recurso `Pix Copia e Cola`, você pode escanear o `QR Code` a partir de qualquer app ou site que **NÃO SEJA DE NENHUM BANCO**. como o [the-qrcode-generator(site)](https://the-qrcode-generator.com/scan)
ou o [barcodescanner(app)](https://play.google.com/store/apps/details?id=com.teacapps.barcodescanner)
