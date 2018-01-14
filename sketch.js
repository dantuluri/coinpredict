/*
 * sketch.js
 * @author Surya Dantuluri
 * Remember to change loop from n to limit cap
 */

var price = [
        [],
        []
    ];

function setup() {
    for (n = 0; n < 40; n++) {
        price.push([]);
    }
    console.log(price.toString());
    fetchData();
}




function fetchData() { //  create a loop function
    console.log("fetch data");
    i = 1;
    setTimeout(function () { //  call a 3s setTimeout when the loop is called
        loadJSON("https://api.coinmarketcap.com/v1/ticker/?start=0&limit=40", gotData);
        //  your code here
        i++; //  increment the counter
        if (i > 0) { //  if the counter < 10, call the loop function

            fetchData(); //  ..  again which will trigger another 

        } //  ..  setTimeout()
    }, 6000)
}



function gotData(data) {

    print(data);
    for (count = 0; count < 40; count++) {

        price[count].push(data[count].price_usd);
        if (price[count][price.length - 2] < price[count][price.length - 1])
            console.log("green");
        else if (price[count][price.length - 2] > price[count][price.length - 1])
            console.log("red");
        console.log(data[count].price_usd);
        var numberId = "number" + (count + 1);
        var wordId = "word" + (count + 1);
        console.log(numberId);
        console.log(wordId);
        document.getElementById("" + numberId).innerHTML = data[count].price_usd;
        document.getElementById("" + wordId).innerHTML = data[count].name;


    }




}


function draw() {}
