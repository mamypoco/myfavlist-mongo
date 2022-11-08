const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
   "mongodb+srv://munchkin:zBphnmKEdK4iCArT@cluster0.iixkejd.mongodb.net/fakeDB",
   { useNewUrlParser: true },
   { userUnifiedTopology: true }
);

//create data schema
// const notesSchema = {
//    title: String,
//    content: String,
// };

const formSchema = {
   firstName: String,
   lastName: String,
   email: String,
   newsLetter: Boolean,
   tel: Number,
   feedback: String,
};

// const Note = mongoose.model("Note", notesSchema);

const Form = mongoose.model("Form", formSchema);

app.get("/", function (req, res) {
   res.sendFile(__dirname + "/index.html");
});

// app.post("/", function (req, res) {
//    let newNote = new Note({
//       title: req.body.title,
//       content: req.body.content,
//    });
//    newNote.save();
//    res.redirect("/");
// });

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
