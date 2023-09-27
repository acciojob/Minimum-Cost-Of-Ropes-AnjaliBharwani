function calculateMinCost() {
  
	let arr = form.children[1].value.trim().split(',');
	arr = arr.map((e) => Number(e.trim()));
	let ans = 0;
	while(arr.length>1){
		arr.sort((a, b) => a-b);
		let add = (arr.shift() + arr.shift());
		arr.unshift(add);
		ans+=add;
	}
	result.innerText = ans;
} 
  
}  
