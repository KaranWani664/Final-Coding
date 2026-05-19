// Sort by Swap in Array with 2 Pointer Approach

// To take all 0 at left atn all 1 at right

// i at top - iterate like loop 
// let arr = [0,1,1,0,1,1,0,0,0,1,1,0,0,1]
// j at bottom - j will move only when swapped

// if i is at 0 then it will swap that place with j current place
// if i is at 1 nothing will happen and i wlll move forward

let arr = [1,1,0,1,0,1,1,0,0];

//for loop
// let j = 0;
// for (let i = 0; i<arr.length; i++){
//     if (arr[i] == 0) {
//         let temp = arr[j];
//         arr[j] = arr[i]
//         arr[i] = temp;
//         j++;
//     } else {
//         continue;
//     }
// }

//while loop
let i = 0, j = 0;
while(i<arr.length){
    if (arr[i]==0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}

console.log(arr);