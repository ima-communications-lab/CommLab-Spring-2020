
let numA = 1;
let numB = 2;
let textA = "ABCD";
let textB = "EFG";

// number + number
let resultA = numA + numB;
console.log( "ResultA =" );
console.log( resultA );

// string + string
let resultB = textA + textB;
console.log( "ResultB =" );
console.log( resultB );

// number + string
let resultC = numA + textB;
console.log( "ResultC =" );
console.log( resultC );

// string + number
let resultD = textA + numB;
console.log( "ResultD =" );
console.log( resultD );

// number + number + string
let resultE = numA + numB + textB; // (number + number) + string
console.log( "ResultE =" );
console.log( resultE );

// string + number + number
let resultF = textA + numA + numB; // (string + number) + number
console.log( "ResultF =" );
console.log( resultF );

// number + string + number
let resultG = numA + textA + numB;
console.log( "ResultG =" );
console.log( resultG );

// number + string(space) + number
let resultH = numA + " " + numB;
console.log( "ResultH =" );
console.log( resultH );
