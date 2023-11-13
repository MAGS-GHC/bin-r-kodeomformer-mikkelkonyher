let ipAdress1 = document.getElementById("ip1").value;
let ipAdress2 = document.getElementById("ip2").value;
let ipAdress3 = document.getElementById("ip3").value;
let ipAdress4 = document.getElementById("ip4").value;
let binaryNumber = "";
let resultBinary = "";

let binaryVal = document.getElementById("binær1").value;
let binaryVal2 = document.getElementById("binær2").value;
let binaryVal3 = document.getElementById("binær3").value;
let binaryVal4 = document.getElementById("binær4").value;
const powerOf = [7,6,5,4,3,2,1,0]
let deciSum = 0;
let deciSum2 = 0;
let deciSum3 = 0;
let deciSum4 = 0;
let resultDeci = "";


//få det i et loop. Tjek hver iteration
//128,64,32,16,8,4,2,1

//IP 1

function update() {
   resultBinary = "";
   ipAdress1 = document.getElementById("ip1").value
   console.log(ipAdress1);
   

   for(let i = 128; i >= 1; i /=2){
      if (ipAdress1 >= i){
         ipAdress1 -= i;
         binaryNumber += "1";
      }else { binaryNumber += "0";
      }

   }

   console.log(binaryNumber);
   resultBinary += binaryNumber + "."
   binaryNumber ="";// Clearer input felt
  
  
}

//IP 2

function update2() {
   ipAdress2 = document.getElementById("ip2").value
   console.log(ipAdress2);
   

   for(let i = 128; i >= 1; i /=2){
      if (ipAdress2 >= i){
         ipAdress2 -= i;
         binaryNumber += "1";
      }else { binaryNumber += "0";
      }

   }

   console.log(binaryNumber);
   resultBinary += binaryNumber + "."
   binaryNumber ="";
  
}

//IP 3

function update3() {
   ipAdress3 = document.getElementById("ip3").value
   console.log(ipAdress3);
  

   for(let i = 128; i >= 1; i /=2){
      if (ipAdress3 >= i){
         ipAdress3 -= i;
         binaryNumber += "1";
      }else { binaryNumber += "0";
      }

   }

   console.log(binaryNumber);
   resultBinary += binaryNumber + "."
   binaryNumber ="";
  
}

//IP 4

function update4() {
   ipAdress4 = document.getElementById("ip4").value
   console.log(ipAdress4);
   

   for(let i = 128; i >= 1; i /=2){
      if (ipAdress4 >= i){
         ipAdress4 -= i;
         binaryNumber += "1";
      }else { binaryNumber += "0";
      }

   }

   console.log(binaryNumber);
   resultBinary += binaryNumber
   binaryNumber =""; 
  
}

// Funktioner der sørger for at holde hele binærtallet i en linje

function resultat1(){
   document.getElementById("binaryResult").innerHTML = "Binary Representation: " + resultBinary;
   console.log();

}

function resultat2(){
   document.getElementById("ipDeci").innerHTML = "IP Adress: " + resultDeci
   console.log();
}

// Binær til IP

//Problem: Hvordan ser man fx. 11111111 som 8 individuelle tal og ikke et stort tal, hvis man fx. vil loope hver bit i et array. 
// for(let i = 0; i< array1.length i++) Måske??
// hvordan ser den binaryVal som et array ?


function deciConverter(){
   deciSum = 0;
   resultDeci = "";
   binaryVal = document.getElementById("binær1").value
   console.log(binaryVal);

   for(let i = 0; i < 8; i++){
   deciSum += binaryVal[i] * 2 ** powerOf[i];
  
 }
 console.log(deciSum);
 resultDeci += deciSum + "."



}

function deciConverter2(){
   deciSum2 = 0;
   binaryVal2 = document.getElementById("binær2").value
   console.log(binaryVal2);

   for(let i = 0; i < 8; i++){
   deciSum2 += binaryVal2[i] * 2 ** powerOf[i];
  
 }
 console.log(deciSum2);
 resultDeci += deciSum2 + "."
  
}

function deciConverter3(){
   deciSum3 = 0;
   binaryVal3 = document.getElementById("binær3").value
   console.log(binaryVal3);

   for(let i = 0; i < 8; i++){
   deciSum3 += binaryVal3[i] * 2 ** powerOf[i];
  
 }
 console.log(deciSum3);
 resultDeci += deciSum3 + "."
 
 

 
}

function deciConverter4(){
   deciSum4 = 0;
   binaryVal4 = document.getElementById("binær4").value
   console.log(binaryVal4);

   for(let i = 0; i < 8; i++){
   deciSum4 += binaryVal4[i] * 2 ** powerOf[i];
  
 }
 console.log(deciSum4);
 resultDeci += deciSum4 + "."
 
 
 
}