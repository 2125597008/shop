var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
//引入控制器文件
var {
  getorderList,
  getRakingList,
  getmemberList,
  gethuiyuanList,
  getdingdanList,
} = require("../Controller/CarController");

//相对于的路径访问相对于控制器的方法
router.get("/list", getorderList);
router.get("/comlist", getRakingList);
router.get("/member", getmemberList);
router.get("/huiyuan", gethuiyuanList);
router.get("/dingdan", getdingdanList);

module.exports = router;
