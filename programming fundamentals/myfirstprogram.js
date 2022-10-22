
const numbers = [10,23,45,6,7,99];
function calc(nums) 
    {
    let ans = 0; 
    for(let i = 0; i<nums.length; i++)
    {
        ans += nums[i];
    }
    console.log(ans);
    }
  
  calc(numbers);


