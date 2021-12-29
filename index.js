
function receivesAFunction(callback){
    callback ();
}

function returnsANamedFunction(){
    return function namedFn() {

 
    console.log("before all");
};
}

function returnsAnAnonymousFunction(){
    return() =>

 
    console.log("before all");

}