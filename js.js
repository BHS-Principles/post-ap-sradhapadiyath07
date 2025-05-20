var LIST = [
    "coolness",
    "all other things",
    "sweetness",
    "awesomeness"
];

var BTN = document.getElementById("myButton");

for(var i = 0 ; i <3 ; i++){
        var newBTN = BTN.cloneNode(true)
        document.body.append(newBTN);
        alert("Check MeOUT!!!" + LIST[i]);
    };
    