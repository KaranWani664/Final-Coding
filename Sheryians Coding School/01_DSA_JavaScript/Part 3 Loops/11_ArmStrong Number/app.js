// Armstrong Number
// (1^3 + 5^3 + 3^3 = 1+125+27 = 153) (Is Armstrong)

let pr = prompt("Give us your number check Armstrong Number");
console.log(pr);
let n = Number(pr);
console.log("Input is : " + n);
console.log(n); //0 for null

if (pr === null || isNaN(n) || !Number.isInteger(n) || n<=0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    let rem = 0;
    let CubeTotal = 0;
    let Sum = n;
    let i = 3;
    let Arrayrem = [];
    let ArrayCubeTotal = [];

    while(n>0){
        console.log("");
        rem = n%10;
        console.log("rem is: " + rem); 
        
        CubeTotal += rem*rem*rem;
        console.log("CubeTotal is " + CubeTotal + " when mod of " + n + " is: " + rem);    
        n = Math.floor(n/10);
        Arrayrem.push(rem);
        ArrayCubeTotal.push(CubeTotal);
    }
    // ArrayCubeTotal.reverse();
    Arrayrem.push(...ArrayCubeTotal);
    
    console.log("");
    console.log(Arrayrem + " = " + CubeTotal);

    if(Sum == CubeTotal){
        console.log("This is ArmStrong Number");
    } else {
        console.log("This is not ArmStrong Number");
    }
    
}
