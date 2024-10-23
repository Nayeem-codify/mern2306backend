require("dotenv").config();

const { DBConnection } = require("./DatabaseConfigaration/DbConfigaration.js");
const app = require("./App.js");
//DataBase Connection Method//

DBConnection();
