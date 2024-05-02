# Practice-quiz-3
 deliverables
 Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'

#Solution
define function remove_duplicates(string)
We use const to create a constant variable
const string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

We use the split method to split the string into an array of words
const string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'.split(' ')

We use the filter method to filter the array of words and return a new array of words that are not duplicates
const string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'.split(' ').filter((word, index, array) => array.indexOf(word) === index)

We use the join method to join the array of words into a string
we console.log the output to see the result