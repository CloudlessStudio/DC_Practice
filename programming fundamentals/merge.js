function merge(a,b)
  {
    let c = [];
    i = 0
    while(a.length >0 || b.length >0)
    {
        c.push(a[i]);
        c.push(b[i]);
        a.pop();
        b.pop();
        i++;

    }
    console.log(c);
    return c;
  }

let a1=[2,3,4,5,6,7,87];
let a2=[23,6,7,8,4,2,1];
merge(a1,a2);
