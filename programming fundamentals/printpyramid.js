function pyr(row,dir)
{
    let w;


    for(let i = 0; i<row; i++)
    {       
        w = "";
        if(dir == 0)
        {   
            for(let k = 0; k<=i; k++)
            {
                w+= " ";
            }
            for(let j=i; j<row; j++)
            {  
                w += row-i;
                w += " ";
            }            
        }
        if(dir == 1)
        {   
            for(let k = 0; k<=i; k++)
            {
                w+= " ";
            }
            for(let j=i; j<row; j++)
            {  
                w += row-i;
                w += " ";
            }            
        }
        console.log(w);

    }
}
pyr(9,0);
