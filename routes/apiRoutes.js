const db = require("../models/index");

module.exports = (app) => {

    //render index
    app.get("/", (req, res) => {
        res.send(index.html);
    });

    //pull list of workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then((data) => {
            res.json(data);
        });
    });

    //pull workouts from dates
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then((data) => {
            res.json(data);
        });
    });

    //add exercises to workout
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