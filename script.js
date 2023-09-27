    function calculateMinCost() {
        //your code here
        // taking input of arrays and store the array as arr
        const inputElement = document.getElementById("rope-lengths");
        let arrayOfStrings = inputElement.value.split(",");
        console.log(arrayOfStrings);        

        let arr = [];
        for (const iterator of arrayOfStrings) {
            arr.push(parseInt(iterator));
        }
        // console.log(arr);
        let costOfRopes = 0;
        while(arr.length > 1){
            arr.sort((a,b)=>a-b);
            let val1 = arr.shift();
            let val2 = arr.shift();
            let sum = val1+val2;
            costOfRopes += sum;
            arr.push(sum); 
        }

        let result = document.getElementById("result");
        result.innerText = costOfRopes;
        return costOfRopes;
        // console.log(arr);
        // code logic
      }  