var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var path = require("path");
app.use(bodyParser.json());

app.use(express.static(path.join("public")))

var bounties = [
    {
        firstName: "Jabba",
        lastName: "Hutt",
        living: false,
        bountyAmount: 10000,
        type: "Sith",
        id: "abcd1234"
    }
];

app.get("/bounty", function (req, res) {
    res.send(bounties);
});

app.get("/bounty/:bountyId", function (req, res) {
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            return res.send(bounties[i]);
        }
    }
    res.status(404).send({
        message: "Not Fount"
    });
});

app.post("/bounty", function (req, res) {
    var newBounty = req.body;
    newBounty.id = uuid.v4();
    bounties.push(newBounty);
    res.send(newBounty);
});

app.listen(8000, function () {
    console.log("Server is listening on port 8000");
});