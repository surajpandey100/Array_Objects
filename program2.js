let numbers = [1, 2, 3, 4, 5];

// Push: Add an element to the end of the array
numbers.push(6);
console.log("After push:", numbers); // Output: [1, 2, 3, 4, 5, 6]

// Pop: Remove the last element from the array
let poppedElement = numbers.pop();
console.log("After pop:", numbers); // Output: [1, 2, 3, 4, 5]
console.log("Popped element:", poppedElement); // Output: 6

// Unshift: Add an element to the beginning of the array
numbers.unshift(0);
console.log("After unshift:", numbers); // Output: [0, 1, 2, 3, 4, 5]

// Shift: Remove the first element from the array
let shiftedElement = numbers.shift();
console.log("After shift:", numbers); // Output: [1, 2, 3, 4, 5]
console.log("Shifted element:", shiftedElement); // Output: 0
