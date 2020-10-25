const db = require("../models/index");

module.exports = function (app) {

    
    //list of workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
          .then((data) => {
            res.json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

    //workouts from dates
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7)
          .then((data) => {
            res.json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          });
      });

    //update exercise to workout
    app.put("/api/workouts/:id", (req, res) => {
        
      db.Workout.findByIdAndUpdate(
            {
            _id: req.params.id
            },
            { $push: {exercises: req.body}}
            
        )
          .then((data) => {
            res.json(data);
          })
          .catch(err => {
            res.status(400).json(err);
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