const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

var items = [];

app.get("/", (req, res) => {
    var d = new Date();
    let options = {weekday: 'long', month: 'long', day: 'numeric'};
    var realDay = d.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay : realDay, newListItem : items})

})

app.post("/", (req, res) => {
    const requestBody = req.body;
    console.log(requestBody.next_item);
    var item = requestBody.next_item;
    items.push(item);

    res.redirect("/");
})

app.listen(3000, () => {
    console.log("server is working");
})
