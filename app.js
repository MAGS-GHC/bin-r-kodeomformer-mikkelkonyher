let ipAdress1 = document.getElementById("ip1").value;
let ipAdress2 = document.getElementById("ip2").value;
let ipAdress3 = document.getElementById("ip3").value;
let ipAdress4 = document.getElementById("ip4").value;
let binaryNumber = "";

function update() {
   ipAdress1 = document.getElementById("ip1").value
   console.log(ipAdress1);
   if(ipAdress1 >= 128){
      ipAdress1 -= 128;
      binaryNumber += "1"
      
   } else {binaryNumber ="0";
}
if (ipAdress1 >= 64){
   ipAdress1 -= 64;
   binaryNumber += "1"
} else{binaryNumber="0";
}
console.log(binaryNumber);
binaryNumber ="";
}


//få det i et loop

