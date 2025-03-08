var myMoney= 1000;
var costOfProduct = 700;
console.log("Total cost is: "+costOfProduct);
var diff = myMoney-costOfProduct;

if (diff<0) {
    console.log("You need to give me "+1*-(diff)+" dollars more")
}
else {
    console.log("You will get back "+diff+" dollars")
}
