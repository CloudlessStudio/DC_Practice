function findchar(strng, char)
{
    char = char.toLowerCase();
    strng = strng.toLowerCase();
    let ans = 0;
    for(let i = 0; i<strng.length; i++)
    {
        if(strng[i]==char)
        {
            ans+=1;
        }
    }
    return ans;
}

findchar("quesadilla", "l");