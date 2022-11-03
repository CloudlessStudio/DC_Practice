function rev(arr){
    reversedArr = [];
    for(let i = arr.length-1; i>=0; i--)
    {
        
        reversedArr.push(arr[i]);
    }
    console.log(reversedArr);
}

a = [99,23,4,6,7,81,1];

rev(a);