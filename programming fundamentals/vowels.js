function vowels(word){
let wrd = word.toLowerCase();
let aa=0, ee=0, oo=0,yy=0,uu=0,ii=0;
const v ={
    a:"a",
    e:"e",
    o:"o",
    u:"u",
    y:"y",
    i:"i"
}
//console.log(v.a);
for(let i in wrd){
    if(v.a ==wrd[i]){
        aa++;
    }
    else if(v.e ==wrd[i]){
        ee++
    }
    else if(v.o ==wrd[i]){
        oo++
    }
    else if(v.u ==wrd[i]){
        uu++
    }
    else if(v.y ==wrd[i]){
        yy++
    }
    else if(v.i ==wrd[i]){
        ii++
    }

}
return "there are "+aa+" A's "+ee+" E's "+oo+" O's "+uu+ " U's "+yy+" Y's."+ii+" I's";
}

ans = vowels("aeiouy");
console.log(ans);