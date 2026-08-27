function makeid(l) {
  // write your code here
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
	let len = l
	let res=""
	for(let i=0;i<len;i++){
		randomindex = Math.floor(Math.random()*chars.length)
		res = res+chars[randomindex]
	}
	return res
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
