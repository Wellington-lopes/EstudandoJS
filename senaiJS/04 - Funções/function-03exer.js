/*
    3. Altera a função acima para receber qualquer quantidade de números e retorne a média deles.
    */

   function calculaMedia(...notas) {
    let soma = 0;
    for (i=0; i<notas.length; i++){
        soma += notas[i];
    }   
    let media = soma / notas.length;
    console.log(media);
};

calculaMedia(10,5, 3, 2);