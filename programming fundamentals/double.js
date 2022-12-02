function findD(arr){
    console.log("\n FINDING NON-DUPLICATES \n")

    let x = [];   
    let q = [];
                           //empty arrays for later
    console.log("\noriginal array: "+ arr +"\n");      

    for(let i = 0; i<arr.length; i++){         //we replace every duplicate with an emoji '=P'
        for(let j = i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                x.push(arr[j]);
            }
        }
    }

    for(let i = 0; i<arr.length; i++){         //we replace every duplicate with an emoji '=P'
        for(let j = 0; j<x.length; j++){
            if(arr[i]==x[j]){
                arr[i]="=P";
            }
        }
        if (arr[i]!="=P"){                //push non dupes into q
            q.push(arr[i]);
        }
    }
console.log("Non-duplicate items: "+q);
}

let nums = [4,1,2,1,2];
findD(nums);
