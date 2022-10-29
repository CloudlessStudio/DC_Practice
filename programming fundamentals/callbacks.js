const first = function(){
    console.log("do this first");
}

const last = function(first){
    first();
    console.log("do this last");
}

const order = function(){
    last(first);
}

order();