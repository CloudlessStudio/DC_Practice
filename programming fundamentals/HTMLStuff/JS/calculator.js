    let var1 = "";
    let var2 = "";
    display(0);
    let ops = ["add","sub","mul","div"];
    let currentOp = '';
    
    
    // display function
    function display(res)
    {

        let result = res;
        document.getElementById("display").innerText = result;
        console.log(result);
    }
    
    //append to value
    function appendNum(numb)
    {
        if (currentOp.length!=0)
        {
            var1 += numb;
            display(var1);
        }
        else
        {
            var2 += numb;
            display(var2);
        }
    }
    //get answer
    function answer()
    {
        //had to switch these vars otherwise this wont work.... no idea why?
        let v2 = parseInt(var1);
        let v1 = parseInt(var2);
        let product;
        let ans = '';
        console.log("first num: " +v1);
        console.log("second num: " +v2);
        console.log(currentOp);
        if(var1.length>0 || var2.length>0)
        {
            if(currentOp==ops[0])
            {
                product = v1+v2;
                ans = product.toString();
            }
            else if(currentOp==ops[1])
            {
                product = v1-v2;
                ans = product.toString();                
            }
            else if(currentOp==ops[2])
            {
                product = v1*v2;
                ans = product.toString();               
            }
            else if(currentOp==ops[3])
            {
                if(var2 != "0")
                {
                    product = (v1/v2);
                    ans = product.toString();   
                }
                else
                {
                    ans = "ZERO DIVISION";
                }
            
            }
        }
        var1 = "";
        var2 = "";
        currentOp = '';
        display(ans);



    }

    //clear calculator
    function reset()
    {
        currentOp = '';
        var2 = "";
        var1 = "";
        display(0);
    }

    //set mode to add
    function add()
    {
  

            currentOp = ops[0];
            display("+");

        
    }

    //set mode to sub
    function sub()
    {

            currentOp = ops[1];
            display("-");
 
        
    }

    //set mode to mul
    function mul()
    {

            currentOp = ops[2];
            display("*");

        
    }


    //set mode to div
    function div()
    {

            currentOp = ops[3];
            display("/");

        
    }




