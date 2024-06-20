// variant 1 
const globalVariable = 1;

function localScopeFunction() {
    let localVar1 = 2;
    var localVar2 = 3;
    const localVar3 = 4;
    for (let i = 0; i < 10; i++) {
        let innerLocalVar1 = 2;
        var innerLocalVar2 = 3;
    }
    try {
        console.log(innerLocalVar1);
    } catch (e) {
        console.log('Error accessing innerLocalVar1:', e.message);
    }
    console.log(innerLocalVar2); 
}

localScopeFunction();

try {
    console.log(localVar3); 
    console.log(localVar1); 
    console.log(localVar2); 
} catch (e) {
    console.log('Error accessing global variables:', e.message);
}

console.log(globalVariable); 