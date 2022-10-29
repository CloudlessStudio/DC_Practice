function check(num, list)
    {
        let x = false;
        for(let i = 0; i<list.length; i++)
        {
            if(list[i]==num)
            {
                x = true;
                break;
            }
            else{
                x = false;
                
            }
        }
        if(x == true)
        {
            console.log("found");
        }
        else
        {
            console.log("not found");
        }
    }

let a = [1,2,3,5,6,7,8,10];

check(99,a);