const myName="SURAJ"
console.log(myName.toLowerCase())
const faltuText="    yguy fguhf     "
const phoneNo="5678"
console.log(faltuText.trim())
console.log(myName.includes('R'))
console.log(faltuText.replace("g","f"))
console.log(faltuText.replaceAll("g","f"))
console.log(faltuText.trim().concat(" ",myName))
console.log(myName.indexOf("R"))
console.log(myName.charAt(3))
console.log(myName.charCodeAt(3))
console.log(phoneNo.padStart(10,"*"))
console.log(phoneNo.padEnd(10,"*"))
console.log(phoneNo.split(""));
const templateLiterals=`My name is ${myName}.my phone no is ${phoneNo.padStart(10,'*')}`
console.log(templateLiterals)

