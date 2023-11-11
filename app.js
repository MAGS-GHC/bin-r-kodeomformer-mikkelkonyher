let ipAdress1 = document.getElementById("ip1").value;
let ipAdress2 = document.getElementById("ip2").value;
let ipAdress3 = document.getElementById("ip3").value;
let ipAdress4 = document.getElementById("ip4").value;
let binaryIp = document.getElementById("binær1").value;
let binaryNumber = "";
let resultBinary = "";
let ipToBinary = "";
const powerOF = [128,64,32,16,8,4,2,1];

//få det i et loop. Tjek hver iteration
128,64,32,16,8,4,2,1

//IP 1

function update() {
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
    binaryNumber ="";
  
  
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
   resultBinary += binaryNumber + "."
   binaryNumber ="";
  
}






function resultat1(){
   document.getElementById("binaryResult").innerHTML = "Binary Representation: " + resultBinary;
   console.log();

}
