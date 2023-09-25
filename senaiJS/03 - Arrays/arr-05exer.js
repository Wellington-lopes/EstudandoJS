/*
    5. Remova e imprima o primeiro item do array;
*/
const arr = [1,2,3,4,5];
  arr.push(6);
  arr.push(7);
  arr[7]= 8;
  arr[8]= 9;
  arr[9]= 10;
  console.log("Elemento removido: ", arr.pop());
  console.log("Elemento removido: ", arr.shift());
  console.log(arr);  