let n = [3,55,12,23,2,88];

function bub(arr)
{
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i]>arr[i+1])
        {   
            let a = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]= a;
            
        }
    }
    console.log(arr);
    arr2 = arr;
    bub(arr2);
        


}
bub(n);
