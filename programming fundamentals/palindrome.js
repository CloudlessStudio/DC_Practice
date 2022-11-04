function palindrome(strng)
{   let lowercaseString = strng.toLowerCase().replace(" ",'');
    let reversedString = '';

    
    for(let i = lowercaseString.length-1; i>=0; i--)
    {
        reversedString += lowercaseString[i];
    }
    if(lowercaseString == reversedString)
    {
        return true;
    }
    return false;

}
palindrome("kayak");
palindrome("easy");