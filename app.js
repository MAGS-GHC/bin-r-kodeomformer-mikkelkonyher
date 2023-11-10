let ipAdress1 = document.getElementById("ip1").value;
let ipAdress2 = document.getElementById("ip2").value;
let ipAdress3 = document.getElementById("ip3").value;
let ipAdress4 = document.getElementById("ip4").value;
let binaryNumber = "";

//få det i et loop. Tjek hver iretation
128,64,32,16,8,4,2,1

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
   binaryNumber ="";
  
  
}


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
   binaryNumber ="";
  
}

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
   binaryNumber ="";
  
}

function update3() {
   ipAdress2 = document.getElementById("ip3").value
   console.log(ipAdress2);

   for(let i = 128; i >= 1; i /=2){
      if (ipAdress3 >= i){
         ipAdress3 -= i;
         binaryNumber += "1";
      }else { binaryNumber += "0";
      }

   }

   console.log(binaryNumber);
   binaryNumber ="";
  
}

function update4() {
   ipAdress2 = document.getElementById("ip4").value
   console.log(ipAdress4);

   for(let i = 128; i >= 1; i /=2){
      if (ipAdress4 >= i){
         ipAdress4 -= i;
         binaryNumber += "1";
      }else { binaryNumber += "0";
      }

   }

   console.log(binaryNumber);
   binaryNumber ="";
  
}
