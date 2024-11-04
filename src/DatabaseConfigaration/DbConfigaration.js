const mongoose = require("mongoose");
const chalk = require("chalk");
const { DBName } = require("../Constant/constant.js");

const DBConnection = async () => {
  try {
    const connectionInfo = await mongoose.connect(
      `${process.env.DARABASE_URL}/${DBName}`
    );
    console.log(
      chalk.blue.bgBlackBright.bold(
        `MongoDB Connected !! DB HOST !! ${
          (await connectionInfo).connection.host
        }`
      )
    );
  } catch (error) {
    console.log(chalk.bgGreenBright(error));
  }
};

module.exports = { DBConnection };