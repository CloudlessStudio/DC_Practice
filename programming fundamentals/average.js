function average(arr)
    {
     let sum = 0;
    for(let i =0; i<arr.length; i++)
        {
            sum += arr[i];
        }
    console.log(sum/arr.length);
    return sum/arr.length;
    }


    let n = [2,3,4,7];

    average(n);
