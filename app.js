const express = require("express");
const bodyParser = require("body-parser");



const app = express();

let items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  //  res.send("Hello");
  let today = new Date();

  let options = {

    weekday: "long",
    day: "numeric",
    month: "long"
  }

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day, newListItem: items
  });

 /*  let day = "";
  let currentDay = today.getDay();

  console.log("Hoy es:" + today.getDay()); */

  // switch (currentDay) {
  //   case 1:
  //     day = "Monday";
  //     res.render("list", { kindOfDay: day });
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     res.render("list", { kindOfDay: day });
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     res.render("list", { kindOfDay: day });
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     res.render("list", { kindOfDay: day });
  //     break;
  //   case 5:
  //     day = "Friday";
  //     res.render("list", { kindOfDay: day });
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     res.render("list", { kindOfDay: day });
  //     break;
  //   case 0:
  //     day = "Sunday";
  //     res.render("list", { kindOfDay: day });
  //     break;
  //   default:
  //     day = "dunno";
  //     res.render("list", { kindOfDay: day });
  //     break;
  // }

  /*if (today.getDay() === 6 || today.getDay() === 0) {
    day = "weekend day";
    res.render("list", { kindOfDay: day });
    //res.send("ya it's the weekend!!!");
  } else {
    day = "weekday";
    res.render("list", { kindOfDay: day });
    // res.send("<h1>Another day in hell</h1>");
    //res.sendFile(__dirname+"/index.html");
  }*/
});


app.post("/", function (req, res){

let item = req.body.newItem;

items.push(item);

res.redirect("/");

});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
