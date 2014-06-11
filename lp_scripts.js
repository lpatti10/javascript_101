
var listhomework = function () {
console.log([, 


/*Declaring 5 variables with various value types*/

var firstname = 'Laura';
var lastname = 'Patti';
var car = 'Volvo';
var favnum = 10;
var pet = 'Maya';

/*Writing out or "logging" all variables above to console*/

console.log(firstname, lastname, car, favnum, pet);

/*Declaring 3 variables with string values*/

var animal ='Dogs are the best';
var tree = 'Pine trees';
var city = 'Atlanta';

/*Using .split() method to disassemble each string into individual words or "substrings"*/

animal.split(" ", 10);
tree.split(" ", 10);
city.split(" ", 10);

/*Using .concat() method to combine strings into one new string*/

animal.concat(tree, city);
tree.concat(animal, city);
city.concat(animal, tree);

/*Using .length property to count the number of characters in each string*/

animal.length;
tree.length;
city.length;

/*Declaring one array of mixed value types including: numbers, strings, boolean, null*/

var mix = [34, "candy", "blue", 11, null, true, false, "corndogs are great", 1009, 17];

/*Using .push() method to add 2 additional elements to array above and provide new length =14. I was cnfused as to why it's counting "corndogs are great" as 3 seperate elements??*/

mix.push(144, "crayons");

/*Using .pop() to remove last value of array "crayons" and return "144"*/

mix.pop();

/* Used the reverse() method to get opposite order of elements: [144, 17, 1009, "corndogs are great", false, true, null, 11, "blue", "candy", 34]*/

mix.reverse();

/*Used .splice() to "Index" to 5th element in array and "HowMany" to remove =1. "box" element will be added after 5th element. Only removed elements are returned.*/

mix.splice(5, 1, "box");


])};

/*




Declare a function that does ALL of the above and call it in your file







*/
