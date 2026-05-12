// Armstrong Number
// 3 digit = (1^3 + 5^3 + 3^3 = 1+125+27 = 153) (Is Armstrong)
// 4 digit = (1634 = 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// 5 digit = (9^5 + 2^5 + 7^5 + 2^5 + 7^5 =  = 92727

let pr = prompt("Give us your number check Armstrong Number");
console.log(pr);
let n = Number(pr);
console.log("Input is : " + n);
console.log(n); //0 for null

if (pr === null || isNaN(n) || !Number.isInteger(n) || n<=0) {
    console.log("Invalid Input / Cancelled / Give me Positive Integer Number");
} else {
    let rem = 0;
    let Total = 0;
    let CubeTotal = 1;
    let Sum = n;
    let i = n.length;
    let Arrayrem = [];
    let ArrayTotal = [];

    while(n>0){
        console.log("");
        rem = n%10;
        console.log("rem is: " + rem); 
        
        while(i>0){
            CubeTotal *= rem;
            i--;
        }

        Total += CubeTotal;
        CubeTotal = 1;
        console.log("Total is " + Total + " when mod of " + n + " is: " + rem);    
        n = Math.floor(n/10);
        Arrayrem.push(rem);
        ArrayTotal.push(Total);
    }
    // ArrayTotal.reverse();
    Arrayrem.push(...ArrayTotal);
    
    console.log("");
    console.log(Arrayrem + " = " + Total);

    if(Sum == Total){
        console.log("This is ArmStrong Number");
    } else {
        console.log("This is not ArmStrong Number");
    }
    
}
