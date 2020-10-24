const db = require("../models/index");

module.exports = (app) => {

    // index file
    app.get("/", (req, res) => {
        res.send(index.html);
    });

    //list of workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then((data) => {
            res.json(data);
        });
    });

    //workouts from dates
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then((data) => {
            res.json(data);
        });
    });

    //add exercise to workout
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.updateOne({ _id: req.params.id }, { exercises: [req.body] }).then(function (updatedData) {
            res.json(updatedData);
        });
    });

    //add workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(data => {
                console.log(data + "post data ");
                res.json(data);
            })
            .catch(({ error }) => {
                console.log(error);
            });
    });
};