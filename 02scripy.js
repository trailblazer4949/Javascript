/*
Author - Bharat Vyas
Learn about :
  1] Operators
  2] round Function
  3] typeof
*/
var sellingPrice = 199;
var listingPrice = 699;

var discountPercentage = (((listingPrice - sellingPrice) / listingPrice) * 100)

console.log("Discounted price is  :" + discountPercentage);
discountPercentage = Math.round(discountPercentage);
console.log(discountPercentage, "% off");

var result = sellingPrice > listingPrice;
console.log(result);
console.log(typeof result);

/*
Output :
Discounted price is  :71.5307582260372
72 % off
false
boolean
*/
