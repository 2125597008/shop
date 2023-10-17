const {
  getorder,
  getRaking,
  getmember,
  gethuiyuan,
  getdingdan,
  // addmenudb,
  // upmenudb,
  // deletemenudb,
  // searchmenu,
  // reduceQuantity,
} = require("../dataBase/Car");

const getorderList = (req, res, next) => {
  //   console.log(req.body);
  getorder().then((response) => {
    res.send(response);
  });
};

const getRakingList = (req, res, next) => {
  //   console.log(req.body);
  getRaking().then((response) => {
    res.send(response);
  });
};

const getmemberList = (req, res, next) => {
  //   console.log(req.body);
  getmember().then((response) => {
    res.send(response);
  });
};

const gethuiyuanList = (req, res, next) => {
  //   console.log(req.body);
  gethuiyuan().then((response) => {
    res.send(response);
  });
};

const getdingdanList = (req, res, next) => {
  //   console.log(req.body);
  const page = req.query.page || 1;
  const limit = req.query.size || 10;
  getdingdan({ page, limit }).then((response) => {
    res.send(response);
  });
};

const addmenu = (req, res, next) => {
  addmenudb(req.body).then((response) => {
    res.send(response);
  });
};

const upmenu = (req, res, next) => {
  upmenudb(req.params.id, req.body).then((response) => {
    res.send(response);
  });
};

const deletemenu = (req, res, next) => {
  deletemenudb(req.params.id).then((response) => {
    res.send(response);
  });
};

const inquiremenu = (req, res, next) => {
  searchmenu(req.params.name).then((response) => {
    res.send(response);
  });
};

// const twolis = (req, res, next) => {
//   reduceQuantity(req.params.quantity).then((response) => {
//     res.send(response);
//   });
// };

module.exports = {
  getorderList,
  getRakingList,
  getmemberList,
  gethuiyuanList,
  getdingdanList,
  //   addmenu,
  //   upmenu,
  //   deletemenu,
  //   inquiremenu,
  // twolis,
};
