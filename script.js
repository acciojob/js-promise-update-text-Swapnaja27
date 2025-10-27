//your JS code here. If required.
let output=document.getElementById("output");

let string=new Promise((res,rej)=>{
	setTimeout(()=>{
		res("Hello, world!");
	},1000)
});

string.then((msg)=>{
	output.textContent=msg;
})