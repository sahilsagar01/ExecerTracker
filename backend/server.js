require('dotenv').config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.ExerciseDB, {useNewUrlParser: true})

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users")

app.use("/exercises" , exercisesRouter);
app.use("/users" , usersRouter)


app.listen(process.env.PORT || 3000 , function(){
    console.log("server is running")
})