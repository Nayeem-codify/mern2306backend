const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  FirstName: {
    type: String,
    required: [true, "Firstname Missing !!"],
    trim: true,
  },
  LastName: {
    type: String,
    trim: true,
  },
  Email_Address: {
    type: String,
    required: [true, "Email Address Missing !!"],
    unique: true,
  },
  Telephone: {
    type: Number,
    required: [true, "Telephone Missing !!"],
    unique: true,
  },
});
18.38
