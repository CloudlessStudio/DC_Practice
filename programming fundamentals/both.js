function both(a,b)
{
    foundInBoth=[];
    for(let i = 0; i<a.length; i++)
    {
        for(let j = 0; j<b.length; j++)
        {
            if(a[i] == b[j])
            {
                foundInBoth.push(a[i]);
            }
        }
    }
    console.log(foundInBoth);
}

arr1 = [1,4,6,7,8,9,0,11,24,5];
arr2 = [5,77,88,9,12,23,6];

both(arr1,arr2);