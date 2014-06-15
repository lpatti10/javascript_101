var pricePull = items.map(function(a,b){
  return a.price;
});

var total = pricePull.reduce(function(a, b){
  return a + b;
});

/* toPrecision truncates to hundredth value, but still seems to round up...*/
var average = (total / pricePull.length);
console.log(total / pricePull.length);
console.log("The average price is $" + average.toPrecision(4));



/*
var pricePull = items.map(function(a,b){
      return a.price;
      });

var total = pricePull.reduce(function(a, b) {
    return a + b;
});

console.log("The average price is $" + (total / pricePull.length));

_______________________________________________________________________________________________________
01a | First I tried this:
      console.log(items[10]);
  (FAIL)...and got this: 
      Object {listing_id: 189187176, state: "active", user_id: 11250425, category_id: 69169841, title: "1970s Schlitz Malt Liquor Glass Beer Pitcher"…}
      VM177:2
      undefined
  (!)TAKEAWAY: this targeted the 11th item in the array, not the 11th index in an object of the array.

01b | Next tried:
      items.map(function(a,b){
      return a.price;
      });
  (PASS)...and got this: 
      [12, 20, 50, 25, 41.95, 5.75, 32.99, 15, 28.95, 24.95, 18, 2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.5]
  (!)TAKEAWAY: this returned all the prices!

01c | Now I need to add this array together.
      var pricePull = [12, 20, 50, 25, 41.95, 5.75, 32.99, 15, 28.95, 24.95, 18, 2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.5]
      var n = 0;
      for (var i = 0; i < pricePull.length; i++) {
      n += i;
      console.log(n);
      }
  (FAIL)...and got this: 
      (incremental values of 0 - 300 as 25 sepearte returns)
  (!)TAKEAWAY: returns not specific to price values in array.


01d | Trying for/in and manually redefining returned array as new variable to find sum of all parts
      var pricePull = [12, 20, 50, 25, 41.95, 5.75, 32.99, 15, 28.95, 24.95, 18, 2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.5]
      var total = 0;
      for(var i in pricePull) { 
      total += pricePull[i];
      console.log(total)
       }
  (PASS)...and got this: 
      590.65

-or-| Let's try a reduce() here with renamed variable instead of a for()
      var priceTotal = [12, 20, 50, 25, 41.95, 5.75, 32.99, 15, 28.95, 24.95, 18, 2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.5].reduce(function(a, b) {
      return a + b;
      });
      console.log(priceTotal);
 (PASS)...and got this: 
      590.65

01e | Now I need to divide total by length of the array
      var pricePull = [12, 20, 50, 25, 41.95, 5.75, 32.99, 15, 28.95, 24.95, 18, 2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.5]
      var total = 0;
      for(var i in pricePull) { 
      total += pricePull[i];
      console.log(total)
      console.log(total / pricePull.length);
      }
  (SEMI-PASS)...and got this: 
      (25 returns starting with 12 and ending with 23.625999999999998) 

01f | I only want 1 return value so let's try it without ".length" extension
      var pricePull = [12, 20, 50, 25, 41.95, 5.75, 32.99, 15, 28.95, 24.95, 18, 2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.5]
      var total = 0;
      for(var i in pricePull) { 
      total += pricePull[i];
      console.log(total);
      console.log(total / pricePull);
      }
  (FAIL)...and got this: 
      (25 returns starting with 12 and ending with 590.65 and NaN for every other return value)

01g | Attempting to isolate last return of 23.625999999999998
      console.log(total / pricePull.length);
  (PASS)...and got this: 
      23.625999999999998
  (!)TAKEAWAY: working when taken out of supporting function...hmm

01h | How can I chop off the last integers to return only 23.62? Let's see if Math.round works for this...
      Math.round(23.625999999999998);
  (FAIL)...and got this: 
      24

01i | Final log with customized message
      var avg = 23.62
      console.log("The average price is $" + avg);
  (PASS)...and got this:
      The average price is $23.62 

01j | Tim says to try other Math.functions to achieve this since Math.round will always round up.      

01k | Tried using Math.floor() method 
      console.log("The average price is $" + Math.floor(total / pricePull.length));
  (FAIL)...and got this: 
      The average price is $23 

01l | Tried using Math.ceil() method 
      console.log("The average price is $" + Math.ceil(total / pricePull.length));
  (FAIL)...and got this: 
      The average price is $24 

01m | Tried using Math.trunc() method
*/