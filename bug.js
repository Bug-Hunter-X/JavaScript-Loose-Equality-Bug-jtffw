function foo(a,b){    if (a === 0 || b === 0) {        return 0;    }    return a+b;}
console.log(foo(0,1)); // expected 1 but got 0
console.log(foo(1,0)); // expected 1 but got 0
console.log(foo(1,1)); // expected 2 but got 2