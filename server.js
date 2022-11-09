const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
   "mongodb+srv://munchkin:zBphnmKEdK4iCArT@cluster0.iixkejd.mongodb.net/FavlistDB",
   { useNewUrlParser: true },
   { userUnifiedTopology: true }
);

const formSchema = new Schema(
   {
      title: {
         type: String,
         required: true,
      },

      type: {
         type: String,
         required: true,
      },

      lang: {
         type: String,
         required: true,
      },

      casts: {
         type: String,
         required: true,
      },
      medium: {
         type: String,
      },
      rating: {
         type: String,
         required: true,
      },
      feedback: {
         type: String,
         required: true,
      },
   },
   {
      timestamps: true,
   }
);

const Form = mongoose.model("Form", formSchema);

app.get("/", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
   let newForm = new Form({
      title: req.body.title,
      type: req.body.type,
      lang: req.body.lang,
      casts: req.body.casts,
      medium: req.body.medium,
      rating: req.body.rating,
      feedback: req.body.feedback,
   });
   newForm.save();
   res.redirect("/");
});

app.listen(4001, function () {
   console.log("server is running on port 4001");
});
