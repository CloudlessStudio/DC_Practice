function caps(sentence){
    let ans = "";
    let s = sentence.split(" ");

    for(let i =0; i < s.length; i++){
        let x = s[i][0].toUpperCase();  //get first letter, make it big
        let y = s[i].slice(1);  //get the rest of them
        ans += x+y+" ";   //add to answer
    }
    ans.slice(0,-1);  //remove last space
    return ans;
}

let a = caps("super cool test sentence!");
console.log(a);

