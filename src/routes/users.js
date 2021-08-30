var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
/* GET users listing. */
router.route("/").get(userController.getUser);
module.exports = router;
