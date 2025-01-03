// A closure is a function having access to the parent scope, even after the parent function has closed.

function xyz(){
    var x = 12;
    return function(){
        console.log(x);
    }
}
var ans = xyz();
ans();