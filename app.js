let ipAdress1 = document.getElementById("ip1").value;
let ipAdress2 = document.getElementById("ip2");
let ipAdress3 = document.getElementById("ip3");
let ipAdress4 = document.getElementById("ip4");
let binaryNumber = "";


function update() {
   ipAdress1 = document.getElementById("ip1").value
   console.log(ipAdress1);
   if(ipAdress1 >= 128){
      ipAdress1 -= 128;
      binaryNumber += "1"
      
   } else {binaryNumber ="0";
}
console.log(binaryNumber);
binaryNumber ="";
}