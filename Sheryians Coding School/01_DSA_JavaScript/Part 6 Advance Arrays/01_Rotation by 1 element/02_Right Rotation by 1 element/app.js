// Right Rotation by 1 Element

let arr = [1, 2, 3, 4, 5];

// Here 5 will goto 1st and 1 to 4 will shift right

let copy = arr[arr.length-1];

for (let i = arr.length - 1; i > 0 ; i--) {
    arr[i] = arr[i-1];
    console.log(arr);
}

arr[0] = copy;

console.log(arr);
