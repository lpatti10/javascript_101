
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

02d | var currencyPull = ["USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "GBP", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD", "USD"]
      currencyPull.forEach(function (item) {
      console.log(item === "GBP");
      });





   








*/

