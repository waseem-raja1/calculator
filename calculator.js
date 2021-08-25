const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var symbol = (req.body.symbol);
    var symbol1 = "+";
    var symbol2 = "-";
    var symbol3 = "*";
    var symbol4 = "/";
    var symbol5 = "%";
    
    
    if ( symbol == symbol1) {
       var result = num1 + num2;
       res.send("calculation is " + result );
    } else if( symbol == symbol2) {
         var result = num1 - num2;
        res.send("calculation is " + result );
    }
    else if( symbol == symbol3) {
        var result = num1 * num2;
       res.send("calculation is " + result );
   }
   else if( symbol == symbol4) {
    var result = num1 / num2;
   res.send("calculation is " + result );
}
else if (symbol == symbol5){
    var result = num1 % num2;
    res.send("calculation is " + result );
}
 else {
    var result = "<h1>try next tym</h1>";
    res.send( result );
}
    
  
    
    
   
});

app.listen(10111, function(){
    console.log("10111 start");
});