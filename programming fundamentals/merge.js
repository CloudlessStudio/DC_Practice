function merge(a,b)
  {
    let c = [];
    for(let i=0; i<a.length; i++)
      {
        c.push(a[i]);
      }
    for(let j=0; j<b.length; j++)
    {
      c.push(b[j]);
    }
    return c;
  }

let a1=[2,3,4,5,6,7,87];
let a2=[23,6,7,8,4,2,1];
merge(a1,a2);
