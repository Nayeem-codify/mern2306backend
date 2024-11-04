const { model } = require("mongoose");

const CreateUser = async (req, res) => {
  try {
    res.send("Everything Is Ok");
  } catch (error) {
    console.log(error);
  }
};


module.exports = {CreateUser}