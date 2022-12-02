function findMissing(range){
    //assuming array 'range' is sorted
    let m = []; 
    let f = [];
    for(let i = 1; i<=range[range.length - 1]; i++){
        m.push(i);           //finding all numbers in range
    }
    for(let k =  0; k<m.length; k++){
        for(let j = 0; j<range.length; j++){
            if(m[k]==range[j]){
                m[k] = "X";  //idk how else to do this? but this will work lol
                             // so any number thats NOT missing gets converted to an X
                             //all missing ones stay as numbers
            }
        }
    }
    for(let y = 0; y<m.length; y++){
        if(m[y]!= "X"){
            f.push(m[y]);    //push only the missing numbers =D 
        }
    }

    console.log(" \noriginal array: " + range +"\n");
    console.log("RANGE FULL: " + m+"\n");
    return console.log("missing nums: " + f);

}
a = [1,3,4,5,9,11,16];
findMissing(a)