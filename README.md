# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug related to the misuse of loose equality (==) in conditional statements. Loose equality performs type coercion before comparison, which can lead to unexpected results when comparing values of different types. The bug is present in `bug.js`, while the solution is provided in `bugSolution.js`.

## Bug Description
The `foo` function is intended to return the sum of two numbers. However, due to the use of loose equality in the conditional statement, the function incorrectly returns 0 when either `a` or `b` is 0, even if the other number is non-zero. This is because `0 == false` evaluates to true.

## Solution
The solution is to replace loose equality (==) with strict equality (===) in the conditional statement. Strict equality does not perform type coercion, ensuring a more accurate comparison and correcting the function's behavior.

## How to Run
1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js` to see the buggy behavior.
4. Run `node bugSolution.js` to see the corrected behavior.