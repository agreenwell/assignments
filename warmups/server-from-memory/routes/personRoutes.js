var express = require("express");
var personRoutes = express.Router();
var Person = require("../models/person");

personRoutes.get("/", function (req, res) {
    Person.find(function (err, people) {
        if (err) return res.status(500).send(err);
        res.send(people);
    });
});
/*

Everything else about this file is the same as what we've already been doing, but this "get one" shows a useful
example of using mongoose's `.populate()` method. This is useful for when you've decided to only save the ObjectId
of a referenced document, rather than embedding it directly, but you still want to pull down that data when you
retrieve a document. For example, when GETting a "Person" document, you want the data for their cars emebedded too,
rather than just an array of ObjectIds to those "Car" documents.
So instead of getting:

{
    "_id": "58b5b8fae5f45354a5943048",
    "name": "Eric",
    "carsOwned": [
        "58b5b8f0e5f45354a5943047"
    ]
}

Instead, you'll get:

{
    "_id": "58b5b8fae5f45354a5943048",
    "name": "Eric",
    "carsOwned": [
        {
            "_id": "58b5b8f0e5f45354a5943047",
            "make": "Toyota",
            "model": "Supra",
            "year": 2017,
            "miles": 0,
            "__v": 0
        }
    ]
 }
*/
personRoutes.get("/:id", function (req, res) {
    
    // If there is a query string `populate=true` in the URL (e.g.: "http://localhost:8000/person?populate=true")
    // Then the below `populate` variable will be `true`. (Otherwise it will be undefined, and therefore falsey)
    var populate = req.query.populate;

    // When you don't include a callback function, it won't execute your query quite yet.
    // Instead it will return a Query object that you can do additional things to
    var query = Person.findById(req.params.id);

    // If the URL had a populate=true in it, use the `.populate` method to embed the data from the object with
    // the referenced ObjectId.
    if (populate) {
        // the second parameter to the populate method will either include ONLY the provided properties for the
        // populated object ("carsOwned", "make") will populate the carsOwned object but ONLY include the `make` property
        // OR it can remove properties by inluding a `-` before the property name. So .populate("carsOwned", "-year")
        // will embed the referenced object but not include the `year` property
        query.populate("carsOwned", "-year")
    }

    // Once you've done everything to the query you want (you can do other cool things too like sort the results and
    // limit them to a certain number of results, etc.), you need to execute the query and provide a callback function
    query.exec(function (err, person) {
        if (err) return res.status(500).send(err);
        res.send(person);
    });
});

personRoutes.post("/", function (req, res) {
    var person = new Person(req.body);
    person.save(function (err) {
        if (err) return res.status(500).send(err);
        res.status(201).send(person);
    });
});

personRoutes.put("/:id", function (req, res) {
    Person.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, person) {
        if (err) return res.status(500).send(err);
        res.send(person);
    });
});

personRoutes.delete("/:id", function (req, res) {
    Person.findByIdAndRemove(req.params.id, function (err, person) {
        if (err) return res.status(500).send(err);
        res.send(person);
    });
});

module.exports = personRoutes;