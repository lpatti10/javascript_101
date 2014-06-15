var ccodePull = items.map(function(a,b){
  if(a.currency_code === "GBP") {
  console.log(a.title + " costs \u00A3" + a.price);
  }
});


/*

02a | Need to scan array for "GBP" match in currency_code:
      items.map(function(a,b){
      return a.currency_code;
      });
  (PASS)...and got this: 
      ["USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "GBP", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"]
  (!)TAKEAWAY: this returned all results for currency_code 


02b | Trying a forEach to isolate a match
      var currencyPull = ["USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "GBP", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"]
      currencyPull.forEach(function (item) {
      console.log(item === "GBP");
      });
  (SEMI-PASS)...and got this:
      10 false
      true
      14 false  
  (!)TAKEAWAY: this returned all results (true and false) for "GBP"
     

02c | Tried an additional console.log to isolate true result
      var currencyPull = ["USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "GBP", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"]
      currencyPull.forEach(function (item) {
      console.log(item === "GBP");
      });
      console.log(true);
  (FAIL)...and got this:
      10 false
      true
      14 false  


02d | Trying to map and isolate together:
      items.map(function(a,b){
      return a.currency_code === "GBP";
      });
 (FAIL)...and got this:
      [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    

02e | Trying second map() against first map() return
      var currencyPull = ["USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "GBP", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"]
      currencyPull.map(function(a,b){
      return a === "GBP";
      });
  (FAIL)...and got this:
      [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

02f | Trying reduce() method to isolate 
      var currencyPull = ["USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "GBP", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"]
      currencyPull.reduce(function(a, b) {
      return a === "GBP";
      });

02g | 
      items.map(function(a,b){
      return a.currency_code === "GBP";
      console.log(a.title + a.price);
      });
 (SEMI-PASS)...and got this:
      [false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false]






*/

