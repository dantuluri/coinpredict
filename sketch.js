var price = [0];

function setup() {
    fetchData();
}



function fetchData() { //  create a loop function
    console.log("fetch data");
    i = 1;
    setTimeout(function () { //  call a 3s setTimeout when the loop is called
        loadJSON("https://api.coinmarketcap.com/v1/ticker/?start=0&limit=1", gotData);
        //  your code here
        i++; //  increment the counter
        if (i > 0) { //  if the counter < 10, call the loop function
            fetchData(); //  ..  again which will trigger another 
        } //  ..  setTimeout()
    }, 6000)
}

function gotData(data) {
    print(data);
    price.push(data[0].price_usd);
    if (price[price.length - 2] < price[price.length - 1])
        console.log("BITCOIN HAS GONE UP!");
    console.log(data[0].price_usd);

}


function draw() {}
