# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Refactoring explanation:

The variable `candidate` is now initialized to the default value, `TRIVIAL_PARTITION_KEY`, at the beginning of the function. This simplifies the code and avoids duplicated logic.
The `if-else` structure has been refactored to reduce nested conditions and improve readability.
The condition to check if `candidate` is a string has been moved outside the nested if-else statements to avoid repeating the same logic multiple times.
The final condition to check if the length of `candidate` is greater than `MAX_PARTITION_KEY_LENGTH` has been moved to the end of the function.


Refactored Function:

The function takes an event object as a parameter and returns the partition key.
The trivial partition key and the maximum partition key length are defined as constants.
The candidate variable is initialized with the trivial partition key.
If event is defined, it checks if it has a partitionKey property, and if it does, it assigns it to candidate.
If event doesn't have a partitionKey property, it creates a hash of the event data using the sha3-512 algorithm and assigns it to candidate.
If candidate is defined, it checks if it's of the correct type (string) and converts it to a string if it isn't.
Finally, it checks the length of the candidate and if it's longer than the maximum partition key length, it creates a hash of the candidate using the sha3-512 algorithm and assigns it to candidate.


Ticket breakdown:

Refactor the code to use a default value for the `candidate` variable.
Simplify the code to reduce nested conditions and improve readability.
Move the condition to check if `candidate` is a string outside the nested `if-else` statements to avoid repeating the same logic multiple times.
Move the condition to check if the length of `candidate` is greater than `MAX_PARTITION_KEY_LENGTH` to the end of the function.
