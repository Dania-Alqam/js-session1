console.log(document.getElementById("userName").textContent);
document.getElementById("userName").textContent="Moh";
console.log(document.getElementById("userName").textContent);
console.log("with text content "+document.querySelector(".test-selector").textContent);
console.log("without text content "+document.querySelector(".test-selector"));

document.querySelector(".test-selector").textContent="test1111111111";
console.log(document.querySelector(".test-selector").textContent);
