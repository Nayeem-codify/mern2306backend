const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: [true, "Firstname Missing !!"],
      trim: true,
      max: [15, "Max Name Size 15 Character"],
      min: [3, "Min Value Size 3 Character"],
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
      max: [11, "Invalid Telephone Number"],
    },
    Address1: {
      type: String,
      required: [true, "Address1 Missing !!"],
    },
    Address2: {
      type: String,
      required: [true, "Address2 Missing !!"],
    },
    City: {
      type: String,
      required: [true, "City Missing !!"],
    },
    PostCode: {
      type: Number,
      max: [15, "Invalid Post Code max 15 Character"],
      min: [4, "Invalid Post Code min 4 Character"],
    },
    Division: {
      type: String,
    },
    District: {
      type: String,
    },
    Password: {
      type: String,
      required: true,
      trim: true,
    },
    Otp: {
      type: Number,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };
