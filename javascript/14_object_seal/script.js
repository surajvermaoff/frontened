const user ={
username:"suraj",
college:"dumka",
mobile:6299046332
}
Object.seal(user)
Object.freeze(user)
console.log("username" in user)