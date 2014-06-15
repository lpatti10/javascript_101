
var materialsPull = items.map(function(a,b) {
      if(a.materials) {
      console.log(a.materials);
      }
});


var materialsPull = items.forEach(function(a,b) {
      if(a.materials) {
      console.log(a.materials);
      }
});
____________________________________________________

var materialsPull = items.map(function(a,b) {
      return a.materials; 
      console.log(a.materials);
});


      for (var i in materialsPull) {
      console.log(materialsPull[i]);
      }

____________________________________________________

var materialsPull = items.map(function(a,b) {
  return a.materials;
}
  materials.forEach(function(a){
    if(a.materials == "wood"){
    console.log(a.title + " is made of wood.");
  
  }
}));

      console.log(a.title + " is made of wood.");

/*

03a | Need to scan array for "wood" match in materials:
      var materialsPull = items.map(function(a,b) {
        if(a.materials == "wood") {
        console.log(a.materials);
        }
      });
  (FAIL)...and got this: 
      [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
  (!)TAKEAWAY: Since materials are arrays, maybe they need to be accessed differently than previous inputs...

03b | Used map() to pull all materials    
      var materialsPull = items.map(function(a,b) {
        if(a.materials) {
        console.log(a.materials);
        }
      });
  (PASS) ...and got this:
      ["glass", "wood", "metal"] VM77:5
      ["tee shirt", "screen printing", "100 percent cotton", "tshirt", "environmentally friendly", "screenprint", "water based ink"] VM77:5
      ["stoneware clay", "food safe glazes", "emerald green glaze", "black gloss glaze"] VM77:5
      ["stoneware", "ceramic"] VM77:5
      ["Pine", "wood", "stain", "paint"] VM77:5
      ["glycerin", "fragrance", "color", "gold mica"] VM77:5
      [] VM77:5
      ["glass"] VM77:5
      ["wood", "paint", "stencil", "sealer"] VM77:5
      ["Rubber", "EVA", "Foam", "Love", "Sandals", "Flip Flops", "Plastic"] VM77:5
      ["glass"] VM77:5
      ["glass", "etched", "iaff"] VM77:5
      ["wall mount bottle opener", "wedding", "man cave", "christmas gift", "guy gift", "fathers day", "home bar", "beer", "bar"] VM77:5
      ["slate", "stone", "tile", "engraved", "etched"] VM77:5
      ["wall mount bottle opener", "wedding", "christmas gift", "guy gift", "home bar", "wood", "stainless steel"] VM77:5
      [] VM77:5
      ["glass", "sandblast cabinet", "vinyl", "beer glass", "pint glass", "etched pint glass", "etched glass", "etched beer glass", "16 oz pint", "beer gift", "etched harry potter glass", "the three broomsticks glass", "personalized harry potter glass"] VM77:5
      ["wood", "steel", "rosewood"] VM77:5
      ["enamel", "acrylic", "glass", "paint"] VM77:5
      ["Stainless Steel Bottle Opener"] VM77:5
      ["leather"] VM77:5
      ["glass"] VM77:5
      ["glass", "etched", "iaff"] VM77:5
      ["glass", "etched", "iaff"] VM77:5
      ["metal", "rhinestone"] 

03c | Used forEach with same function    
      var materialsPull = items.forEach(function(a,b) {
        if(a.materials) {
        console.log(a.materials);
        }
      });
  (PASS) ...and got this:
      (same returns as above)

03d | Used for/in to run full loop on parent object
      for (var i in items) {
      console.log(items[i]);
      }
  (PASS)...and got this:
      Object {listing_id: 161489961, state: "active", user_id: 7492310, category_id: 68905630, title: "SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3"…}
      (returned all 25 full objects)

03e | Combined map() and for/in to target only materials array from each object within parent array

      var materialsPull = items.map(function(a,b) {
        return a.materials; 
        console.log(a.materials);
      });
      for (var i in materialsPull) {
      console.log(materialsPull[i]);
      }
  (PASS)...and got this:
      (same returns as 03b)












items.forEach(function(a){
  return a.materials;
}
  materials.forEach(function(a){
    if(a.materials == "wood"){
    console.log(a.title,"costs", '\u00A3', a.price);
  
  }
}));


















  */