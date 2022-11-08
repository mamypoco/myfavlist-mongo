const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
   "mongodb+srv://munchkin:zBphnmKEdK4iCArT@cluster0.iixkejd.mongodb.net/fakeDB",
   { useNewUrlParser: true },
   { userUnifiedTopology: true }
);

const formSchema = new Schema(
   {
      firstName: {
         type: String,
         required: true,
      },

      lastName: {
         type: String,
         required: true,
      },

      email: {
         type: String,
         required: true,
      },

      newsLetter: {
         type: Boolean,
      },
      tel: {
         type: Number,
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
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      newsLetter: req.body.newsLetter,
      tel: req.body.tel,
      feedback: req.body.feedback,
   });
   newForm.save();
   res.redirect("/");
});

app.listen(4000, function () {
   console.log("server is running on port 4000");
});
