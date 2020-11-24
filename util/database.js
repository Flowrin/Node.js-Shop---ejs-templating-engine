// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('nodcomplete', 'root', 'wp8g6Ckw', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

// let _db;
// const mongoConnect = (callback) => {
//   const mongodb = require('mongodb');
//   const MongoClient = mongodb.MongoClient;
//   MongoClient.connect(
//   )
//     .then((client) => {
//       console.log('Connected');
//       _db = client.db();
//       callback(client);
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   throw 'NO DB FOUDN';
// };
// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;
