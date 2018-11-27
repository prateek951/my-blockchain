const { OK } = require("http-status-codes");

exports.retrieveBlockchain = (req, res, next) => {
  console.log("hooked up...");
};

exports.createTransaction = (req, res, next) => {
//   console.log(req.body);
  const { amount } = req.body;
  res.status(OK).send(`The amount of the transaction is ${amount} bitcoins`);
};

exports.mineBlock = (req, res, next) => {
  console.log("hooked up...");
};
