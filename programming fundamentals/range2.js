function findMissing(range){

    let r = new Map(); //map for the range
    let f = []; //empty array for answer
    for(let i = 0; i<range.length; i++){ //map all elements
        r.set(range[i],range[i]);
    }
    let top = Math.max(...r.values());
    console.log("HIGEST VALUE IS: " + top);   //finding top value of our list


   for(let i = 1; i<=top; i++){
        if(r.has(i)) {                 ///check if it has that number already
            continue;
        }
        else{
            f.push(i);
        }
   }       
    console.log("\nMAP OF INITIAL ARRAY: \n");
    console.log(r);
    console.log(" ")
    console.log("VALUES MISSING : " + f + "\n");
    }

a = [1,3,4,5,9,11,16];
findMissing(a)