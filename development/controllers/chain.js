/** Created by Prateek Madaan on 27 November 2018*/ 

const Blockchain = require('../blockchain');
const { OK } = require("http-status-codes");
const bitcoin = new Blockchain();

exports.retrieveBlockchain = (req, res, next) => {
  console.log("hooked up...");
  res.status(OK).send(bitcoin);
};

exports.createTransaction = (req, res, next) => {
//   console.log(req.body);
  const { amount } = req.body;
  res.status(OK).send(`The amount of the transaction is ${amount} bitcoins`);
};

exports.mineBlock = (req, res, next) => {
  console.log("hooked up...");
};
