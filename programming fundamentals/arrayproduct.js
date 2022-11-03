function product(a,b)
  {
    // setting up basic vars
    let i;
    let j;
    let idx = 0;
    let c = [];
    
    // if b is longer than a:
    if(a.length<b.length)
    {
      for(i = 0; i<a.length; i++)
      {
        c.push(a[i]*b[idx]);
        idx++;
      }
      for (j = idx;j<b.length; j++)
      {
        c.push(b[j]*1);
      }
    }
      
    // if a is longer than b:  
    else if(a.length>b.length)
    {
     for(i = 0; i<b.length; i++)
      {
        c.push(b[i]*a[idx]);
        idx++;
      }
      for (j = idx;j<a.length; j++)
      {
        c.push(a[j]*1);
      }      
    }
      
    //if they are equal
    else
    {
     for(i = 0; i<b.length; i++)
      {
        c.push(b[i]*a[idx]);
        idx++;
      }      
    }
    
    console.log("array a is " + a);
    console.log("array b is " + b);
    console.log("product of a and b is " + c);
  }
a1 = [4,2,6,0,8];
b1 = [9,4,3,5,12,33,4,55,66,7,8];

a2 = [2,4,5,6,7];
b2 = [3,5,6];

a3 = [1,2,5];
b3 = [2,4,7];

product(a1,b1);
product(a2,b2);
product(a3,b3);