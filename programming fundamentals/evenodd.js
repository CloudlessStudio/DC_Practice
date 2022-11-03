function eo(arr)
{
    let even = [];
    let odd = [];
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i]%2==0)
        {
            even.push(arr[i]);
        }
        else
        {
            odd.push(arr[i]);
        }
    }
    console.log(even);
    console.log(odd);

}

arr1 = [1,23,4,678,6,53,7,2213,44,56];
eo(arr1);
