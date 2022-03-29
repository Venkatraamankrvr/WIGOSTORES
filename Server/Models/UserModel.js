import isEmail from "validator/lib/isEmail.js";
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    require: true,

  },
  email: {
    type: "string",
    require: true,
    unique: true,
    validate: [isEmail, "Please enter a valid email address"]
  },
  password: {
    type: "string",
    require: true,
  },
  isAdmin: {
    type: "boolean",
    require: true,
    default: false,
  }
},
  {
    timestamps: true,
  })

export const User = mongoose.model("User", userSchema);