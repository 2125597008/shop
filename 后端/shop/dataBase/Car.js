const connection = require("./db");

//查询
const getorder = () => {
  return new Promise((resolve, reject) => {
    connection.query(`select * from shop LIMIT 0,1000`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const getRaking = () => {
  return new Promise((resolve, reject) => {
    connection.query(`select * from comlist LIMIT 0,1000`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const getmember = () => {
  return new Promise((resolve, reject) => {
    connection.query(`select * from member LIMIT 0,1000`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const gethuiyuan = () => {
  return new Promise((resolve, reject) => {
    connection.query(`select * from huiyuan LIMIT 0,1000`, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const getdingdan = (params) => {
  return new Promise((resolve, reject) => {
    const limit = (params.page - 1) * params.limit;
    connection.query(
      `select * from dingdan LIMIT ${limit} ,${params.limit}`,
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

//添加
const addmenudb = (params) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "insert into menu(name,price,quantity) values(?,?,?)",
      [params.name, params.price, params.quantity],
      (err, data) => {
        //如果err为null则成功
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

//改
const upmenudb = (id, param) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "update menu set name = ? ,price = ? , quantity = ? where id = ?",
      [param.name, param.price, param.quantity, id],
      (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

//删除
const deletemenudb = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(`delete from menu where id = ?`, [id], (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

//搜索
const searchmenu = (param) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "select * from menu where name = ?",
      [param],
      (err, data) => {
        console.log(data);
        if (err) {
          reject(err);
        }
        resolve(data);
      }
    );
  });
};

// //第二个列表
// const reduceQuantity = (id) => {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       "UPDATE menu SET quantity = quantity - 1 WHERE id = ?",
//       [id],
//       (err, data) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       }
//     );
//   });
// };

//导出方法，在需要使用到的模块中导入
module.exports = {
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
};
